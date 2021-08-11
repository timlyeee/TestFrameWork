# Python Websocket #

一个大前提是：
websocket 的连接是具有全面性的，也就是说无论是什么语言开启的websocket服务都是可双向通信的。所以不要去质疑是否是因为语言不同导致的消息未收到，我就多次陷入这样的困惑中。

所以我们创建一个尽可能小的server端服务，用来适配所使用的websocket信息传输。

```python
import json
import time
from multiprocessing import Process, Queue
from aiohttp import web

def start_server(q):
    async def wshandle(request):
        ws = web.WebSocketResponse()
        await ws.prepare(request)
        
        async for msg in ws:
            print(msg)
            await ws.send_str("@RECEIVED")
        return ws

    app = web.Application()
    app.add_routes([web.get('/', wshandle),])
    web.run_app(app, host="127.0.0.1", port='8888')



if __name__ == '__main__':
    message = Queue()
    server = Process(target=start_server, args=(message,))
    server.start()
    try:
        while 1:
            pass
    except KeyboardInterrupt:
        server.terminate()
```

aiohttp所使用的websocket模式比较简洁。但不太容易理解。
# Client #
## TS/JS 中的while循环和事件处理机制 ##

核心部分的代码是处理TestNode的循环机制。鉴于js的单线程特性，这导致了如果我在做while循环的时候不退出，那么我一旦发送消息的指令送出去，while循环不推出的情况下是收不到消息的。
```ts
var ws = new WebSocket("ws://localhost:8888")
ws.onmessage = () => {
    console.log("received");
}
while (true){
    ws.send("Hello");
} 
```
至于为什么要做while循环，主要是为了利用类似锁的机制去控制TestNode的测试前进。但是这个方法被证明是行不通的。因为不会receive到。

之所以这个方法不行的原因有两点。

* js中的while循环是单线性而函数是后执行的。如下的两段代码所发送的消息是不同的
```js
async function fs() { 
    var i = 10; 
    while (i > 0) 
    { i = i - 1; await setTimeout(() => { ws.send("Hellow" + i) }, 1000) } 
}
//message is Hellow0, sent 10 times

async function bs() { 
    var i = 10; 
    while (i > 0) 
    { i = i - 1; 
    await ws.send("Hellow" + i) 
    } 
}
//message is Hellow9-0, number is different
```
所以while会不管顾setTimeout的await而去执行自己的while循环。同时直到while循环退出才会执行send指令。说白了就是浏览器单线程的限制导致的。

此处的setTimeout和ws.onmessage是一样的，都属于事件触发机制，算是向后处理的。属于是等待被执行的内容中的后一个。

所以这是一种反直觉的写法，和其它语言中的timer到时准时执行并不相同。
## js中的自旋锁 ##
既然while循环加事件处理机制行不通，那么js中的锁是怎么实现的？async和await是怎么做的？

实际上这些都是后处理。如果不通过native代码去实现的话，是没有办法做到真正的锁的。

> https://zhuanlan.zhihu.com/p/97188370
```js
function lock () {
  this.locked = null;
}

lock.prototype.lock = async function () {
  if (this.locked === null)
    this.locked = [ ];
  else
    await new Promise (res => this.locked.push (res));
}

lock.prototype.unlock = function () {
  if (this.locked.length){
      console.log("unlock and do release");
        this.locked.shift () ();
  }
  else
    this.locked = null;
};

```

上述代码提供了一种基于async和await实现的lock机制，但是如果我们以下述方法去使用它
```js 
var a = new lock();
async function  inLock (f ) {
    await a.lock ();
    f();
    a.unlock ();
  
}

inLock(()=>{
    setTimeout(()=>{console.log("Hello")},10000);
})
inLock(()=>{
    setTimeout(()=>{console.log("Hello")},10000);
})
inLock(()=>{
    setTimeout(()=>{console.log("Hello")},10000);
})

```

我们会惊讶的发现，这三个log竟然是同时发生的，也就是说锁没有办法去消除事件后处理的问题。但是这个锁确实能把比较大型的函数给锁住。

## 用事件处理机制打败事件处理机制 ## 

既然如此，我们就利用js的事件处理机制来满足我们的需求吧。

我在很早之前写过一个帖子，万物皆可使用事件处理机制，并赋予事件，因为既然dom节点都可以监听事件，我们自然也可以。也就是利用基类EventTarget
```js

var a = new EventTarget();
var ev = new CustomEvent("hi");
a.addEventListener("hi",()=>{
    console.log("hello");
});
a.dispatchEvent(ev);

```
如果我们在浏览器中运行这段代码，可以发现a的事件处理机制被触发了。所以TestNodeController也可以作为EventTarget存在。并且在WebSocket收到消息的时候触发其事件。

但是如果这样也就没有意义了。


# this 的指针问题 #

# examples/server_simple.py
import json
import time
from multiprocessing import Process, Queue
from aiohttp import web

stateCode = {
    'INIT': 'Init',
    'START': 'Start',
    'ERROR': 'Error',
    'END': 'End',
    'SCENE_CHANGED': 'SceneChanged',
    'PERFORMANCE': 'Performance',
    'TIMEOUT': 'Timeout',
}

receivedCode = {
    'FAILED': 'Failed',
    'ERROR': 'Error',
    'Pass': 'Pass',
    'OK': 'Ok',
    'CHANGE_SCENE': 'ChangeScene',
}

timeout = 1 * 60

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
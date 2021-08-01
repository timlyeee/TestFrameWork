
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/** Code to contain a websocket connection and other parameters involved 
 * Singleton
*/
export class Client {
    public static Instance: Client;
    public websocket: WebSocket;
    public withPort: boolean;
    constructor(wsType: string = "ws", server: string = "127.0.0.1", port: number = 8000, timeout: number = 30000, withPort: boolean) {
        if (!Client.Instance)
            Client.Instance = this;

        var address = wsType + "://" + server;
        if (withPort) {
            address = address + ":" + port;
        }
        this.websocket = new WebSocket(address);
    }

    //TODO: change to decorator mode
    /**
     * Usage: 
     * @wsOnError
     * triggerDebugMode(){...}
     * 
     * the framework will automatically trigger the callback funtion once it was init by the scene.
     */
    public wsOnError(errorCallBack: Function) {
        this.websocket.addEventListener("error", (event) => {
            errorCallBack(event);
        })
    }

    /*
    receiveCallBack should has an argument to read the params in event,
    or we should not open this function to be used outside
     */
    public wsOnMessage(receiveCallBack: Function) {
        this.websocket.addEventListener("message", (event) => {
            receiveCallBack(event);
        })
    }



}

/** Test Node */
export class TestNode {
    public isHead: boolean;
    public testName: string;
    public currentTest: Promise<string>;
    constructor(_testName: string, f: Promise<string>) {

        this.testName = _testName;
        this.currentTest = f;

        // ===== add this node into controller ======
        if (!TestNodeController.Instance)
            new TestNodeController;

        TestNodeController.Instance.addTest(this);

    }
    

}

/** TestNode controller */
export class TestNodeController {
    public static Instance: TestNodeController;
    public loopIsLocked: boolean = false;
    public nodes: TestNode[] = [];
    constructor() {
        if (!TestNodeController.Instance)
            TestNodeController.Instance = this;


    }
    public addTest(t: TestNode) {
        this.nodes.push(t);
    }
    public testToEnd() {
        while (!this.nodes.length) {
            if(!this.loopIsLocked){
                //lock the loop
                this.loopIsLocked = true;
                console.log("start Test: "+this.nodes[0].testName);
                this.sendMessage(this.nodes[0]).then(()=>{
                    this.nodes[0].currentTest.then(()=>{
                        this.nodes.splice(0,1);
                        this.loopIsLocked = false;
                    });
                    
                    
                });
            }
            
        }

    }
    public async sendMessage(t: TestNode): Promise<string> {

        var _p = new Promise<string>((resolve, reject) => {
            Client.Instance.websocket.send("this test is" + t.testName);
        });
        return _p;
    }
}


import { _decorator, Component, Node, assert, ResolutionPolicy } from 'cc';
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
        this.websocket.onmessage = (event) => {
            console.log("message received");
            receiveCallBack(event);
            if(TestNodeController.Instance.nodes.length)
                TestNodeController.Instance.ShiftTest();
        }
    }



}

/** Test Node */
export class TestNode {
    public isHead: boolean;
    public testName: string;
    public currentTest:  Function;
    constructor(_testName: string, f:Function) {

        this.testName = _testName;
        this.currentTest = f;
        if (!TestNodeController.Instance)
            new TestNodeController;

        TestNodeController.Instance.addTest(this);

    }
    

}

/** TestNode controller */
export class TestNodeController extends EventTarget {
    public static Instance: TestNodeController;
    public nodes: TestNode[] = [];
    constructor() {
        super();
        if (!TestNodeController.Instance)
            TestNodeController.Instance = this;
    }
    public addTest(t: TestNode) {
        this.nodes.push(t);
    }
    public async ShiftTest() {
        var n = this.nodes[0];
        this.nodes.splice(0,1);
        n.currentTest();
        this.sendMessage(n); 
    }
    public sendMessage(t: TestNode){
        Client.Instance.websocket.send("this test is: " + t.testName);
    }
}


import { _decorator, Component, Node, Button, EventHandler, Label, game, JsonAsset, Scene, director, DirectionalLight, color, Color } from 'cc';
import { Client, TestNodeController, TestNode } from './Client';
const { ccclass, property } = _decorator;

enum chaiType {
    NONE = 0,
    EXPECT,
    SHOULD,
}
declare class AutoTestConfigJson extends JsonAsset {
    json: {
        isAutoTest: boolean,
        server: string,
        port: number,
        socketType: string,
        timeOut: number
    }
}
@ccclass('Framework')
export class Framework extends Component {
    //static servers
    tnd: TestNodeController = new TestNodeController();
    client: Client | null;
    //UI components

    @property(JsonAsset)
    public autoTestConfig: AutoTestConfigJson | null = null;
        static isInit = false;


    public test1() {
        console.log(this);
        this.node.getChildByName("Test1").getComponent(Label).string = "Done";
    }
    public t1: TestNode;

    public test2() {

        this.node.getChildByName("Test2").getComponent(Label).color = Color.GREEN;

    }
    public t2: TestNode;

    public test3() {

        this.node.getChildByName("Test3").getComponent(Label).fontSize = 30;

    }
    public t3: TestNode;


    start() {
        // Default inited : TestNodeController
        this.client = new Client(
            "ws",
            "127.0.0.1",
            8888,
            30000,
            true
        );
        this.t1 = new TestNode(
            "test1",
            ()=>{
                return new Promise<void>((resolve,reject)=>{
                    this.test1();
                    resolve();
                })
            }
        )

        this.t2 = new TestNode(
            "test2",
            ()=>{
                this.test2();
            }
            
        )
        this.t3 = new TestNode(
            "test3",
            this.test3
        )


        Client.Instance.wsOnMessage(() => {
        })
        //TODO: way to inject into new scene

        //TODO: way to read events

        //TODO: 
        //this.startTest();
    }

    public startTest() {
        this.tnd.ShiftTest();
    }

}



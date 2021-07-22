
import { _decorator, Component, Node, Button, EventHandler, Label, game, JsonAsset, Scene, director, eventManager } from 'cc';
import { Client } from './Client';
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
export function cbBase(TestList: Function[],chaiType: number = 0) {
    var f: Function = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {

        console.log("@Inject function to list");

    }

    TestList.push(f);
    return f;
}
export class testPlugin{
    
    
    //TODO: name of cblist
    public static cbList: Function[] = [];
    
    
    
}



@ccclass('Framework')
export class Framework extends Component {

    static Instance: Framework;
    public t: Function[] = testPlugin.cbList;

    //UI components
    @property(Button)
    public toPrevScene: Button | null = null;
    @property(Button)
    public toNextScene: Button | null = null;

    //Connect Properties
    @property(JsonAsset)
    public autoTestConfig: AutoTestConfigJson | null = null;
    static isInit = false;

    //static _client , could be injected automatically 
    static _client : Client;



    @cbBase(testPlugin.cbList)
    test1() {
        console.log("@Running time alerts test 1");
    }
    @cbBase(testPlugin.cbList)
    test2() {
        console.log("@Running time alerts test 2");
    }



    start() {
        if(!Framework.Instance){
            Framework.Instance = this;
        }

        if(!Framework.isInit){
            this.initWs();
            
        }

        
        //TODO: way to inject into new scene

        //TODO: way to read events

        //TODO: 
        this.referList();
        this.startTest();
    }
    referList() {
        console.log("@TL is" + this.t[0].name);
        debugger
    }

    public initWs(){
        Framework._client = new Client(
            this.autoTestConfig!.json.socketType,
            this.autoTestConfig!.json.server,
            this.autoTestConfig!.json.port,
            this.autoTestConfig!.json.timeOut);
    }

    public startTest(){
        while (this.t.length != 0){
            
            Framework._client.websocket.onmessage=(event)=>{
                var msg : string = "Undefined"; 
                try{
                    msg=JSON.parse(event.data);} catch{
                        console.log("@Message is illegal, try using json format");
                    }
                console.log(msg);
            }
            Framework._client.websocket.send("@Scene Node "+this.node.scene.name+""+this.t[0].name);
            this.t[0];
            this.t.slice(0,1);
        }
        console.log("Current Scene has finished all tests");
    }

    public nextScene() {
        director.loadScene("Demo_ui", () => {
            Framework._client?.websocket.send("@scene Changed");
        })
    }

}










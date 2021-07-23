
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;


export class Client{
    public websocket : WebSocket;
    constructor(wsType: string = "ws", server: string = "127.0.0.1", port:number = 8000, timeout: number = 30000){
        this.websocket = new WebSocket(wsType+"://" + server+":" + port);
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
        this.websocket.onerror=()=>{
            errorCallBack;
        };
    }

}

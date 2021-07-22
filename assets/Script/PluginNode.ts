
import { _decorator, Component, Node } from 'cc';
import { cbBase, Framework, testPlugin } from './Framework';
const { ccclass, property } = _decorator;

var cbList:Function[]=[];

@ccclass('PluginNode')
export class PluginNode extends Component {
    public fw : Framework|null = null;
    public cbList: Function[] = [];
    start () {
        this.fw = Framework.Instance;
        // [3]
        this.fw.startTest();
    }
    @cbBase(testPlugin.cbList)
    test1(){
        
    }
    // update (deltaTime: number) {
    //     // [4]
    // }
}


/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */


import { _decorator, Component, Node, Camera, Vec3, MeshRenderer, Scene, Material } from 'cc';
import { cbBase, Framework, testPlugin } from './Framework';
const { ccclass, property } = _decorator;

var cbList:Function[]=[];

@ccclass('PluginNode')
export class PluginNode extends Component {
    public fw : Framework|null = null;
    
    start () {
        this.fw.t=cbList;
    }
    @cbBase(cbList)
    test1(){
        var camNode = this.node.getChildByName("Camera");
        camNode?.setPosition(new Vec3(0,100,1000));

    }
    @cbBase(cbList)
    test2(){
        var observ = this.node.scene.getChildByName("Observable");
        var mtl = new Material();
        mtl.initialize({
            effectName:'scene-gizmo.mtl',
        })
        observ?.getComponent(MeshRenderer)?.setMaterial(mtl,0);
    }
    @cbBase(cbList)
    test3(){
        var observ = this.node.scene.getChildByName("Observable");
        observ!.scale.set(50,100,100) ;
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

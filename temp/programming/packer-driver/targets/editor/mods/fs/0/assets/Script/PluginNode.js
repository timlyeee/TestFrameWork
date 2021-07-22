System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, cbBase, Framework, testPlugin, _dec, _dec2, _class, _class2, _temp, _crd, ccclass, property, cbList, PluginNode;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _reportPossibleCrUseOfcbBase(extras) {
    _reporterNs.report("cbBase", "./Framework", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFramework(extras) {
    _reporterNs.report("Framework", "./Framework", _context.meta, extras);
  }

  function _reportPossibleCrUseOftestPlugin(extras) {
    _reporterNs.report("testPlugin", "./Framework", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      cbBase = _unresolved_2.cbBase;
      Framework = _unresolved_2.Framework;
      testPlugin = _unresolved_2.testPlugin;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d8645uFG8ZLoqjs8D2pjmkz", "PluginNode", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      cbList = [];

      _export("PluginNode", PluginNode = (_dec = ccclass('PluginNode'), _dec2 = (_crd && cbBase === void 0 ? (_reportPossibleCrUseOfcbBase({
        error: Error()
      }), cbBase) : cbBase)((_crd && testPlugin === void 0 ? (_reportPossibleCrUseOftestPlugin({
        error: Error()
      }), testPlugin) : testPlugin).cbList), _dec(_class = (_class2 = (_temp = class PluginNode extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "fw", null);

          _defineProperty(this, "cbList", []);
        }

        start() {
          this.fw = (_crd && Framework === void 0 ? (_reportPossibleCrUseOfFramework({
            error: Error()
          }), Framework) : Framework).Instance; // [3]

          this.fw.startTest();
        }

        test1() {} // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_applyDecoratedDescriptor(_class2.prototype, "test1", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "test1"), _class2.prototype)), _class2)) || _class));
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


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PluginNode.js.map
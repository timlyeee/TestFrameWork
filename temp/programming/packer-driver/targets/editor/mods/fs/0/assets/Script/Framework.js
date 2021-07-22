System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Button, JsonAsset, director, Client, testPlugin, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _temp, _crd, ccclass, property, chaiType, Framework;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function cbBase(TestList, chaiType = 0) {
    var f = (target, propertyKey, descriptor) => {
      console.log("@Inject function to list");
    };

    TestList.push(f);
    return f;
  }

  function _reportPossibleCrUseOfClient(extras) {
    _reporterNs.report("Client", "./Client", _context.meta, extras);
  }

  _export({
    cbBase: cbBase,
    testPlugin: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Button = _cc.Button;
      JsonAsset = _cc.JsonAsset;
      director = _cc.director;
    }, function (_unresolved_2) {
      Client = _unresolved_2.Client;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "caa10Yw2zxHWb0OTq1vD9M5", "Framework", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      (function (chaiType) {
        chaiType[chaiType["NONE"] = 0] = "NONE";
        chaiType[chaiType["EXPECT"] = 1] = "EXPECT";
        chaiType[chaiType["SHOULD"] = 2] = "SHOULD";
      })(chaiType || (chaiType = {}));

      _export("testPlugin", testPlugin = class testPlugin {});

      _defineProperty(testPlugin, "cbList", []);

      _export("Framework", Framework = (_dec = ccclass('Framework'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(JsonAsset), _dec5 = cbBase(testPlugin.cbList), _dec6 = cbBase(testPlugin.cbList), _dec(_class = (_class2 = (_temp = _class3 = class Framework extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "t", testPlugin.cbList);

          _initializerDefineProperty(this, "toPrevScene", _descriptor, this);

          _initializerDefineProperty(this, "toNextScene", _descriptor2, this);

          _initializerDefineProperty(this, "autoTestConfig", _descriptor3, this);
        }

        test1() {
          console.log("@Running time alerts test 1");
        }

        test2() {
          console.log("@Running time alerts test 2");
        }

        start() {
          if (!Framework.Instance) {
            Framework.Instance = this;
          }

          if (!Framework.isInit) {
            this.initWs();
          } //TODO: way to inject into new scene
          //TODO: way to read events
          //TODO: 


          this.referList();
          this.startTest();
        }

        referList() {
          console.log("@TL is" + this.t[0].name);
          debugger;
        }

        initWs() {
          Framework._client = new (_crd && Client === void 0 ? (_reportPossibleCrUseOfClient({
            error: Error()
          }), Client) : Client)(this.autoTestConfig.json.socketType, this.autoTestConfig.json.server, this.autoTestConfig.json.port, this.autoTestConfig.json.timeOut);
        }

        startTest() {
          while (this.t.length != 0) {
            Framework._client.websocket.onmessage = event => {
              var msg = "Undefined";

              try {
                msg = JSON.parse(event.data);
              } catch {
                console.log("@Message is illegal, try using json format");
              }

              console.log(msg);
            };

            Framework._client.websocket.send("@Scene Node " + this.node.scene.name + "" + this.t[0].name);

            this.t[0];
            this.t.slice(0, 1);
          }

          console.log("Current Scene has finished all tests");
        }

        nextScene() {
          director.loadScene("Demo_ui", () => {
            var _Framework$_client;

            (_Framework$_client = Framework._client) === null || _Framework$_client === void 0 ? void 0 : _Framework$_client.websocket.send("@scene Changed");
          });
        }

      }, _defineProperty(_class3, "Instance", void 0), _defineProperty(_class3, "isInit", false), _defineProperty(_class3, "_client", void 0), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toPrevScene", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "toNextScene", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "autoTestConfig", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "test1", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "test1"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "test2", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "test2"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Framework.js.map
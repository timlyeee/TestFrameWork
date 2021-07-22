System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Client, _crd, ccclass, property;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("Client", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c6b046GOGhPy64OVCFn3WdJ", "Client", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Client", Client = class Client {
        constructor(wsType = "ws", server = "127.0.0.1", port = 8000, timeout = 30000) {
          _defineProperty(this, "websocket", void 0);

          this.websocket = new WebSocket(wsType + "://" + server + ":" + port);
        } //TODO: change to decorator mode

        /**
         * Usage: 
         * @wsOnError
         * triggerDebugMode(){...}
         * 
         * the framework will automatically trigger the callback funtion once it was init by the scene.
         */


        wsOnError(errorCallBack) {
          this.websocket.onerror = () => {
            errorCallBack;
          };
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Client.js.map
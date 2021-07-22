System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _crd, ccclass, property, Client;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c6b046GOGhPy64OVCFn3WdJ", "Client", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Client", Client = /*#__PURE__*/function () {
        function Client(wsType, server, port, timeout) {
          if (wsType === void 0) {
            wsType = "ws";
          }

          if (server === void 0) {
            server = "127.0.0.1";
          }

          if (port === void 0) {
            port = 8000;
          }

          if (timeout === void 0) {
            timeout = 30000;
          }

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


        var _proto = Client.prototype;

        _proto.wsOnError = function wsOnError(errorCallBack) {
          this.websocket.onerror = function () {
            errorCallBack;
          };
        };

        return Client;
      }());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Client.js.map
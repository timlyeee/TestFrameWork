System.register("chunks:///_virtual/Client.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,o,n;return{setters:[function(e){t=e.defineProperty},function(e){o=e.cclegacy,n=e._decorator}],execute:function(){o._RF.push({},"c6b046GOGhPy64OVCFn3WdJ","Client",void 0);n.ccclass,n.property,e("Client",function(){function e(e,o,n,c){void 0===e&&(e="ws"),void 0===o&&(o="127.0.0.1"),void 0===n&&(n=8e3),t(this,"websocket",void 0),this.websocket=new WebSocket(e+"://"+o+":"+n)}return e.prototype.wsOnError=function(e){this.websocket.onerror=function(){}},e}());o._RF.pop()}}}));

System.register("chunks:///_virtual/Framework.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,o,r,i,c,l,s,u,a,p;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,o=t.defineProperty,r=t.assertThisInitialized,i=t.initializerDefineProperty},function(t){c=t.cclegacy,l=t._decorator,s=t.Button,u=t.JsonAsset,a=t.director,p=t.Component}],execute:function(){var f,y,g,b,v,m,w,d,h,D,P;c._RF.push({},"caa10Yw2zxHWb0OTq1vD9M5","Framework",void 0);var S=l.ccclass,k=l.property,z=[];function F(t,e){return function(t,e,n){console.log("@Inject function to list")}}t("Framework",(f=S("Framework"),y=k(s),g=k(s),b=k(u),v=F(),m=F(),f((h=e((d=function(t){function e(){for(var e,n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return e=t.call.apply(t,[this].concat(c))||this,o(r(e),"t",z),i(r(e),"toPrevScene",h,r(e)),i(r(e),"toNextScene",D,r(e)),i(r(e),"autoTestConfig",P,r(e)),o(r(e),"client",null),e}n(e,t);var c=e.prototype;return c.test1=function(){console.log("@Running time alerts")},c.test2=function(){console.log("@Running time alerts")},c.start=function(){this.referList()},c.referList=function(){console.log("@TL is"+this.t)},c.nextScene=function(){var t=this;a.loadScene("Demo_ui",(function(){var e;null===(e=t.client)||void 0===e||e.websocket.send("@scene Changed")}))},e}(p)).prototype,"toPrevScene",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=e(d.prototype,"toNextScene",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=e(d.prototype,"autoTestConfig",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),e(d.prototype,"test1",[v],Object.getOwnPropertyDescriptor(d.prototype,"test1"),d.prototype),e(d.prototype,"test2",[m],Object.getOwnPropertyDescriptor(d.prototype,"test2"),d.prototype),w=d))||w));c._RF.pop()}}}));

System.register("chunks:///_virtual/PluginNode.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,o,r;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,r=t.Component}],execute:function(){var u;n._RF.push({},"d8645uFG8ZLoqjs8D2pjmkz","PluginNode",void 0);var i=o.ccclass;o.property,t("PluginNode",i("PluginNode")(u=function(t){function n(){return t.apply(this,arguments)||this}return e(n,t),n.prototype.start=function(){},n}(r))||u);n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Client.ts","./Framework.ts","./PluginNode.ts"],(function(){"use strict";return{setters:[null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
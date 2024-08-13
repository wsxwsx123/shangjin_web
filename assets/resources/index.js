System.register("chunks:///_virtual/en.ts",["cc"],(function(e){var n;return{setters:[function(e){n=e.cclegacy}],execute:function(){n._RF.push({},"0eed7sGB5VKPq8aqRJYmWA3","en",void 0);var t=window,a=e("languages",{downOffPanel:{title:"log in again",tip:"Disconnected please log in again"},joinRoomPanel:{title:"Join the room",input:"Please enter the room number"},matchPanel:{title:"Free matching"},messagePanel:{voiceTxt:"Voice input"},tipPanel:{title:"Check out of the room?"}});t.languages||(t.languages={}),t.languages.en=a,n._RF.pop()}}}));

System.register("chunks:///_virtual/resources",["./en.ts","./zh.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/zh.ts",["cc"],(function(e){var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"45b76p0KrFDf5kR4AmZWDHr","zh",void 0);var n=window,a=e("languages",{downOffPanel:{title:"重新登录",tip:"已掉线请重新登录"},joinRoomPanel:{title:"加入房间",input:"请输入房间号"},matchPanel:{title:"自由匹配"},messagePanel:{voiceTxt:"语音录入中"},tipPanel:{title:"确认退出房间？"}});n.languages||(n.languages={}),n.languages.zh=a,t._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
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
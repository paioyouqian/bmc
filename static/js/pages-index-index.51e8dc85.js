(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0d9b":function(t,e,a){"use strict";var n=a("4ea4");a("4d63"),a("ac1f"),a("25f0"),a("466d"),a("841c"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var i=n(a("1da1")),s=n(a("6314")),o=(a("2f62"),{data:function(){return{plan:0,opacityValue:.2,show:!1,show2:!1,show3:!1}},watch:{plan:function(){10==this.plan&&(this.opacityValue=.3),20==this.plan&&(this.opacityValue=.4),30==this.plan&&(this.opacityValue=.4),40==this.plan&&(this.opacityValue=.6),50==this.plan&&(this.opacityValue=.6),60==this.plan&&(this.opacityValue=.7),70==this.plan&&(this.opacityValue=.8),80==this.plan&&(this.opacityValue=.9),90==this.plan&&(this.opacityValue=1),100==this.plan&&uni.navigateTo({url:"/pages/home/home"})},show:function(){var t=this,e=setInterval((function(){t.plan+=1,t.plan>=100&&clearInterval(e)}),50)}},onShow:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(){var e,a,n,i,o,r,c,u=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="",a=new RegExp("(^|&)inviteCode=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(a),null!=n&&(e=unescape(n[2])),"undefined"!==typeof web3?window.ethereum?(i=window.ethereum,web3=new s.default(i)):window.web3?web3=new s.default(web3.currentProvider):console.log("Non-Ethereum browser detected. You should consider trying MetaMask!"):alert("请在钱包浏览器内打开"),t.next=7,web3.eth.getCoinbase();case 7:if(o=t.sent,o){t.next=11;break}return console.log("Please activate MetaMask first."),t.abrupt("return");case 11:if(r=o.toLowerCase(),""==this.address||"undefined"==typeof this.address||this.address!=r){t.next=16;break}this.getData(),t.next=20;break;case 16:return c={address:r,invite_code:e},""!=e&&(c.invite_code=e),t.next=20,this.$store.dispatch("register",c).then((function(t){200==t.status&&200==t.data.code&&u.getData()}));case 20:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{getData:function(){var t=this;this.$store.dispatch("initData").then((function(e){200==e.status&&200==e.data.code&&(t.show=!0)})),this.$store.dispatch("getGlobalDividends").then((function(e){200==e.status&&200==e.data.code&&(t.show2=!0)})),this.$store.dispatch("invitation").then((function(e){200==e.status&&200==e.data.code&&(t.show3=!0)}))}},mounted:function(){var t=this,e=setInterval((function(){t.plan+=1,t.plan>=70&&clearInterval(e)}),100)}});e.default=o},"1cea":function(t,e,a){t.exports=a.p+"static/img/start_bg@2x.5142397f.png"},"242f":function(t,e,a){t.exports=a.p+"static/img/dongtu@2x.c99d2102.png"},"54ff":function(t,e,a){"use strict";var n=a("c8f4"),i=a.n(n);i.a},8069:function(t,e,a){"use strict";a.r(e);var n=a("0d9b"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},"8dc0":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.main[data-v-c2113236]{position:relative;width:100vw;height:100vh}.main .bg[data-v-c2113236]{width:%?750?%;height:%?784?%}.main .bg uni-image[data-v-c2113236]{width:100%;height:100%}.main .logo[data-v-c2113236]{width:%?200?%;height:%?200?%;position:absolute;top:%?222?%;left:%?276?%}.main .logo uni-image[data-v-c2113236]{width:100%;height:100%}.main .title[data-v-c2113236]{width:100%;text-align:center;font-size:%?64?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#efca89;line-height:%?90?%;letter-spacing:%?6?%;position:absolute;top:%?470?%}.main .tupian[data-v-c2113236]{width:%?600?%;height:%?600?%;position:absolute;top:%?650?%;left:10%;-webkit-animation:dong-data-v-c2113236 10s infinite ease-in-out;animation:dong-data-v-c2113236 10s infinite ease-in-out}.main .tupian uni-image[data-v-c2113236]{width:100%;height:100%}.main .text[data-v-c2113236]{width:100%;text-align:center;position:absolute;top:%?608?%;font-size:%?64?%;font-family:DIN;color:#efca89;line-height:%?78?%;letter-spacing:%?6?%}@-webkit-keyframes dong-data-v-c2113236{0%{-webkit-transform:rotate(0deg) scale(1);transform:rotate(0deg) scale(1)}50%{-webkit-transform:rotate(180deg) scale(.8);transform:rotate(180deg) scale(.8)}100%{-webkit-transform:rotate(1turn) scale(1);transform:rotate(1turn) scale(1)}}@keyframes dong-data-v-c2113236{0%{-webkit-transform:rotate(0deg) scale(1);transform:rotate(0deg) scale(1)}50%{-webkit-transform:rotate(180deg) scale(.8);transform:rotate(180deg) scale(.8)}100%{-webkit-transform:rotate(1turn) scale(1);transform:rotate(1turn) scale(1)}}',""]),t.exports=e},bc88:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"main"},[n("v-uni-view",{staticClass:"bg"},[n("v-uni-image",{style:{opacity:t.opacityValue},attrs:{src:a("1cea")}})],1),n("v-uni-view",{staticClass:"logo"},[n("v-uni-image",{style:{opacity:t.opacityValue},attrs:{src:a("4118")}})],1),n("v-uni-view",{staticClass:"title"},[n("span",[t._v(t._s(t.$t("common.title")))])]),n("v-uni-view",{staticClass:"tupian"},[n("v-uni-image",{attrs:{src:a("242f")}})],1),n("v-uni-view",{staticClass:"text"},[n("span",[t._v(t._s(t.plan)+"%")])])],1)},s=[]},c8f4:function(t,e,a){var n=a("8dc0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("412f50fa",n,!0,{sourceMap:!1,shadowMode:!1})},f75a:function(t,e,a){"use strict";a.r(e);var n=a("bc88"),i=a("8069");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("54ff");var o,r=a("f0c5"),c=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"c2113236",null,!1,n["a"],o);e["default"]=c.exports}}]);
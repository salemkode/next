(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3,4,5],{253:function(t,e,n){},254:function(t,e,n){},256:function(t,e,n){},257:function(t,e,n){"use strict";n(253)},258:function(t,e,n){"use strict";n(254)},261:function(t,e,n){"use strict";n.r(e);var o={props:["show"],components:{Fragment:n(133).a}},r=(n(257),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Fragment",[n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"popup center-position"},[t._t("default")],2)]),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"popup-shadow center-position",on:{click:function(e){return t.$emit("close",e.target.value)}}})])],1)}),[],!1,null,"5371460e",null);e.default=component.exports},262:function(t,e,n){"use strict";n.r(e);var o={props:["show"]},r=(n(258),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",{staticClass:"center-position"},[t._v("My mail is coped")])}),[],!1,null,"6e8692c2",null);e.default=component.exports},263:function(t,e,n){},264:function(t,e,n){"use strict";n(256)},267:function(t,e,n){"use strict";n.r(e);n(61);var o={props:["text","_class"],data:function(){return{email:"hello@salemkode.com",popup:!1,alert:!1}},methods:{showPopup:function(){this.popup=!this.popup,this.copyMail()},copyMail:function(){var t=this;navigator.clipboard.writeText(this.email),this.alert||(this.alert=!0,setTimeout((function(e){return t.alert=!1}),500))}},components:{Fragment:n(133).a}},r=(n(264),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Fragment",[n("a",{class:"btn "+t._class,attrs:{href:"mailto:"+t.email},on:{click:t.showPopup}},[n("strong",[t._v(t._s(t.text))]),t._v(" "),n("img",{staticClass:"icon",attrs:{src:"landing/next.svg"}})]),t._v(" "),n("pop-up",{attrs:{show:t.popup},on:{close:function(e){t.popup=!t.popup}}},[n("img",{staticClass:"p-3 h-1/2 m-auto",attrs:{src:"mail.svg",alt:""}}),t._v(" "),n("h4",{staticClass:"mt-3 p-3 bg-dark-200 rounded-md text-white bold",domProps:{textContent:t._s(t.email)}}),t._v(" "),n("button",{staticClass:"btn btn-mail",on:{click:function(e){return t.copyMail()}}},[t._v("Copy my mail")])]),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("Coped",{directives:[{name:"show",rawName:"v-show",value:t.alert,expression:"alert"}]})],1)],1)}),[],!1,null,"1aa775c9",null);e.default=component.exports;installComponents(component,{PopUp:n(261).default,Coped:n(262).default})},268:function(t,e,n){"use strict";n(263)},274:function(t,e,n){"use strict";n.r(e);n(61);var o={mounted:function(){var t=this;t.makeSquare("talk-telegram"),window.addEventListener("resize",(function(){t.makeSquare("talk-telegram")})),setTimeout((function(){return t.stopAnimation=!0}),1e3)},data:function(){return{stopAnimation:!1}},methods:{down:function(){var t=document.querySelector(".section-landing").offsetHeight-document.querySelector("nav").offsetHeight;window.scrollTo(0,t)},makeSquare:function(t){var e=this.$refs[t];e.style.width="0px",e.style.width=e.offsetHeight+"px"}}},r=(n(268),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section-landing container"},[n("div",{staticClass:"shadow center-position"}),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"info"},[n("h1",[t._v("\n        Hi\n        "),n("img",{staticClass:"hand-icon",class:{stop:t.stopAnimation},attrs:{src:"landing/hand.png"}})]),t._v(" "),t._m(0),t._v(" "),n("h1",[t._v("Full stack web developer from Yemen")]),t._v(" "),n("div",{staticClass:"talk"},[n("email-btn",{attrs:{text:"Ready for new opportunities, let’s talk"}}),t._v(" "),n("a",{ref:"talk-telegram",staticClass:"talk-telegram",attrs:{target:"_blank",href:"https://t.me/salemkode"}},[n("img",{attrs:{src:"media/telegram.svg",alt:"icon of telegram"}})])],1)]),t._v(" "),t._m(1)]),t._v(" "),n("div",{staticClass:"mouse",on:{click:t.down}},[n("svg",{attrs:{width:"30",height:"45",viewBox:"0 0 30 45",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("g",{attrs:{opacity:"0.79"}},[n("path",{attrs:{d:"M5 17C5 11.4772 9.47715 7 15 7C20.5228 7 25 11.4772 25 17V28C25 33.5228 20.5228 38 15 38C9.47715 38 5 33.5228 5 28V17Z",fill:"#212429"}}),t._v(" "),n("rect",{attrs:{x:"14",y:"12",width:"2",height:"8",rx:"1",fill:"white"}})])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("\n        I'm\n        "),n("span",{staticClass:"w-3"}),t._v(" "),n("strong",[t._v("Salem Shamakh")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"photo"},[e("img",{staticClass:"avater",attrs:{src:"landing/avater.png",alt:"avater"}})])}],!1,null,"f6ecb9d6",null);e.default=component.exports;installComponents(component,{EmailBtn:n(267).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2],{255:function(t,e,n){},259:function(t,e,n){"use strict";n(255)},260:function(t,e,n){"use strict";n.r(e);var r={props:["data","img","size"]},c=(n(259),n(17)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-container"},t._l(t.data,(function(e){return n("a",{key:e.title,staticClass:"card",attrs:{href:e.url||e.path}},[t.img?n("img",{class:"large"===t.size?"large":"",attrs:{src:t.img(e),alt:""}}):t._e(),t._v(" "),n("div",{staticClass:"info"},[n("h3",{domProps:{textContent:t._s(e.title)}}),t._v(" "),n("ul",{staticClass:"flags"},t._l(e.flags,(function(e){return n("li",{key:e,staticClass:"flag"},[t._v("\n          "+t._s(e)+"\n        ")])})),0),t._v(" "),n("p",{domProps:{textContent:t._s(e.description)}})])])})),0)}),[],!1,null,"e2d5e52e",null);e.default=component.exports},265:function(t,e,n){},269:function(t,e,n){"use strict";n(265)},275:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{services:[{title:"Websites",description:"I mainly develop full dynamic easy to use websites."},{title:"Blockchain",description:"Building and dealing with smart contracts is the future."},{title:"Bot",description:"I develop telegram bots to do some crazy things sometimes."}]}},methods:{img:function(t){return"service/"+t.title+".svg"}}},c=(n(269),n(17)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section-service"},[n("h1",[t._v("I develop and maintain")]),t._v(" "),n("div",{staticClass:"content"},[n("card-containter",{attrs:{data:t.services,img:t.img}})],1)])}),[],!1,null,"35485670",null);e.default=component.exports;installComponents(component,{CardContainter:n(260).default})}}]);
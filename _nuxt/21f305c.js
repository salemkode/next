(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(t,e,o){"use strict";o.r(e);var n={mounted:function(){var t=this;document.body.offsetWidth<752&&(this.dropdown_menu=!1),window.addEventListener("resize",(function(){document.body.offsetWidth<752?t.dropdown_menu=!1:t.dropdown_menu=!0}))},data:function(){return{dropdown_menu:!0,section:{services:"#section-service",contact:"#section-connect"}}},methods:{showDropdown:function(){this.dropdown_menu=!this.dropdown_menu},scrollTo:function(t){document.querySelector(t).scrollIntoView()}},components:{SlideUpDown:o(184).a}},r=(o(236),o(34)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"container"},[o("nav",[o("h1",[o("a",{attrs:{href:"/"}},[t._v(t._s(t.$t("navbar.title")))]),t._v(" "),o("img",{staticClass:"block md:hidden",attrs:{src:"image/icons/menu.svg"},on:{click:t.showDropdown}})]),t._v(" "),o("SlideUpDown",{attrs:{active:t.dropdown_menu}},[o("ul",{ref:"navList",staticClass:"nav-list"},t._l(t.$i18n.t("navbar",{returnObjects:!0}),(function(e,n){return o("li",{key:e},[o("button",{on:{click:function(e){return t.scrollTo(t.section[n])}}},[t._v(t._s(e))])])})),0)])],1)])}),[],!1,null,"4c201b21",null);e.default=component.exports},145:function(t,e,o){"use strict";var n=o(34),component=Object(n.a)({},undefined,undefined,!1,null,null,null);e.a=component.exports},178:function(t,e,o){var content=o(237);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(64).default)("d5ae0072",content,!0,{sourceMap:!1})},179:function(t,e,o){var content=o(239);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(64).default)("ed188b70",content,!0,{sourceMap:!1})},185:function(t,e,o){"use strict";e.a={navbar:{title:"salemkode",services:"my services",contact:"contact Us"},us:{name:"Hi, I'm <br/> Salem Mohammed Shamakh",work:"full stack web development",info:""},service:{title:"My service",content:{bot:{title:"Bot",article:"I develop telegram bots to do some crazy things sometimes"},frontend:{title:"Website",article:"Web development is the main field for me"},bitcoin:{title:"Block chain",article:"Building and dealing with smart contracts is the future"}}},skill:{title:"My love framwork"},connect:{title:"Interested in my work?",button:"Send me a message"},project:{title:"My project",content:{muzaker:{title:"Muzaker bot",info:"this is simple bot to send azkar"},snapcraft:{title:"Snapcraft",info:"website to download .snap file"},aliflang:{title:"Aliflang website",info:"redesign aliflang website"}}}}},188:function(t,e,o){"use strict";var n=o(19),r=o(183),d=o(141),l=Object(n.a)({components:{navBar:d.default},computed:{dir:function(){return""}}},"components",{Fragment:r.a}),m=(o(238),o(34)),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Fragment",[o("nav-bar"),t._v(" "),o("Nuxt",{attrs:{dir:t.dir}}),t._v(" "),o("footer",[o("h3",[t._v("All rights reserved "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{NavBar:o(141).default})},191:function(t,e,o){o(192),t.exports=o(193)},232:function(t,e,o){var content=o(233);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(64).default)("b39e1096",content,!0,{sourceMap:!1})},233:function(t,e,o){var n=o(63)(!1);n.push([t.i,'*,:after,:before{box-sizing:border-box;border:0 solid #e5e7eb}*{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,0.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent;--tw-shadow:0 0 transparent}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}::moz-focus-inner{border-style:none;padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}body{line-height:inherit}body,button{margin:0;font-family:inherit}button{font-size:100%;line-height:1.15;text-transform:none;background-color:transparent;background-image:none;padding:0;line-height:inherit;color:inherit}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}[role=button],button{cursor:pointer}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}h1,h3,p{margin:0}h1,h3{font-size:inherit;font-weight:inherit}img{border-style:solid;max-width:100%;height:auto}img,svg{display:block;vertical-align:middle}small{font-size:80%}ul{list-style:none;margin:0;padding:0}.container{width:100%;padding-left:1rem;padding-right:1rem;margin-left:auto;margin-right:auto}@media (min-width:640px){.container{max-width:640px;padding-left:2rem;padding-right:2rem}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px;padding-left:4rem;padding-right:4rem}}@media (min-width:1280px){.container{max-width:1280px;padding-left:5rem;padding-right:5rem}}@media (min-width:1536px){.container{max-width:1536px;padding-left:6rem;padding-right:6rem}}.bg-\\[\\#4E598C\\]{--tw-bg-opacity:1;background-color:rgba(78,89,140,var(--tw-bg-opacity))}.rounded-md{border-radius:.375rem}.block{display:block}.flex{display:flex}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-between{justify-content:space-between}.h-screen{height:100vh}.h-25{height:6.25rem}.h-\\[3em\\]{height:3em}.text-2xl{font-size:1.5rem;line-height:2rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.m-1{margin:.25rem}.m-auto{margin:auto}.my-auto{margin-top:auto;margin-bottom:auto}.mx-6{margin-left:1.5rem;margin-right:1.5rem}.mx-auto{margin-left:auto;margin-right:auto}.my-3{margin-top:.75rem;margin-bottom:.75rem}.my-5{margin-top:1.25rem;margin-bottom:1.25rem}.mx-3{margin-left:.75rem;margin-right:.75rem}.mt-3{margin-top:.75rem}.mt-\\[50px\\]{margin-top:50px}.object-contain{-o-object-fit:contain;object-fit:contain}.p-0{padding:0}.p-1{padding:.25rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.pt-2{padding-top:.5rem}.pt-16{padding-top:4rem}.pb-8{padding-bottom:2rem}.static{position:static}.fixed{position:fixed}.relative{position:relative}.left-0{left:0}.right-0{right:0}.resize{resize:both}.hover\\:fill-indigo-700:hover{--tw-fill-opacity:1;fill:rgba(67,56,202,var(--tw-fill-opacity))}.text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.text-black{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.w-4{width:1rem}.w-1\\/2{width:50%}.w-full{width:100%}.w-3\\/10{width:30%}.w-4\\/10{width:40%}.z-50{z-index:50}@media (min-width:640px){.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}}@media (min-width:768px){.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:py-6{padding-top:1.5rem;padding-bottom:1.5rem}.md\\:px-4{padding-left:1rem;padding-right:1rem}.md\\:w-5\\/10{width:50%}.md\\:w-70{width:17.5rem}}@media (min-width:1024px){.lg\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}',""]),t.exports=n},234:function(t,e,o){var content=o(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(64).default)("3f885a12",content,!0,{sourceMap:!1})},235:function(t,e,o){var n=o(63)(!1);n.push([t.i,"html:not(.loaded){overflow:hidden}@-webkit-keyframes loaded{50%{opacity:1;transform:scale(1)}to{transform:scale(1);opacity:0;display:none}}@keyframes loaded{50%{opacity:1;transform:scale(1)}to{transform:scale(1);opacity:0;display:none}}html.loaded .avatar-container:before{-webkit-animation:loaded 1s forwards;animation:loaded 1s forwards}.card{border-radius:.375rem;margin-left:.5rem;margin-right:.5rem;--tw-shadow-color:0,0,0;--tw-shadow:0 20px 25px -5px rgba(var(--tw-shadow-color),0.1),0 10px 10px -5px rgba(var(--tw-shadow-color),0.04);box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);border:2px solid rgba(0,0,0,.36863);transition:all 1s}section>h1{font-size:1.5rem;line-height:2rem;margin-top:2rem;margin-bottom:2rem}@media (min-width:768px){section>h1{font-size:2.25rem;line-height:2.5rem}}.btn{--tw-bg-opacity:1;background-color:rgba(67,56,202,var(--tw-bg-opacity));border-radius:.5rem;display:inline-block;font-size:1rem;line-height:1;padding:.75rem 1.25rem;--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}*{scroll-behavior:smooth}",""]),t.exports=n},236:function(t,e,o){"use strict";o(178)},237:function(t,e,o){var n=o(63)(!1);n.push([t.i,"header[data-v-4c201b21]{padding-top:.5rem;position:fixed;left:0;right:0;z-index:50}nav[data-v-4c201b21]{--tw-bg-opacity:1;background-color:rgba(78,89,140,var(--tw-bg-opacity));border-radius:.375rem;display:flex;flex-direction:column;justify-content:space-between;padding:.25rem .5rem;--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}@media (min-width:768px){nav[data-v-4c201b21]{flex-direction:row;align-items:center}}nav h1[data-v-4c201b21]{display:flex;justify-content:space-between;font-size:1.5rem;line-height:2rem;margin:.25rem;padding:0}nav .nav-list[data-v-4c201b21]{display:flex;flex-direction:column}@media (min-width:768px){nav .nav-list[data-v-4c201b21]{flex-direction:row}}nav .nav-list li[data-v-4c201b21]{margin:.25rem;padding:.25rem}nav .nav-list li[data-v-4c201b21]:last-child{background:var(--sec-color);border-radius:.375rem;padding-left:.75rem;padding-right:.75rem;--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}@-webkit-keyframes drop-data-v-4c201b21{0%{transform:scaleY(0)}to{transform:scaleY(1)}}@keyframes drop-data-v-4c201b21{0%{transform:scaleY(0)}to{transform:scaleY(1)}}",""]),t.exports=n},238:function(t,e,o){"use strict";o(179)},239:function(t,e,o){var n=o(63)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100;200;300;400;500;600&display=swap);"]),n.push([t.i,'#__nuxt,body,html{height:100%}#app[dir=rtl]{font-family:"Noto Sans Arabic",sans-serif}footer{padding:8px;background:var(--main-color);color:#fff;text-align:center}footer h3{margin:0}',""]),t.exports=n}},[[191,9,1,10]]]);
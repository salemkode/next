(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{277:function(t,e,r){var content=r(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(64).default)("c1a68fb0",content,!0,{sourceMap:!1})},285:function(t,e,r){"use strict";r(277)},286:function(t,e,r){var n=r(63)(!1);n.push([t.i,".project-card[data-v-7f848a80]{max-width:600px;margin:auto}.project-card .card-img[data-v-7f848a80]{height:6.25rem;margin-top:auto;margin-bottom:auto;-o-object-fit:contain;object-fit:contain;padding-top:.5rem;padding-bottom:.5rem;width:30%}.project-card .card-about[data-v-7f848a80]{width:70%;height:-webkit-max-content;height:-moz-max-content;height:max-content;margin:auto}.project-card .card-about>*[data-v-7f848a80]{margin:15px 0}",""]),t.exports=n},288:function(t,e,r){"use strict";r.r(e);r(23),r(72);var n={mounted:function(){var title=this.$t("projects."+this.name+".title"),t=this.$t("projects."+this.name+".info");this.write(title,this.$refs.title),this.write(t,this.$refs.info)},props:["project","name","index"],data:function(){return{}},methods:{write:function(text,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;t.innerText="";var i=0,r=setInterval((function(){t.innerText=text.substr(0,i),text.length==i&&clearInterval(r),i++}),e)}}},o=n,c=(r(285),r(34)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"card project-card flex",attrs:{href:t.project.url}},[r("img",{staticClass:"card-img",attrs:{src:"image/project/"+t.name+".png",alt:" "}}),t._v(" "),r("div",{staticClass:"card-about"},[r("h3",{ref:"title"}),t._v(" "),r("p",{ref:"info"})])])}),[],!1,null,"7f848a80",null);e.default=component.exports}}]);
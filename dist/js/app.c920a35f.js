(function(e){function t(t){for(var a,c,i=t[0],o=t[1],d=t[2],f=0,b=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&b.push(n[c][0]),n[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);l&&l(t);while(b.length)b.shift()();return r.push.apply(r,d||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,i=1;i<s.length;i++){var o=s[i];0!==n[o]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=s[0]))}return e}var a={},n={app:0},r=[];function c(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=e,c.c=a,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(s,a,function(t){return e[t]}.bind(null,a));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/FEE-52-CSE-Topics-Archive/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var l=o;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var a=s("85ec"),n=s.n(a);n.a},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return s(t)}function r(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("b-navbar",{attrs:{"fixed-top":""}},[s("template",{slot:"brand"},[s("b-navbar-item",{attrs:{href:"/"}},[s("span",{staticClass:"title"},[e._v("FEE 52 Topics Archive")])])],1),s("template",{slot:"start"},[0!=e.topics.length?s("b-navbar-dropdown",{attrs:{label:"Selected Topic: "+e.selectedTopicName,hoverable:"",active:""}},e._l(e.topics,(function(t,a){return s("b-navbar-item",{key:t.name,attrs:{href:"#",active:""},on:{click:function(t){e.selectedIndex=a}}},[e._v(" "+e._s(t.name)+" ")])})),1):s("b-navbar-item",{attrs:{href:"#"}},[e._v(" Loading Topics... ")])],1),s("template",{slot:"end"},[s("b-navbar-item",{attrs:{href:"https://github.com/TarekkMA/FEE-52-CSE-Topics-Archive/tree/gh-pages",target:"_blank",active:""}},[s("b-icon",{attrs:{icon:"github-circle"}}),s("span",[e._v("Web Page")])],1),s("b-navbar-item",{attrs:{href:"https://github.com/TarekkMA/FEE-52-CSE-Topics-Archive",target:"_blank",active:""}},[s("b-icon",{attrs:{icon:"github-circle"}}),s("span",[e._v("Topics Scrapper")])],1)],1)],2),s("div",{staticClass:"container",attrs:{id:"mainBody"}},[e.selectedTopic?s("div",e._l(e.selectedTopic,(function(e){return s("Post",{key:e.date,attrs:{post:e}})})),1):e._e()])],1)},r=[],c=(s("d81d"),s("b0c0"),s("ac1f"),s("5319"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"box"},[s("article",{staticClass:"media"},[s("div",{staticClass:"media-left"},[s("figure",{staticClass:"image is-64x64"},[s("img",{attrs:{src:e.profilePicture,alt:"Image"}})])]),s("div",{staticClass:"media-content"},[s("div",{staticClass:"content"},[s("span",[s("a",{attrs:{href:e.post.authorLink,target:"_blank"}},[s("strong",[e._v(e._s(e.post.authorName))])]),s("small",[e._v(" "+e._s(e.postTime))]),s("br"),s("small",[e._v(" @"+e._s(e.username))]),s("br"),s("p",{directives:[{name:"linkified",rawName:"v-linkified"}],attrs:{dir:"rtl"},domProps:{innerHTML:e._s(e.postMessage)}}),s("p")])]),s("nav",{staticClass:"level is-mobile"},[s("div",{staticClass:"level-left"},[s("a",{staticClass:"level-item",attrs:{"aria-label":"retweet",href:e.post.link,target:"_blank"}},[s("b-icon",{attrs:{icon:"link"}}),e._v(" Original Post ")],1)])])])])])}),i=[],o=s("c1df"),d={props:["post"],data:function(){return{profilePicture:"https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif"}},computed:{postMessage:function(){return this.post.message.replace("\n","<br/>")},username:function(){return this.post.authorLink.replace("https://www.facebook.com/","")},postTime:function(){var e=o.unix(parseInt(this.post.date));return e.fromNow()+" - "+e.format("dddd, MMMM Do YYYY, h:mm:ss a")}},mounted:function(){}},l=d,f=s("2877"),b=Object(f["a"])(l,c,i,!1,null,null,null),u=b.exports,j=s("bc3a").default,p={name:"App",components:{Post:u},data:function(){return{topics:[],selectedIndex:-1,selectedTopic:null,topicsMap:{}}},computed:{selectedTopicName:function(){return-1==this.selectedIndex?"None":this.topics[this.selectedIndex].name}},watch:{selectedIndex:function(e){this.getTopic(this.topics[e].url,e),this.selectedTopic=this.topicsMap[e]}},mounted:function(){var e=this;j.get("https://api.github.com/repos/TarekkMA/FEE-52-CSE-Topics-Archive/contents/topics?ref=gh-pages").then((function(t){e.topics=t.data.map((function(e){return{name:e.name.replace(".json",""),url:e.download_url}}))}))},methods:{getTopic:function(e,t){var s=this;j.get(e).then((function(e){return e.data})).then((function(e){s.topicsMap[t]=e,s.selectedTopic=s.topicsMap[t]}))}}},m=p,h=(s("034f"),Object(f["a"])(m,n,r,!1,null,null,null)),v=h.exports,g=s("289d"),k=(s("5abe"),s("9aa5")),y=s.n(k);a["a"].directive("linkified",y.a),a["a"].use(g["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(v)}}).$mount("#app")},"85ec":function(e,t,s){}});
//# sourceMappingURL=app.c920a35f.js.map
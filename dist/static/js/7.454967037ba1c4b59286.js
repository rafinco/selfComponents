webpackJsonp([7],{113:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content-wrap"},[n("table",{staticStyle:{top:"50px"}},[t._m(0),t._v(" "),n("tbody",t._l(t.magborLists,function(e,s){return n("tr",[n("td",[t._v("\n\t\t\t\t\t"+t._s(++s)+"\n\t\t\t\t")]),t._v(" "),n("td",[t._v("\n\t\t\t\t\t"+t._s(e.username)+"\n\t\t\t\t")]),t._v(" "),n("td",[t._v("\n\t\t\t\t\t"+t._s(t._f("time")(e.time))+"\n\t\t\t\t")]),t._v(" "),n("td",[t._v("\n\t\t\t\t\t"+t._s(e.content)+"\n\t\t\t\t")]),t._v(" "),n("td",{directives:[{name:"show",rawName:"v-show",value:t.isAdmin,expression:"isAdmin"}]},[n("a",{staticStyle:{color:"#FF3030","text-decoration":"underline"},on:{click:function(n){t.deleted(e.id)}}},[t._v("删除")])])])}))])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("编号")]),t._v(" "),n("th",[t._v("姓名")]),t._v(" "),n("th",[t._v("时间")]),t._v(" "),n("th",[t._v("内容")]),t._v(" "),n("th",[t._v("操作")])])])}]}},48:function(t,e,n){n(99);var s=n(0)(n(78),n(113),"data-v-6657669f",null);t.exports=s.exports},78:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{magborLists:"",isAdmin:!1}},filters:{time:function(t){return new Date(1e3*parseInt(t)).toLocaleString().replace(/年|月/g,"-").replace(/日/g," ")}},created:function(){this.magborList(),""!=sessionStorage.userid&&(console.log(sessionStorage.userid),this.isAdmin=!0)},methods:{deleted:function(t){var e=this;1==confirm("确认删除")&&$.ajax({url:"http://hjingren.cn/thinkphp/index.php/home/Msgboard/delete?id="+t,type:"get",dataType:"json",success:function(t){console.log(t),t.success?(alert(t.data),e.magborList()):alert("删除失败")}})},magborList:function(){var t=this;$.ajax({url:"http://hjingren.cn/thinkphp/index.php/home/Msgboard/showlist",type:"get",dataType:"json",success:function(e){console.log(e),e.success?t.magborLists=e.data:alert("查询失败")}})}}}},87:function(t,e,n){e=t.exports=n(36)(),e.push([t.i,"section.content-wrap[data-v-6657669f]{position:relative}","",{version:3,sources:["E:/phpStudy/WWW/selfComponents/src/components/magborlist.vue"],names:[],mappings:"AACA,sCACC,iBAAmB,CACnB",file:"magborlist.vue",sourcesContent:["\nsection.content-wrap[data-v-6657669f]{\r\n\tposition: relative;\n}\r\n"],sourceRoot:""}])},99:function(t,e,n){var s=n(87);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(37)("0704aedb",s,!0)}});
//# sourceMappingURL=7.454967037ba1c4b59286.js.map
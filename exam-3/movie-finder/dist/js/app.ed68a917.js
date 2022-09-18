(function(){var t={5507:function(){},3950:function(t,e,a){"use strict";var s=a(144),n=a(998),r=a(8032),o=a(4886),i=a(2118),l=a(3059),c=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e(n.Z,[e(r.Z,{staticClass:"pl-4",attrs:{app:"",dark:"",padless:""}},[e("img",{attrs:{width:"200",alt:"logo",src:a(3906)}})]),e(l.Z,[e(i.Z,{attrs:{fluid:""}},[e(o.ZB,{staticStyle:{"text-align":"start"}},[e("h2",{staticClass:"display-3 font-weight-bold"},[t._v("Welcome.")]),e("h3",{staticClass:"display-2"},[t._v("Millions of movies, TV shows to discover. Explore now.")])]),e("SearchComponent",{on:{submit:t.handleSearch}}),t.state.results?e("SearchResultsComponent",{attrs:{results:t.state.results}}):t._e(),t.state.total_pages>1?e("PaginationComponent",{attrs:{currentPage:t.state.page,totalPages:t.state.total_pages},on:{"set-page":t.handlePagination}}):t._e()],1)],1),e("FooterComponent")],1)],1)},u=[],d=a(6190),m=a(266),f=a(1713),g=a(8505),p=a(9780),h=function(){var t=this,e=t._self._c;return e(i.Z,{attrs:{fluid:""}},[e(f.Z,{attrs:{align:"center"}},[e(m.Z,{staticClass:"d-flex",attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[e(p.Z,{staticClass:"input",attrs:{label:"Search movie",placeholder:"Enter the title of the movie",outlined:"",rounded:"",solo:""},model:{value:t.form.query,callback:function(e){t.$set(t.form,"query",e)},expression:"form.query"}}),e(d.Z,{staticClass:"white--text ml-5",attrs:{accent:"",elevation:"7","x-large":"",rounded:"",color:"cyan"},on:{click:t.submit}},[t._v("Search")])],1),e(m.Z,{staticClass:"d-flex",attrs:{cols:"12",sm:"12",md:"6",lg:"3"}},[e(g.Z,{attrs:{items:t.year,label:"Year",solo:""},model:{value:t.form.year,callback:function(e){t.$set(t.form,"year",e)},expression:"form.year"}})],1),e(m.Z,{staticClass:"d-flex",attrs:{cols:"12",sm:"12",md:"6",lg:"3"}},[e(g.Z,{attrs:{items:t.genre,label:"Genre",solo:""},model:{value:t.form.genre,callback:function(e){t.$set(t.form,"genre",e)},expression:"form.genre"}})],1),e(m.Z,{staticClass:"d-flex",attrs:{cols:"12",sm:"12",md:"6",lg:"3"}},[e(g.Z,{attrs:{items:t.rating,label:"Rating",solo:""},model:{value:t.form.rating,callback:function(e){t.$set(t.form,"rating",e)},expression:"form.rating"}})],1)],1)],1)},v=[],y={name:"SearchComponent",emits:{submit:null},data:()=>({year:["2022","2021","2020","2019","2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2003","2002","2001","2000"],genre:["Comedy","Drama","Action","Thriller","Western","Adventure","Animated","Fantasy"],rating:["asc","desc"],form:{query:"",year:"",genre:"",rating:""}}),methods:{submit(){console.log("submit"),this.$emit("submit",{query:this.form.query,year:this.form.year,genre:this.form.genre,rating:this.form.rating})}}},Z=y,b=a(1001),_=(0,b.Z)(Z,h,v,!1,null,null,null),C=_.exports,x=a(9669),w=a.n(x);w().defaults.baseURL="https://api.themoviedb.org/3/";const P="200157ac4bdebe822c80a2515fc31204";var k={getResults(t){return w().get("search/movie",{params:{api_key:P,query:t.query?t.query:void 0,year:t.year?t.year:void 0,genre:t.genre?t.genre:void 0,rating:t.rating?t.rating:void 0,page:t.page}})},getDetails(t){return w().get(`movie/${t}`,{params:{api_key:P}})}},q=a(9930),S=a(5808),D=a(4525),O=a(7941),j=function(){var t=this,e=t._self._c;return e("div",[t.results?.length>1?e(S.Z,{attrs:{rounded:""}},[e(O.Z,{staticClass:"headline font-weight-bold",attrs:{color:"cyan"},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.results,(function(a){return e(D.Z,{key:a.id,on:{click:function(e){return t.showDetails(a.id)}}},[t._v(" "+t._s(a.title)+" ")])})),1)],1):e("p",{staticClass:"error"},[t._v("Not found!")]),e("div",{staticClass:"text-center"},[e(q.Z,{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("DetailsComponent",{attrs:{details:t.details},on:{close:function(e){t.dialog=!1}}})],1)],1)],1)},T=[],$=a(9582),B=a(9223),R=a(3687),M=function(){var t=this,e=t._self._c;return e($.Z,[e(o.EB,{staticClass:"text-h5 grey lighten-2"},[t._v(" "+t._s(t.details.title)+" ")]),e("img",{staticStyle:{width:"80%"},attrs:{src:"https://image.tmdb.org/t/p/original"+t.details.poster_path,alt:"poster"}}),e(o.ZB,[t._v(" "+t._s(t.details.overview)+" ")]),e(B.Z),e(o.h7,[e(R.Z),e(d.Z,{attrs:{color:"cyan",text:""},on:{click:t.close}},[t._v(" Close ")])],1)],1)},F=[],A={name:"DetailsComponent",props:["details"],emits:["close"],methods:{close(){this.$emit("close",!0)}}},E=A,W=(0,b.Z)(E,M,F,!1,null,"9ce4b146",null),Y=W.exports,G={name:"SearchResultsComponent",props:["results"],components:{DetailsComponent:Y},data:()=>({dialog:!1,details:{}}),methods:{showDetails(t){console.log(t),this.loadData(t)},loadData(t){k.getDetails(t).then((t=>{console.log(t),this.details=t.data,this.dialog=!0}))}}},L=G,N=(0,b.Z)(L,j,T,!1,null,"81170534",null),U=N.exports,V=a(5372),z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e(i.Z,[e(f.Z,{attrs:{justify:"center"}},[e(m.Z,{attrs:{cols:"8"}},[e(i.Z,{staticClass:"max-width"},[e(V.Z,{staticClass:"my-4",attrs:{value:t.currentPage,length:t.totalPages,circle:"","prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right",color:"cyan"},on:{input:t.handlePageChange}})],1)],1)],1)],1)],1)},H=[],I={name:"PaginationComponent",emit:["set-page"],props:["currentPage","totalPages"],methods:{handlePageChange(t){this.$emit("set-page",t)}}},J=I,K=(0,b.Z)(J,z,H,!1,null,"ae6375e8",null),Q=K.exports,X=a(8271),tt=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(X.Z,{attrs:{dark:"",padless:""}},[e(i.Z,{attrs:{fluid:"","pa-0":""}},[e($.Z,{staticClass:"lighten-1 white--text text-center",attrs:{flat:"",tile:""}},[e(o.ZB,{staticClass:"white--text"},[t._v(' Best movies - watch online for free in good quality on "The Movie Database" ')]),e(B.Z),e(o.ZB,{staticClass:"white--text"},[t._v(" "+t._s((new Date).getFullYear())+" — "),e("strong",[t._v("TMBD")])])],1)],1)],1)},et=[],at=a(5507),st=a.n(at),nt=st(),rt=(0,b.Z)(nt,tt,et,!1,null,"00c6dc5f",null),ot=rt.exports,it={name:"App",components:{SearchComponent:C,SearchResultsComponent:U,PaginationComponent:Q,FooterComponent:ot},data:()=>({requestParams:{query:"",year:"",genre:"",rating:"",page:1},state:{}}),methods:{loadData(){k.getResults(this.requestParams).then((t=>{console.log(t),this.state=t.data})).catch((t=>{alert(t.response.data.errors[0])}))},handleSearch(t){console.log(t),this.requestParams={...this.requestParams,...t},this.loadData()},handlePagination(t){console.log(t),this.requestParams={...this.requestParams,page:t},this.loadData()}}},lt=it,ct=(0,b.Z)(lt,c,u,!1,null,null,null),ut=ct.exports,dt=a(1705);s.ZP.use(dt.Z);var mt=new dt.Z({});s.ZP.config.productionTip=!1,new s.ZP({vuetify:mt,render:t=>t(ut)}).$mount("#app")},3906:function(t,e,a){"use strict";t.exports=a.p+"img/logotmdb.4794afa3.svg"}},e={};function a(s){var n=e[s];if(void 0!==n)return n.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,s,n,r){if(!s){var o=1/0;for(u=0;u<t.length;u++){s=t[u][0],n=t[u][1],r=t[u][2];for(var i=!0,l=0;l<s.length;l++)(!1&r||o>=r)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(i=!1,r<o&&(o=r));if(i){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[s,n,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,r,o=s[0],i=s[1],l=s[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(l)var u=l(a)}for(e&&e(s);c<o.length;c++)r=o[c],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(u)},s=self["webpackChunkmovie_finder"]=self["webpackChunkmovie_finder"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(3950)}));s=a.O(s)})();
//# sourceMappingURL=app.ed68a917.js.map
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,n){e.exports=n(56)},28:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(21),u=n.n(c),o=(n(28),n(9)),l=n(5),s=n(4),i=n(3),m=n.n(i),f=n(7),p=n(8),d=n.n(p),v=n(10),h=n.n(v);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){var t=e.getStore,n=e.getActions,r=e.setStore;return{store:{counters:[],filter:{less:!1,lessQuery:"",greater:!1,greaterQuery:""},item:{name:"",type:""},sort:{column:"",order:"desc",active:!0},query:""},actions:{getCounters:function(){var e=Object(f.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("".concat("/api/v1/counter","s"));case 2:t=e.sent,n=t.data,r({counters:n});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),handleNewCounter:function(){var e=Object(f.a)(m.a.mark((function e(a){var c,u,o,l,i,f,p,v;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===a.trim()){e.next=17;break}return c=t(),u=n(),e.next=5,u.getCounters();case 5:return o={title:a},e.next=8,d.a.post("/api/v1/counter",o);case 8:l=e.sent,i=l.data,f=[].concat(Object(s.a)(c.counters),[i]),p={lessQuery:"",greaterQuery:""},"",(v={}).name=i.name,v.type="add",r({counters:f,filter:p,query:"",item:v});case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),handleAddition:function(){var e=Object(f.a)(m.a.mark((function e(n){var a,c,u,o,l,i,f;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t(),(c=a.sort).active=!1,e.next=5,r({sort:c});case 5:return u=Object(s.a)(a.counters),o=u.indexOf(n),l={id:n.id},e.next=10,d.a.post("".concat("/api/v1/counter","/inc"),l);case 10:i=e.sent,f=i.data,u[o]=E({},f),r({counters:u});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),handleSubstraction:function(){var e=Object(f.a)(m.a.mark((function e(n){var a,c,u,o,l,i,f;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t(),(c=a.sort).active=!1,e.next=5,r({sort:c});case 5:return u=Object(s.a)(a.counters),o=u.indexOf(n),l={id:n.id},e.next=10,d.a.post("".concat("/api/v1/counter","/dec"),l);case 10:i=e.sent,f=i.data,u[o]=E({},f),r({counters:u});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),handleDelete:function(){var e=Object(f.a)(m.a.mark((function e(a){var c,u,o,l,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t(),u=n(),(o=(o=Object(s.a)(c.counters)).filter((function(e){return e!==a}))).length?r({counters:o}):u.cleanSearch(),l={id:a.id},e.next=8,d.a.delete("/api/v1/counter",{data:l});case 8:(i={}).name=a.name,i.type="delete",r({item:i});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),handleSort:function(e){var n=t(),a=E({},n.sort),c=Object(s.a)(n.counters);a.column===e?(a.order="asc"===a.order?"desc":"asc",a.active=!0):(a.column=e,a.order="asc",a.active=!0),c=a.active?h.a.orderBy(c,[a.column],[a.order]):c,r({sort:a,counters:c})},handleSearch:function(e){var a=t(),c=n(),u=Object(s.a)(a.counters);if(""!==e.trim()){var o=a.counters.filter((function(t){return t.title.toLowerCase().includes(e.toLowerCase())}));r({query:e,counters:o,allCounters:u})}else c.getCounters(),r({query:""})},handleFilter:function(e,a,c){var u=t(),o=n(),l=Object(s.a)(u.counters),i=E({},u.filter),m=parseInt(c);if(""!==(m=Number.isNaN(m)?"":m)){i[e]=!0,i[a]=m;var f=Object(s.a)(u.counters);f="less"===e?f.filter((function(e){return e.count<i.lessQuery})):f.filter((function(e){return e.count>i.greaterQuery})),r({filter:i,counters:f,allCounters:l})}else i[e]=!1,i.lessQuery="",i.greaterQuery="",o.getCounters(),r({filter:i})},cleanFilter:function(e,n){var a=E({},t().filter);a[e]=!1,a[n]="",r({filter:a})},cleanSearch:function(){var e=t(),a=n(),c=E({},e.filter);c.less=!1,c.lessQuery="",c.greater=!1,c.greaterQuery="",a.getCounters(),r({query:"",filter:c})}}}};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=a.a.createContext(null),w=j.Consumer,N=j.Provider,C=function(e){return function(t){var n=Object(r.useState)(y({getStore:function(){return u.store},getActions:function(){return u.actions},setStore:function(e){return o({store:Object.assign(u.store,e),actions:g({},u.actions)})}})),c=Object(l.a)(n,2),u=c[0],o=c[1];return a.a.createElement(N,{value:u},a.a.createElement(e,t))}},S=(n(49),function(e){var t=e.item,n=e.actions,r=t.title,c=t.count;return a.a.createElement("tr",null,a.a.createElement("td",null,r),a.a.createElement("td",null,a.a.createElement("button",{className:"counter-btn",onClick:function(){return n.handleSubstraction(t)}},"-")),a.a.createElement("td",{className:"text-center"},c),a.a.createElement("td",null,a.a.createElement("button",{className:"counter-btn",onClick:function(){return n.handleAddition(t)}},"+")),a.a.createElement("td",null,a.a.createElement("button",{className:"delete-btn",onClick:function(){return n.handleDelete(t)}},"Delete")))}),k=n(6),x=(n(50),function(e){var t=e.items,n=e.actions,r=e.sort;return a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",{className:"clickable",onClick:function(){return n.handleSort("title")}},"Title","title"===r.column&&r.active?"asc"===r.order?a.a.createElement(k.a,null):a.a.createElement(k.b,null):a.a.createElement(k.c,null)),a.a.createElement("th",null),a.a.createElement("th",{className:"clickable text-center",onClick:function(){return n.handleSort("count")}},"#","count"===r.column&&r.active?"asc"===r.order?a.a.createElement(k.a,null):a.a.createElement(k.b,null):a.a.createElement(k.c,null)),a.a.createElement("th",null),a.a.createElement("th",null))),a.a.createElement("tbody",null,t.map((function(e){return a.a.createElement(S,{item:e,key:e.name,actions:n})}))))}),P=(n(51),function(e){var t=e.total;return a.a.createElement("div",null,"TOTAL: ",a.a.createElement("div",{className:"total"},t))}),Q=(n(52),function(e){var t=e.onNewCounter,n=Object(r.useState)(""),c=Object(l.a)(n,2),u=c[0],o=c[1],s=Object(r.useState)("hidden"),i=Object(l.a)(s,2),m=i[0],f=i[1];return a.a.createElement("form",{autocomplete:"off",className:"counter-generator",onSubmit:function(e){e.preventDefault(),o(""),t(u)}},a.a.createElement("button",{className:"counter-generator__btn",onClick:function(){return f(""===m?"hidden":"")}},"Create counter"),a.a.createElement("input",{name:"title",value:u,placeholder:"Name your counter",type:"text",className:m,onChange:function(e){return function(e){var t=e.target.value;o(t)}(e)}}))}),D=(n(53),n(11)),q=function(e){var t=e.onSearch,n=e.value;return a.a.createElement("div",{className:"searchbox"},a.a.createElement("input",{name:"query",placeholder:"Search...",type:"text",value:n,onChange:function(e){return t(e.target.value)}}),a.a.createElement("span",{className:"searchbox__icon"},a.a.createElement(D.a,null)))},F=(n(54),n(22)),_=function(e){var t=e.actions,n=e.value,c=Object(r.useState)("hide"),u=Object(l.a)(c,2),o=u[0],s=u[1];return a.a.createElement("div",{className:"filters"},a.a.createElement("div",{className:"filters__header",onClick:function(){s("hide"===o?"show":"hide")}},a.a.createElement("h6",null,"Filter your results"),a.a.createElement("div",{className:"icon"},a.a.createElement(F.a,null))),a.a.createElement("div",{className:o},a.a.createElement("span",{className:"row"},a.a.createElement("label",{htmlFor:"less"},"Less than: "),a.a.createElement("input",{className:"sm-input",type:"number",name:"less",value:n.lessQuery,onChange:function(e){return t.handleFilter("less","lessQuery",e.target.value)}})),a.a.createElement("span",{className:"row"},a.a.createElement("label",{htmlFor:"greater"},"Greater than: "),a.a.createElement("input",{className:"sm-input",type:"number",name:"greater",value:n.greaterQuery,onChange:function(e){return t.handleFilter("greater","greaterQuery",e.target.value)}}))))},A=(n(55),function(){return a.a.createElement("h1",{className:"error"},"Create your first counter!")}),B=function(e){var t=e.onGoBack;return a.a.createElement("div",{className:"error"},a.a.createElement("p",null,"Sorry, there are no counters that match the specified conditions :("),a.a.createElement("span",{className:"link",onClick:t},"Go back"))},G=C((function(){var e=null;return Object(r.useEffect)((function(){null!==e&&e.getCounters()}),[]),a.a.createElement(w,null,(function(t){var n=t.store,r=t.actions,c=n.counters,u=n.sort,o=n.query,l=n.filter;e=r;var s="";return c.length&&(s=c.map((function(e){return e.count})).reduce((function(e,t){return e+t}))),a.a.createElement(a.a.Fragment,null,a.a.createElement("header",null,a.a.createElement(q,{onSearch:r.handleSearch,value:n.query}),a.a.createElement(P,{total:s||0})),a.a.createElement(_,{actions:r,value:n.filter}),a.a.createElement("main",null,c.length?a.a.createElement(x,{items:c,actions:r,sort:u}):o||l.less||l.greater?a.a.createElement(B,{onGoBack:function(){return r.cleanSearch()}}):a.a.createElement(A,null),a.a.createElement(Q,{onNewCounter:r.handleNewCounter})))}))}));u.a.render(a.a.createElement(G,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.b60f60c8.chunk.js.map
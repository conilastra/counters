(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,n){e.exports=n(55)},28:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(21),l=n.n(c),u=(n(28),n(9)),o=n(5),s=n(4),i=n(3),m=n.n(i),f=n(7),d=n(8),p=n.n(d),h=n(10),v=n.n(h);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){var t=e.getStore,n=(e.getActions,e.setStore);return{store:{counters:[],allCounters:[],sort:{column:"",order:"desc",active:!0},query:"",filter:{less:!1,lessQuery:"",greater:!1,greaterQuery:""}},actions:{getCounters:function(){var e=Object(f.a)(m.a.mark((function e(){var t,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat("/api/v1/counter","s"));case 2:t=e.sent,r=t.data,n({counters:r});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),handleNewCounter:function(){var e=Object(f.a)(m.a.mark((function e(r){var a,c,l,u,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===r.trim()){e.next=11;break}return a=t(),c={title:r},e.next=5,p.a.post("/api/v1/counter",c);case 5:l=e.sent,u=l.data,o=a.allCounters.length?[].concat(Object(s.a)(a.allCounters),[u]):[].concat(Object(s.a)(a.counters),[u]),"",n({counters:o,filter:{lessQuery:"",greaterQuery:""},query:""});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),handleAddition:function(){var e=Object(f.a)(m.a.mark((function e(r){var a,c,l,u,o,i,f;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t(),(c=a.sort).active=!1,e.next=5,n({sort:c});case 5:return l=Object(s.a)(a.counters),u=l.indexOf(r),o={id:r.id},e.next=10,p.a.post("".concat("/api/v1/counter","/inc"),o);case 10:i=e.sent,f=i.data,l[u]=E({},f),n({counters:l});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),handleSubstraction:function(){var e=Object(f.a)(m.a.mark((function e(r){var a,c,l,u,o,i,f;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t(),(c=a.sort).active=!1,e.next=5,n({sort:c});case 5:return l=Object(s.a)(a.counters),u=l.indexOf(r),o={id:r.id},e.next=10,p.a.post("".concat("/api/v1/counter","/dec"),o);case 10:i=e.sent,f=i.data,l[u]=E({},f),n({counters:l});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),handleDelete:function(){var e=Object(f.a)(m.a.mark((function e(r){var a,c,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t(),c=(c=a.allCounters.length?Object(s.a)(a.allCounters):Object(s.a)(a.counters)).filter((function(e){return e!==r})),n({counters:c,allCounters:c}),l={id:r.id},e.next=7,p.a.delete("/api/v1/counter",{data:l});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),handleSort:function(e){var r=t(),a=E({},r.sort),c=Object(s.a)(r.counters);a.column===e?(a.order="asc"===a.order?"desc":"asc",a.active=!0):(a.column=e,a.order="asc",a.active=!0),c=a.active?v.a.orderBy(c,[a.column],[a.order]):c,n({sort:a,counters:c})},handleSearch:function(e){var r=t(),a=Object(s.a)(r.counters);if(""!==e.trim()){var c=r.counters.filter((function(t){return t.title.toLowerCase().includes(e.toLowerCase())}));n({query:e,counters:c,allCounters:a})}else n({query:"",counters:r.allCounters})},handleFilter:function(e,r,a){var c=t(),l=Object(s.a)(c.counters),u=E({},c.filter),o=parseInt(a);if(""!==(o=Number.isNaN(o)?"":o)){u[e]=!0,u[r]=o;var i=Object(s.a)(c.counters);i="less"===e?i.filter((function(e){return e.count<u.lessQuery})):i.filter((function(e){return e.count>u.greaterQuery})),n({filter:u,counters:i,allCounters:l})}else u[e]=!1,u[r]="",n({filter:u,counters:c.allCounters})},cleanFilter:function(e,r){var a=E({},t().filter);a[e]=!1,a[r]="",n({filter:a})},cleanSearch:function(){var e=t(),r=E({},e.filter);r.less?(r.less=!1,r.lessQuery=""):r.greater&&(r.greater=!1,r.greaterQuery=""),n({query:"",filter:r,counters:e.allCounters})}}}};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=a.a.createContext(null),C=j.Consumer,w=j.Provider,N=function(e){return function(t){var n=Object(r.useState)(O({getStore:function(){return l.store},getActions:function(){return l.actions},setStore:function(e){return u({store:Object.assign(l.store,e),actions:g({},l.actions)})}})),c=Object(o.a)(n,2),l=c[0],u=c[1];return a.a.createElement(w,{value:l},a.a.createElement(e,t))}},k=(n(49),function(e){var t=e.item,n=e.actions,r=t.title,c=t.count;return a.a.createElement("tr",null,a.a.createElement("td",null,r),a.a.createElement("td",null,a.a.createElement("button",{className:"counter-btn",onClick:function(e){return n.handleSubstraction(t)}},"-")),a.a.createElement("td",{className:"text-center"},c),a.a.createElement("td",null,a.a.createElement("button",{className:"counter-btn",onClick:function(e){return n.handleAddition(t)}},"+")),a.a.createElement("td",null,a.a.createElement("button",{className:"delete-btn",onClick:function(e){return n.handleDelete(t)}},"Delete")))}),S=n(6),x=(n(50),function(e){var t=e.items,n=e.actions,r=e.sort;return a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",{className:"clickable",onClick:function(){return n.handleSort("title")}},"Title","title"===r.column&&r.active?"asc"===r.order?a.a.createElement(S.a,null):a.a.createElement(S.b,null):a.a.createElement(S.c,null)),a.a.createElement("th",null),a.a.createElement("th",{className:"clickable text-center",onClick:function(){return n.handleSort("count")}},"#","count"===r.column&&r.active?"asc"===r.order?a.a.createElement(S.a,null):a.a.createElement(S.b,null):a.a.createElement(S.c,null)),a.a.createElement("th",null),a.a.createElement("th",null))),a.a.createElement("tbody",null,t.map((function(e){return a.a.createElement(k,{item:e,key:e.name,actions:n})}))))}),P=(n(51),function(e){var t=e.total;return a.a.createElement("div",null,"TOTAL: ",a.a.createElement("div",{className:"total"},t))}),D=(n(52),function(e){var t=e.onNewCounter,n=Object(r.useState)(""),c=Object(o.a)(n,2),l=c[0],u=c[1],s=Object(r.useState)("hidden"),i=Object(o.a)(s,2),m=i[0],f=i[1];return a.a.createElement("form",{autocomplete:"off",className:"counter-generator",onSubmit:function(e){e.preventDefault(),u(""),t(l)}},a.a.createElement("button",{className:"counter-generator__btn",onClick:function(){return f(""===m?"hidden":"")}},"Create counter"),a.a.createElement("input",{name:"title",value:l,placeholder:"Give it a name and press enter",type:"text",className:m,onChange:function(e){return function(e){var t=e.target.value;u(t)}(e)}}))}),Q=(n(53),n(11)),F=function(e){var t=e.onSearch,n=e.value;return a.a.createElement("div",{className:"searchbox"},a.a.createElement("input",{name:"query",placeholder:"Search...",type:"text",value:n,onChange:function(e){return t(e.target.value)}}),a.a.createElement("span",{className:"searchbox__icon"},a.a.createElement(Q.a,null)))},q=(n(54),n(22)),_=function(e){var t=e.actions,n=e.value,c=Object(r.useState)("hide"),l=Object(o.a)(c,2),u=l[0],s=l[1];return a.a.createElement("div",{className:"filters"},a.a.createElement("div",{className:"filters__header",onClick:function(){s("hide"===u?"show":"hide")}},a.a.createElement("h6",null,"Filter your results"),a.a.createElement("div",{className:"icon"},a.a.createElement(q.a,null))),a.a.createElement("div",{className:u},a.a.createElement("span",{className:"row"},a.a.createElement("label",{htmlFor:"less"},"Less than: "),a.a.createElement("input",{className:"sm-input",type:"number",name:"less",value:n.lessQuery,onChange:function(e){return t.handleFilter("less","lessQuery",e.target.value)}})),a.a.createElement("span",{className:"row"},a.a.createElement("label",{htmlFor:"greater"},"Greater than: "),a.a.createElement("input",{className:"sm-input",type:"number",name:"greater",value:n.greaterQuery,onChange:function(e){return t.handleFilter("greater","greaterQuery",e.target.value)}}))))},A=function(){return a.a.createElement("h1",{className:"text-center"},"You don't have any counters yet")},G=function(e){var t=e.onGoBack;return a.a.createElement("div",{className:"error"},a.a.createElement("p",null,"None of the counters match the specified conditions :("),a.a.createElement("span",{className:"link",onClick:t},"Go back"))},B=N((function(){var e=null;return Object(r.useEffect)((function(){null!==e&&e.getCounters()}),[]),a.a.createElement(C,null,(function(t){var n=t.store,r=t.actions,c=n.counters,l=n.sort,u=n.query,o=n.filter,s=n.allCounters;e=r;var i="";return c.length&&(i=c.map((function(e){return e.count})).reduce((function(e,t){return e+t})),s=s.length?s:c),a.a.createElement(a.a.Fragment,null,s.length?a.a.createElement("header",null,a.a.createElement(F,{onSearch:r.handleSearch,value:n.query}),a.a.createElement(P,{total:i||0})):"",s.length?a.a.createElement(a.a.Fragment,null,a.a.createElement(_,{actions:r,value:n.filter}),a.a.createElement("main",null,!c.length||u&&o.greater&&o.less?a.a.createElement(G,{onGoBack:function(){return r.cleanSearch()}}):a.a.createElement(x,{items:c,actions:r,sort:l}),a.a.createElement(D,{onNewCounter:r.handleNewCounter}))):a.a.createElement("main",{id:"full-screen"},a.a.createElement(A,null),a.a.createElement(D,{onNewCounter:r.handleNewCounter})))}))}));l.a.render(a.a.createElement(B,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.ea6da128.chunk.js.map
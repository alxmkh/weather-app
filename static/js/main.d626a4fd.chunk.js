(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{154:function(e,t,n){},289:function(e,t,n){"use strict";n.r(t);var c=n(14),r=n(0),a=n.n(r),i=n(21),s=n.n(i),u=(n(154),n(155),n(61)),o=n(40),l=n(298),j=n(294),d=n(91),h=n(296),f=n(297),p=n(68),b=n.n(p),O=n(86),x=n(128),v=n.n(x).a.create({withCredentials:!1,baseURL:"https://api.weatherapi.com/",headers:{key:"1986480656ec490d950204923202611"}}),E=function(e){return Object(O.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.get("v1/search.json?key=1986480656ec490d950204923202611&q="+e);case 3:return n=t.sent,t.next=6,n.data;case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},m=function(e){return Object(O.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.get("v1/current.json?key=1986480656ec490d950204923202611&q="+e);case 3:return n=t.sent,t.next=6,n.data;case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},g=n(38),C=n(88),w={tzId:"-",city:"-",temperatureC:"-",temperatureF:"-",feelsLikeC:"-",feelsLikeF:"-",isCelsius:!0},T=function(e,t,n,c,r,a,i){return{type:"WEATHER/SET_WEATHER",payload:{tzId:e,city:t,temperatureC:n,temperatureF:c,feelsLikeC:r,feelsLikeF:a,isCelsius:i}}},R=function(e){return{type:"WEATHER/SET_FORMAT",payload:{isCelsius:e}}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"WEATHER/SET_WEATHER":case"WEATHER/SET_FORMAT":return C.merge(e,t.payload);case"WEATHER/GET_WEATHER":default:return e}},y=a.a.memo((function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)([]),s=Object(d.a)(i,2),u=s[0],o=s[1],l=[],j=Object(g.c)((function(e){return e.weatherReducer.isCelsius})),p=Object(g.b)(),b=function(e){e.length>0&&E(e).then((function(e){void 0!==e&&e instanceof Array&&e.map((function(e){return l.push({value:e.name})}))})).then((function(){return o(e?l:[])})).catch((function(e){console.log(e)}))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{children:Object(c.jsx)(h.a,{value:n,options:u,style:{width:300},onSelect:function(e){m(e).then((function(e){void 0!==e&&p(T(e.location.tz_id,e.location.name,e.current.temp_c,e.current.temp_f,e.current.feelslike_c,e.current.feelslike_f,j))})).catch((function(e){console.log("Error dispatching data: ",e)}))},onSearch:function(e){b(e)},onChange:function(e){a(e)}})}),Object(c.jsx)("div",{style:{marginTop:25},children:Object(c.jsx)(f.a,{checkedChildren:"C",unCheckedChildren:"F",defaultChecked:!0,onChange:function(e){p(R(e))}})})]})})),_=n(295),F=n(137),A=n.n(F),S=function(){var e=Object(g.c)((function(e){return e.weatherReducer.city})),t=Object(g.c)((function(e){return e.weatherReducer.isCelsius})),n=Object(g.c)((function(e){return e.weatherReducer.temperatureC})),r=Object(g.c)((function(e){return e.weatherReducer.temperatureF})),a=Object(g.c)((function(e){return e.weatherReducer.feelsLikeC})),i=Object(g.c)((function(e){return e.weatherReducer.feelsLikeF}));return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(u.a,{gutter:16,children:[Object(c.jsx)(o.a,{span:12,children:Object(c.jsx)(_.a,{title:"City",value:e})}),Object(c.jsx)(o.a,{span:12,children:Object(c.jsx)(_.a,{title:"Date",value:A()().format("MMM Do YY")})}),Object(c.jsx)(o.a,{span:12,children:Object(c.jsx)(_.a,{title:"Temperature",value:t?n:r})}),Object(c.jsx)(o.a,{span:12,children:Object(c.jsx)(_.a,{title:"Feels like",value:t?a:i})})]})})},L=n(142),W=n.n(L),H=function(){return Object(c.jsx)(u.a,{children:Object(c.jsx)(o.a,{span:12,offset:8,children:Object(c.jsx)(l.b,{direction:"vertical",children:Object(c.jsxs)(j.a,{title:Object(c.jsx)(W.a,{level:3,children:"WeatherApp"}),style:{width:400},children:[Object(c.jsx)("div",{style:{paddingBottom:20},children:Object(c.jsx)(y,{})}),Object(c.jsx)(S,{})]})})})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,299)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},D=n(52),I=n(144),z=Object(D.c)({weatherReducer:k}),B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||D.d,P=Object(D.e)(z,B(Object(D.a)(I.a)));s.a.render(Object(c.jsx)(g.a,{store:P,children:Object(c.jsx)(H,{})}),document.getElementById("root")),M()}},[[289,1,2]]]);
//# sourceMappingURL=main.d626a4fd.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return w});n(196);var a=n(0),r=n(190),l=n.n(r),c=n(211),o=n(212),i=n(323),u=n.n(i),s=n(189),m=n(191),d=n(188),p=Object(s.default)(d.H4).attrs({pb:1,color:"black"}).withConfig({displayName:"events__Date",componentId:"sc-1tkkcye-0"})(["text-transform:uppercase;"]),f=Object(s.default)(d.H4).attrs({color:"primary",pb:3}).withConfig({displayName:"events__CityCountry",componentId:"sc-1tkkcye-1"})(["text-transform:uppercase;"]),y=Object(s.default)(d.H4).attrs({color:"dark",pb:1}).withConfig({displayName:"events__Time",componentId:"sc-1tkkcye-2"})(["text-transform:uppercase;"]),k=Object(s.default)(d.H4).attrs({mb:1,color:"dark"}).withConfig({displayName:"events__Description",componentId:"sc-1tkkcye-3"})([""]),b=Object(s.default)(d.default.Link).attrs({fontFamily:"sans"}).withConfig({displayName:"events__Link",componentId:"sc-1tkkcye-4"})([""]),v=Object(s.default)(d.Box).attrs({pb:4,mb:4,borderStyle:"solid",borderWidth:0,borderTop:0,borderX:0,borderColor:"gray"}).withConfig({displayName:"events__EventBox",componentId:"sc-1tkkcye-5"})([""]),E=function(e){var t=e.event,n=t.dateObj,r=t.venue,l=t.city,i=t.country,s=t.link;return a.createElement(b,{href:s},a.createElement(v,null,a.createElement(p,null,u.a.format(n,"ddd, D MMM YYYY")),a.createElement(f,null,l+", "+i),a.createElement(y,null,a.createElement(o.a,null)," "+u.a.format(n,"h:mm A")),a.createElement(d.Box,null,a.createElement(k,null,a.createElement(o.d,{style:{verticalAlign:"left"}})," "+r)),s?a.createElement(k,null,a.createElement(c.c,null)," "+s):null))};t.default=function(e){var t=e.data,n=l.a.chain(t.allMarkdownRemark.nodes[0].frontmatter.events).map(function(e){var t=e.date,n=e.time,a=e.venue,r=e.city,l=e.country,c=e.link;return{dateObj:u.a.parse(t+" "+n),venue:a,city:r,country:l,link:c}}).partition(function(e){var t=e.dateObj;return u.a.isPast(t)}).value(),r=n[0],c=n[1];return a.createElement(m.a,null,l.a.map(c,function(e){return a.createElement(E,{event:e})}),l.a.map(r,function(e){return a.createElement(E,{event:e})}))};var w="2891994741"}}]);
//# sourceMappingURL=component---src-pages-events-tsx-834de3e2de0445df04c8.js.map
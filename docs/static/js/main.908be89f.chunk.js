(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n(51)},36:function(e,t,n){},37:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(9),l=n.n(r),u=(n(36),n(37),n(64)),c=n(29),o=n(25),s=n.n(o),d=n(26),m=n.n(d),h=Object(c.a)({palette:{type:"light",primary:s.a,secondary:m.a}}),f=n(10),p=n(6),_=n(12),g=n(11),y=n(13),E=n(65),v=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(_.a)(this,Object(g.a)(t).call(this,e))).state={count:0},n}return Object(y.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=0===this.state.count?"\u3072":["\u3074","\u3074","\u3072","\u3073","\u3072","\u3072","\u3074","\u3072","\u3074","\u3072"][this.state.count%10],n="".concat(t,"\u304d");return i.a.createElement(E.a,{variant:"contained",onClick:function(){e.setState({count:e.state.count+1})}},"".concat(this.props.animal_name,"\u304c").concat(this.state.count).concat(n))}}]),t}(i.a.Component),w=n(16),b=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(_.a)(this,Object(g.a)(t).call(this,e))).initial_state={upper:e.upper,under:e.under},n.state=Object(w.a)({},n.initial_state),n}return Object(y.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state.upper===this.initial_state.upper&&this.state.under===this.initial_state.under,n=this.state.upper===this.state.under,a=Math.ceil((this.state.upper+this.state.under)/2),r=i.a.createElement(E.a,{onClick:function(){return e.setState({under:a})}},"".concat(a,"\u4ee5\u4e0a")),l=i.a.createElement(E.a,{onClick:function(){return e.setState({upper:a-1})}},"".concat(a,"\u672a\u6e80")),u=i.a.createElement(E.a,{variant:"contained",onClick:function(){e.setState(Object(w.a)({},e.initial_state))}},"\u30ea\u30bb\u30c3\u30c8"),c=i.a.createElement("p",null,"\u3042\u306a\u305f\u306e\u601d\u3044\u6d6e\u304b\u3079\u305f\u6570\u5b57\u306f".concat(a,"\u3067\u3059\uff01"));return i.a.createElement("div",null,i.a.createElement("p",null,"".concat(this.initial_state.under,"\u304b\u3089").concat(this.initial_state.upper,"\u307e\u3067\u306e\u6574\u6570\u3092\u601d\u3044\u6d6e\u304b\u3079\u3066\u304f\u3060\u3055\u3044\uff01")),n?null:i.a.createElement("div",null,i.a.createElement("p",null,"\u305d\u308c\u306f\u2026"),r,l),n?c:null,t?null:u)}}]),t}(i.a.Component),x=n(19),j=n(28),O=n.n(j),k=n(20),C=n.n(k),S=function(e,t){return e.x>=0&&e.x<=t.width-1&&e.y>=0&&e.y<=t.height-1},z=function(e,t){var n=function(e,t){var n={x:e%t.width,y:Math.floor(e/t.width)};return S(n,t)?n:null}(e,t);return[{x:n.x-1,y:n.y-1},{x:n.x-1,y:n.y},{x:n.x-1,y:n.y+1},{x:n.x,y:n.y-1},{x:n.x,y:n.y+1},{x:n.x+1,y:n.y-1},{x:n.x+1,y:n.y},{x:n.x+1,y:n.y+1}].filter(function(e){return S(e,t)}).map(function(e){return function(e,t){return S(e,t)?e.x+e.y*t.width:null}(e,t)})},M=function(e,t,n){return z(e,n).map(function(e){return t[e].is_mine?1:0}).reduce(function(e,t){return e+t})},A=function(e,t){var n=Object(x.a)(Array(e.width*e.height).keys()).map(function(e){return{is_mine:e<t,opened:!1,flagged:!1,around_mine_num:null}});return O()(n),n.map(function(t,a){return Object(w.a)({},t,{around_mine_num:M(a,n,e)})})},W=function e(t,n,a){if(n[t].flagged)return n;(n[t].opened=!0,0!==n[t].around_mine_num||n[t].is_mine)||z(t,a).filter(function(e){return!n[e].opened&&!n[e].flagged}).forEach(function(t){n=e(t,C()(n),a)});return n},B=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(_.a)(this,Object(g.a)(t).call(this,e))).state={field:A(e.field_size,e.mine_num)},n}return Object(y.a)(t,e),Object(p.a)(t,[{key:"toggleFlag",value:function(e){if(!this.state.field[e].opened){var t=C()(this.state.field);t[e].flagged=!t[e].flagged,this.setState({field:t})}}},{key:"openCell",value:function(e){this.setState({field:W(e,C()(this.state.field),this.props.field_size)})}},{key:"render",value:function(){var e=this,t=0!==this.state.field.filter(function(e){return e.is_mine&&e.opened}).length,n=0===this.state.field.filter(function(e){return!e.is_mine&&!e.opened}).length,a=this.state.field.filter(function(e){return e.flagged}).length,r=this.state.field.map(function(a,r){return i.a.createElement(E.a,{onClick:function(a){return!(n||t)&&e.openCell(r)},onContextMenu:function(t){e.toggleFlag(r),t.preventDefault()},style:{width:40,minWidth:40,height:40,padding:0},variant:a.opened?"text":"contained",disabled:a.opened,key:r},a.flagged?"\ud83d\udea9":a.opened?a.is_mine?"\ud83d\udca3":0===a.around_mine_num?"":a.around_mine_num:"")});return i.a.createElement("div",null,i.a.createElement("p",null,"\u6b8b\u308a\u306e\ud83d\udca3\uff1a",this.props.mine_num-a,"\u500b"),n?i.a.createElement("p",null,"\u30b2\u30fc\u30e0\u30af\u30ea\u30a2\uff01\u304a\u3081\u3067\u3068\u3046\uff01"):null,t?i.a.createElement("p",null,"\u30b2\u30fc\u30e0\u30aa\u30fc\u30d0\u30fc\uff01\u6b8b\u5ff5\uff01"):null,i.a.createElement("div",{style:{width:40*this.props.field_size.width}},r))}}]),t}(i.a.Component);var F=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(u.a,{theme:h},i.a.createElement("h2",null,"Animal Counter"),i.a.createElement(v,{animal_name:"\u3044\u306c"}),i.a.createElement(v,{animal_name:"\u306d\u3053"}),i.a.createElement(v,{animal_name:"\u3055\u308b"}),i.a.createElement("h2",null,"\u6570\u3042\u3066\u30b2\u30fc\u30e0"),i.a.createElement(b,{upper:100,under:1}),i.a.createElement("h2",null,"Mine Sweeper"),i.a.createElement("h3",null,"\u7c21\u5358"),i.a.createElement(B,{field_size:{width:9,height:9},mine_num:10}),i.a.createElement("h3",null,"\u666e\u901a"),i.a.createElement(B,{field_size:{width:16,height:16},mine_num:40}),i.a.createElement("h3",null,"\u96e3\u3057\u3044"),i.a.createElement(B,{field_size:{width:30,height:16},mine_num:99})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.908be89f.chunk.js.map
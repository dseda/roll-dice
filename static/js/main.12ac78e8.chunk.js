(this["webpackJsonproll-dice"]=this["webpackJsonproll-dice"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var i=n(1),c=n.n(i),s=n(8),a=n.n(s),o=(n(13),n(14),n(15),n(16),n(2)),r=n(3),l=n(4),f=n(6),u=n(5),h=n(0),j=function(t){Object(f.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsx)("i",{className:"fas fa-dice-".concat(this.props.face," die ").concat(this.props.rolling?"rolling":"")})}}]),n}(i.Component),b=j,d=function(t){Object(f.a)(n,t);var e=Object(u.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).state={face1:i.props.face,face2:i.props.face,isRolling:!1},i.roll=i.roll.bind(Object(l.a)(i)),i}return Object(r.a)(n,[{key:"roll",value:function(t){var e=this,n=Math.floor(6*Math.random()),i=Math.floor(6*Math.random());this.setState({face1:this.props.faces[n],face2:this.props.faces[i],isRolling:!0}),setTimeout((function(){return e.setState({isRolling:!1})}),1e3)}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"Dice",children:[Object(h.jsx)(b,{face:this.state.face1,rolling:this.state.isRolling}),Object(h.jsx)(b,{face:this.state.face2,rolling:this.state.isRolling})]}),Object(h.jsx)("button",{onClick:this.roll,disabled:this.state.isRolling,children:this.state.isRolling?"Rolling...":"Roll Dice!"})]})}}]),n}(i.Component);d.defaultProps={face:"four",faces:["one","two","three","four","five","six"]};var p=d;var O=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(p,{})})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),i(t),c(t),s(t),a(t)}))};a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),g()}],[[18,1,2]]]);
//# sourceMappingURL=main.12ac78e8.chunk.js.map
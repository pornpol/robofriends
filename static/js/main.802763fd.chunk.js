(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o);n(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);var i=n(3),s=n(4),l=n(6),h=n(5),u=n(7),m=function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,".png?size=275x275"),alt:"robot"}),r.a.createElement("h2",null,n),r.a.createElement("p",null,a))},d=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement(m,{key:e.id,id:e.id,name:e.name,email:e.email})})))},b=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{type:"search",className:"pa3 ba b--green bg-lightest-blue",placeholder:"Search Robot",onChange:t}))},f=function(e){var t=e.children;return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},t)},g=(n(15),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).call(this))).onSearchChange=function(t){e.setState({searchField:t.target.value.toLowerCase()})},e.state={robots:[],searchField:""},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField)}));return 0===this.state.robots.length?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(b,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(d,{robots:t})))}}]),t}(a.Component));c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.802763fd.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),o=a.n(c),i=(a(14),a(15),a(3)),l=a(4),s=a(6),u=a(5),h=a(7),m=function(e){var t=e.name;return r.a.createElement("div",{className:"minW bg-SW-yellow tc br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("div",{id:"info"},r.a.createElement("h2",null,t)))},d=(a(16),function(e){var t=e.presentedData;return r.a.createElement("div",{id:"cardHolder"},t.map(function(e){return r.a.createElement(m,{key:e.url,name:e.name})}))}),f=(a(17),function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa3 tc"},r.a.createElement("input",{type:"search",placeholder:"Search names...",className:"pa3 ba b--green bg-lightest-blue br-pill tc",id:"searchBox",onChange:t}))}),p=(a(18),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).fetchData=function(t,a){null!==t&&fetch(t).then(function(e){return e.json()}).then(function(n){a=a.concat(n.results),e.setState({retrievedData:a}),t=n.next,e.fetchData(t,a)})},e.onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={retrievedData:[],searchfield:""},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchData("https://swapi.co/api/people/",[])}},{key:"render",value:function(){var e=this,t=this.state.retrievedData.filter(function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())});return 0===this.state.retrievedData.length?r.a.createElement("h1",{className:"tc"},"Loading..."):r.a.createElement("div",null,r.a.createElement("h1",{className:"tc"},"Star Wars Database"),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement("hr",null),r.a.createElement(d,{presentedData:t}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.85fe8d00.chunk.js.map
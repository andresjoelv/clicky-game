(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(75)},34:function(e,t,n){},35:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(16),i=n.n(r),o=n(23),l=n(9),s=n(10),m=n(12),u=n(11),h=n(13),d=n(3),g=n(22);n(34);var p=function(e){return c.a.createElement("div",{role:"img","aria-label":"click item",className:"click-item  "+(!1===e.condition?"shake":""),onClick:function(){return e.handleClick(e.icon.iconName)}},c.a.createElement(g.a,{icon:e.icon}))},k=(n(35),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){window.clearTimeout(this.timeout)}},{key:"renderMessage",value:function(e,t){var n,a,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r?a="":void 0===e?(n="Click an image to begin",a=""):(n=t?"You won the game!!!":e?"You guessed correctly!":"You guessed incorrectly",a=e?"correct":"incorrect"),window.clearTimeout(this.timeout),!r&void 0!==e&&(this.timeout=window.setTimeout(this.renderMessage,t?3e3:1e3,t?void 0:e,!1,!0)),c.a.createElement("li",{key:Math.random(),className:a},n)}},{key:"render",value:function(){return c.a.createElement("nav",{className:"pinned"},c.a.createElement("div",null,c.a.createElement("ul",{className:"center navList"},c.a.createElement("li",{className:"logo brand animated lightSpeedIn"},"Clicky Game"),this.renderMessage(this.props.correct,this.props.gameWon),c.a.createElement("li",null,"Score: ",this.props.currScore," | High Score: ",this.props.highScore))))}}]),t}(a.Component)),f=n(18),v=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={icons:[d.k,d.i,d.a,d.c,d.e,d.f,d.j,d.l,d.b,d.d,d.g,d.h].sort(n.randomize),clicked:[],currScore:0,highScore:0,correct:void 0,gameWon:!1},n.randomize=function(e,t){return Math.random()>.5?-1:1},n.handleClick=function(e){if(-1===n.state.clicked.indexOf(e)){var t=n.state.clicked.length+1,a=t===n.state.icons.length?[]:[].concat(Object(o.a)(n.state.clicked),[e]);n.setState({icons:n.state.icons.sort(n.randomize),clicked:a,currScore:t,highScore:Math.max(n.state.highScore,t),correct:!0,gameWon:t===n.state.icons.length})}else n.setState({icons:n.state.icons.sort(n.randomize),clicked:[],currScore:0,correct:!1,gameWon:!1})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(k,{correct:this.state.correct,gameWon:this.state.gameWon,currScore:this.state.currScore,highScore:this.state.highScore}),c.a.createElement(f.CardPanel,{className:"cpanel"},c.a.createElement("p",null,"Click on an image to earn points, but don't click on any more than once!")),c.a.createElement("main",{className:"container"},this.state.icons.map(function(t){return c.a.createElement(p,{correct:e.state.correct,key:t.iconName,icon:t,handleClick:e.handleClick})})),c.a.createElement(f.Footer,{copyrights:"\xa9 2019 Andres Villamarin",links:c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{className:"grey-text text-lighten-3",href:"https://github.com/andresjoelv"},"GitHub")),c.a.createElement("li",null,c.a.createElement("a",{className:"grey-text text-lighten-3",href:"https://www.linkedin.com/in/andresjoelv/"},"LinkedIn"))),className:"example"},c.a.createElement("h5",{className:"white-text"},"Visit My Website!"),c.a.createElement("a",{className:"grey-text text-lighten-3",href:"http://www.andresvillamarin.com/"},"andresvillamarin.com")))}}]),t}(a.Component);n(74);i.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.1c98e767.chunk.js.map
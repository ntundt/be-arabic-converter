(this["webpackJsonpbe-arabic-converter"]=this["webpackJsonpbe-arabic-converter"]||[]).push([[0],{13:function(e,a,r){},15:function(e,a,r){"use strict";r.r(a);var t=r(1),n=r.n(t),b=r(4),c=r.n(b),l=(r(13),r(5)),i=r(6),s=r(2),o=r(8),h=r(7),u=[{be:"\u0434\u0436",ar:"\u062c"},{be:"\u08ae",ar:"\u0434\u0437\u044c"},{be:"\u0437\u044c",ar:"\u0632"},{be:"\u043a\u044c",ar:"\u0643"},{be:"\u0441\u044c",ar:"\u062b"},{be:"\u0442\u044c",ar:"\u062a"},{be:"\u0446\u044c",ar:"\u0633"},{be:"\u0431",ar:"\u0628"},{be:"\u0432",ar:"\u0648"},{be:"\u0433",ar:"\u0647"},{be:"\u0491",ar:"\u063a"},{be:"\u0434",ar:"\u062f"},{be:"\u0436",ar:"\u0698"},{be:"\u0437",ar:"\u0636"},{be:"\u0439",ar:"\u064a"},{be:"\u043a",ar:"\u0642"},{be:"\u043b",ar:"\u0644"},{be:"\u043c",ar:"\u0645"},{be:"\u043d",ar:"\u0646"},{be:"\u043f",ar:"\u067e"},{be:"\u0440",ar:"\u0631"},{be:"\u0441",ar:"\u0635"},{be:"\u0442",ar:"\u0637"},{be:"\u045e",ar:"\u0648"},{be:"\u0444",ar:"\u0641"},{be:"\u0445",ar:"\u062d"},{be:"\u0446",ar:"\u08af"},{be:"\u0447",ar:"\u0686"},{be:"\u0448",ar:"\u0634"},{be:"'",ar:"\u0639"},{be:",",ar:"\u060c"},{be:".",ar:"."},{be:"!",ar:"!"},{be:"?",ar:"\u061f"},{be:":",ar:":"},{be:";",ar:"\u061b"},{be:" ",ar:" "},{be:"\u0430",ar:"\u064e"},{be:"\u0435",ar:"\u064e"},{be:"\u044d",ar:"\u064e"},{be:"\u0456",ar:"\u0650"},{be:"\u044b",ar:"\u0650"},{be:"\u0443",ar:"\u064f"},{be:"\u043e",ar:"\u064f"},{be:"\u044e",ar:"\u064a\u064f"},{be:"\u0451",ar:"\u0650\u064f"},{be:"\u044f",ar:"\u0650\u064e"},{be:"\u044c",ar:""}];function d(e){for(var a=e.toLowerCase(),r=0;r<u.length;r++)a=a.replaceAll(u[r].be,u[r].ar);return a}function j(e){for(var a=e,r=0;r<u.length;r++)""!==u[r].ar&&(a=a.replaceAll(u[r].ar,u[r].be));return a}var p=r(0),g=function(e){Object(o.a)(r,e);var a=Object(h.a)(r);function r(e){var t;return Object(l.a)(this,r),(t=a.call(this,e)).state={beValue:"",arValue:""},t.handleArChange=t.handleArChange.bind(Object(s.a)(t)),t.handleBeChange=t.handleBeChange.bind(Object(s.a)(t)),t.copyArContents=t.copyArContents.bind(Object(s.a)(t)),t}return Object(i.a)(r,[{key:"handleBeChange",value:function(e){this.setState({beValue:e.target.value,arValue:d(e.target.value)})}},{key:"handleArChange",value:function(e){this.setState({beValue:j(e.target.value),arValue:e.target.value})}},{key:"copyArContents",value:function(){navigator.clipboard.writeText(this.state.arValue)}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"container col-md-8",style:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:0},children:[Object(p.jsxs)("div",{style:{padding:"12px"},children:[Object(p.jsx)("h3",{children:"\u041a\u0430\u043d\u0432\u0435\u0440\u0442\u0430\u0440 \u043d\u0430 \u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0443\u044e \u0430\u0440\u0430\u0431\u0456\u0446\u0443"}),Object(p.jsx)("textarea",{style:{marginBottom:"12px",marginTop:"16px"},className:"form-control",value:this.state.beValue,onChange:this.handleBeChange,placeholder:"\u0423\u0432\u044f\u0434\u0437\u0456\u0446\u0435 \u0442\u044d\u043a\u0441\u0442 \u043a\u0456\u0440\u044b\u043b\u0456\u0446\u0430\u0439"}),Object(p.jsx)("textarea",{style:{marginBottom:"12px"},className:"form-control",value:this.state.arValue,onChange:this.handleArChange,placeholder:"\u0410\u0431\u043e \u045e\u0432\u044f\u0434\u0437\u0456\u0446\u0435 \u044f\u0433\u043e \u0430\u0440\u0430\u0431\u0456\u0446\u0430\u0439"}),Object(p.jsx)("button",{className:"btn btn-primary",onClick:this.copyArContents,children:"\u041a\u0430\u043f\u0456\u044f\u0432\u0430\u0446\u044c"})]}),Object(p.jsxs)("div",{style:{padding:"12px"},children:["v0.2.1 \xa9 ",Object(p.jsx)("a",{href:"https://github.com/ntundt/",children:"Mikita Tsikhanovich"}),", 2021"]})]})}}]),r}(n.a.Component);c.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.bdc78825.chunk.js.map
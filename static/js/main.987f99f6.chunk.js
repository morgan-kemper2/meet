(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{29:function(e,t,n){},31:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(1),r=n.n(o),s=n(21),c=n.n(s),i=(n(29),n(7)),l=n.n(i),u=n(8),h=n(2),d=n(6),f=n(4),p=n(3),m=(n(31),function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={show:!1,showButton:"show details"},e.showDetails=function(){!0===e.state.show?e.setState({show:!1,showButton:"show details"}):e.setState({show:!0,showButton:"hide details"})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.event;return Object(a.jsxs)("div",{className:"event",children:[Object(a.jsx)("div",{className:"summary",children:Object(a.jsx)("h1",{children:e.summary})}),Object(a.jsx)("div",{className:"eventInfo_collapsed"}),this.state.show&&Object(a.jsxs)("div",{className:"detailInfo",children:[Object(a.jsx)("h2",{children:"About event:"}),Object(a.jsx)("div",{className:"description",children:e.description}),Object(a.jsx)("a",{href:e.htmlLink,children:"See details on Google Calender"})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"showDetails",onClick:this.showDetails,children:this.state.showButton})})]})}}]),n}(o.Component)),v=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(a.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(m,{event:e})},e.id)}))})}}]),n}(o.Component),b=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a.className=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"Alert",children:Object(a.jsx)("p",{style:this.getStyle(),className:this.className,children:this.props.text})})}}]),n}(o.Component),g=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).color="blue",a.className="info",a}return n}(b),j=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,fontWeight:"600"}},a.color="red",a.className="error",a}return n}(b),w=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,fontWeight:"600",fontSize:"180px"}},a.color="orange",a.className="warning",a}return n}(b),O=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={locations:e.props.locations,query:"",suggestions:[],showSuggestions:!1},e.handleInputChanged=function(t){e.setState({showSuggestions:!0});var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:"",warningText:""});e.setState({query:n,warningText:"",infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1,infoText:"",warningText:""}),e.props.updateEvents(t)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"CitySearch",children:[Object(a.jsx)(g,{className:"info",text:this.state.infoText}),Object(a.jsx)(w,{className:"warning",text:this.state.warningText}),Object(a.jsx)("label",{children:"Name of city: "}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{label:"City name",type:"text",className:"citySearchInput",value:this.state.query,onChange:this.handleInputChanged}),Object(a.jsxs)("ul",{className:this.state.showSuggestions?"suggestions showSuggestions":"display-none",children:[this.state.suggestions.map((function(t){return Object(a.jsx)("li",{className:"suggestionCity",onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(a.jsx)("b",{children:"See all cities"})})]})]})]})}}]),n}(o.Component),x=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={numberOfEvents:32},e.submitNumber=function(t){var n=t.target.value;n>32||n<1||""===n?e.setState({infoText:"Please enter number between 1 ~ 32",warningText:"",numberOfEvents:n}):isNaN(n)?e.setState({infoText:"Please enter number",numberOfEvents:n,warningText:""}):(e.props.updateEvents(null,n),e.setState({numberOfEvents:n,infoText:"",warningText:""}))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"numberOfEvents",children:[Object(a.jsx)(j,{text:this.state.infoText}),Object(a.jsx)(w,{text:this.state.warningText}),Object(a.jsx)("label",{children:"Number of Events: "}),Object(a.jsx)("input",{type:"text",className:"numberInput",value:this.state.numberOfEvents,onChange:this.submitNumber})]})}}]),n}(o.Component),y=n(23),k=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],S=n(10),T=n.n(S),N=n(9),E=n.n(N),C=function(e){var t=e.map((function(e){return e.location}));return Object(y.a)(new Set(t))},Z=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,o,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return E.a.done(),e.abrupt("return",{events:k,locations:C(k)});case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),E.a.done(),e.abrupt("return",{events:JSON.parse(t).events,locations:C(JSON.parse(t).events)});case 8:return e.next=10,A();case 10:if(!(n=e.sent)){e.next=20;break}return I(),a="https://qukw1ka8ec.execute-api.us-east-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=16,T.a.get(a);case 16:return(o=e.sent).data&&(r=C(o.data.events),localStorage.setItem("lastEvents",JSON.stringify(o.data)),localStorage.setItem("locations",JSON.stringify(r))),E.a.done(),e.abrupt("return",{events:o.data.events,locations:r});case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,o,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("access_token");case 2:if(t=e.sent,e.t0=t,!e.t0){e.next=8;break}return e.next=7,W(t);case 7:e.t0=e.sent;case 8:if(n=e.t0,t&&n){e.next=23;break}return e.next=12,localStorage.removeItem("access_token");case 12:return a=new URLSearchParams(window.location.search),e.next=15,a.get("code");case 15:if(o=e.sent){e.next=22;break}return e.next=19,T.a.get("https://qukw1ka8ec.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 19:return r=e.sent,s=r.data.authUrl,e.abrupt("return",window.location.href=s);case 22:return e.abrupt("return",o&&L(o));case 23:return e.abrupt("return",t);case 24:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",!n.error);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},L=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(),n=encodeURIComponent(t),e.next=4,fetch("https://qukw1ka8ec.execute-api.us-east-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 4:return a=e.sent,(o=a.access_token)&&localStorage.setItem("access_token",o),e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();n(49);var q=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Welcome to the Meet App"}),Object(a.jsx)("h4",{children:"Login to see upcoming events around the world for full-stack developers."}),Object(a.jsx)("div",{className:"button_cont",align:"center",children:Object(a.jsxs)("div",{className:"google-btn",children:[Object(a.jsx)("div",{className:"google-icon-wrapper",children:Object(a.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(a.jsx)("a",{href:"https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=46724428078-e2oiv2p4aimh3ssqjlhrrr7lbc0pm7uc.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fmorgan-kemper2.github.io%2Fmeet%2F&flowName=GeneralOAuthFlow",rel:"nofollow noopener",className:"btn-text",children:Object(a.jsx)("b",{children:"Sign in with Google"})})]})}),Object(a.jsx)("a",{href:"https://glenzy.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy Policy"})]})},B=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={events:[],currentLocation:"all",locations:[],numberOfEvents:32},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e.updateEvents=function(t,n){var a=e.state,o=a.currentLocation,r=a.numberOfEvents;t?Z().then((function(n){var a=("all"===t?n.events:n.events.filter((function(e){return e.location===t}))).slice(0,r);return e.setState({events:a,currentLocation:t,locations:n.locations})})):Z().then((function(t){var a=("all"===o?t.events:t.events.filter((function(e){return e.location===o}))).slice(0,n);return e.setState({events:a,numberOfEvents:n,locations:t.locations})}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,o,r=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(t=localStorage.getItem("access_token"))){e.next=7;break}return e.next=4,W(t);case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0=!1;case 8:n=e.t0,this.setState({checkToken:n}),!0===n&&this.updateEvents(),a=new URLSearchParams(window.location.search),o=a.get("code"),this.mounted=!0,o&&!0===this.mounted&&!1===n&&(this.setState({checkToken:!0}),this.updateEvents()),this.mounted=!0,Z().then((function(e){r.mounted&&r.setState({events:e.events,locations:e.locations})}));case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return!1===W?Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(q,{})}):Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(O,{updateEvents:this.updateEvents,locations:this.state.locations}),Object(a.jsx)(x,{updateEvents:this.updateEvents,numberOfEvents:this.state.numberOfEvents}),Object(a.jsx)(v,{events:this.state.events})]})}}]),n}(o.Component),F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),r(e),s(e)}))},_=n(22);c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(B,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");F?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):M(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):M(t,e)}))}}(),_.config("798b9bc49c52458082acc5048d36000c").install(),J()}},[[51,1,2]]]);
//# sourceMappingURL=main.987f99f6.chunk.js.map
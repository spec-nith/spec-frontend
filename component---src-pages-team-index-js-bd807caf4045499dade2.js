"use strict";(self.webpackChunkspec=self.webpackChunkspec||[]).push([[164],{7677:function(e,t,r){var a=r(4578),n=r(7294),l=r(6633),s=r.n(l),i=r(7524),c=r(4280),o=r(2510),m=function(e){return n.createElement(n.Fragment,null)},u=function(e){function t(){var t;return(t=e.call(this)||this).state={wait:!0,data:[],error:!1,errorData:[],url:""},t}(0,a.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;s().get(this.state.url,{timeout:1e4}).then((function(t){e.setState({data:t.data,wait:!1})})).catch((function(t){console.log(t.response);var r="Request Timed Out";t.response&&(r=t.response.status&&t.response.statusText?"API Error: "+t.response.status+" "+t.response.statusText:"API request failed"),e.setState({error:!0,errorMsg:r,wait:!1})}))},r.renderLoader=function(){if(this.state.wait)return n.createElement("div",{className:"flex h-90v justify-center items-center"},n.createElement(c.Z,{type:"Puff",color:"#961adb7a",height:100,width:100,timeout:1e4}))},r.renderError=function(){if(this.state.error)return n.createElement("div",{className:"flex flex-wrap h-90v"},n.createElement("div",{className:"flex items-end md:items-center justify-end w-full md:w-1/2"},n.createElement("picture",{className:"flex justify-center md:justify-end px-8"},n.createElement("source",{srcSet:"error.webp",type:"image/webp"}),n.createElement("img",{src:"error.webp",className:"w-1/2",alt:"error_image"}))),n.createElement("div",{className:"flex flex-col items-center justify-center w-full md:w-1/2 text-white p-4 text-4xl"},n.createElement("p",{className:"w-full text-red-500"},this.state.errorMsg),n.createElement("p",{className:"w-full text-xl"},"Ah Snap! Something was broken. We're trying to fix this")))},r.render=function(){return n.createElement(i.Z,null,n.createElement(o.Z,{title:"PAGE TITLE GOES HERE"}),this.renderLoader(),this.renderError(),this.state.wait||this.state.error?"":n.createElement(m,{data:this.state.data}))},t}(n.Component);t.Z=u},9274:function(e,t,r){r.r(t);var a=r(4578),n=r(7294),l=r(7524),s=r(2510),i=r(4471),c=r(7606),o=r(7190),m=r(7677),u=r(1528),d=function(e){var t=e.data;return n.createElement("div",{className:"flex flex-col card-back rounded-lg mx-2"},n.createElement("div",{className:"card-header mx-4 -mt-6"},n.createElement("img",{className:"w-auto rounded-lg  object-cover w-[16rem] h-[16rem] xs:w-[20rem] xs:h-[20rem] lg-[18rem] lg:h-[18rem]",src:t.profile_pic_url,alt:t.name+"_pic"})),n.createElement("div",{className:"card-body mt-4"},n.createElement("h4",{className:"font-semibold text-xl"},t.name),n.createElement("p",{className:"text-lg"},t.title),n.createElement("div",{className:" mt-2 w-full rounded-b-lg bg-white text-black px-4 flex justify-end text-2xl"},n.createElement("span",{className:"px-2 py-2"},n.createElement("a",{href:t.linkedin_id,rel:"noopener noreferrer",target:"_blank"},n.createElement(c.G,{icon:o.hwn,className:"text-blue-400 hover:text-blue-700 transition-all"}))),n.createElement("span",{className:"px-2 py-2"},n.createElement("a",{href:t.github_id,rel:"noopener noreferrer",target:"_blank"},n.createElement(c.G,{icon:o.zhw,className:"text-gray-500 hover:text-black transition-all"}))))))},f=function(e){var t=e.data,r=(0,n.useState)("Team SPEC"),a=r[0],l=r[1],s={"Team SPEC":[],"Final Year":["President","Vice President","Web Development Head","Developer Relations Head","External Affairs Secretary","Marketing And Strategy Analyst","Treasurer"],Coordinators:["Coordinator"],Executives:["Executive"],Volunteers:["Volunteer"]};return n.createElement(n.Fragment,null,n.createElement("div",{className:"lg:m-12 lg:p-8"},n.createElement(i.Z,{filter_keys:Object.keys(s),displayChoice:a,setDisplayChoice:l,visibleChoices:5}),n.createElement("div",{className:"shade top-[63rem] left-[68rem] w-[80rem] h-[80rem]"}),n.createElement("div",{className:"shade top-[123rem] left-[-56rem] w-[80rem] h-[80rem]"}),n.createElement("div",{className:"shade top-[183rem] left-[68rem] w-[80rem] h-[80rem]"}),n.createElement("div",{className:"shade top-[243rem] left-[-56rem] w-[80rem] h-[80rem]"}),n.createElement("div",{className:"shade top-[303rem] left-[68rem] w-[80rem] h-[80rem]"}),n.createElement("div",{className:"shade top-[363rem] left-[-56rem] w-[80rem] h-[80rem]"}),n.createElement("div",{className:"shade top-[423rem] left-[68rem] w-[80rem] h-[80rem]"}),n.createElement("div",{className:"px-2 xs:px-8"},Object.keys(s).slice(1).map((function(e){return n.createElement("div",{className:"text-white text-4xl font-monty text-center transition-all duration-500 overflow-hidden h-fit "+(e===a||"Team SPEC"===a?"h-auto":"max-h-0"),key:e},n.createElement("span",{className:"HeroText"},e),n.createElement("div",{className:"my-10 flex justify-center flex-wrap"},s[e].map((function(e){return 0===t.filter((function(t){return t.title===e})).length?n.createElement("div",{className:"text-white text-2xl"}," Coming Soon "):t.filter((function(t){return t.title===e})).map((function(e){return n.createElement("div",{className:"w-full md:w-1/2 lg:w-1/3 flex justify-center py-14",key:e.name+"_pic"},n.createElement(d,{data:e}))}))}))))})))))},h=function(e){function t(){var t;return(t=e.call(this)||this).com=void 0,t.state.url=u.dn,t}return(0,a.Z)(t,e),t.prototype.render=function(){return this.state.data.sort((function(e,t){return e.name.localeCompare(t.name)})),n.createElement(l.Z,null,n.createElement(s.Z,{title:"Team"}),this.renderLoader(),this.renderError(),this.state.wait||this.state.error?"":n.createElement(f,{data:this.state.data}))},t}(m.Z);t.default=h},4471:function(e,t,r){var a=r(7294),n=r(7606),l=r(8014);function s(){return{width:window.innerWidth}}var i=function(e){var t,r,i,c=e.filter_keys,o=e.displayChoice,m=e.setDisplayChoice,u=e.visibleChoices,d=(0,a.useState)(Math.min(u,c.length)),f=d[0],h=d[1],p=(0,a.useState)(!0),E=p[0],x=p[1],v=(t=(0,a.useState)(s()),r=t[0],i=t[1],(0,a.useEffect)((function(){function e(){i(s())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),r).width,w=(0,a.useRef)();(0,a.useEffect)((function(){var e=function(e){E||!w.current||w.current.contains(e.target)||x(!0)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[E]),(0,a.useEffect)((function(){h(v<768?2:Math.min(u,c.length))}),[v,u,c]);var g=c.slice(f);return a.createElement("div",{className:"flex fixed bottom-0 justify-center w-full md:mb-10 md:relative z-30 "},a.createElement("div",{className:"flex flex-row w-full md:w-auto flex-wrap"},c.slice(0,f).map((function(e,t){return a.createElement("button",{className:"px-4 md:px-6 py-2 text-white transition-all duration-300 hover:bg-gray-600 outline-0 grow md:grow-0 border border-transparent hover:scale-105 "+(o===e?"btn-gradient ":"filter-button ")+(0===t?"md:rounded-l-full ":"border-x-2 -ml-2 ")+(t===f-1&&0===g.length?"md:rounded-r-full md:border-r-0 ":""),onClick:function(){m((function(){return e}))},key:t},e)})),g.length>0?a.createElement("div",{ref:w},a.createElement("button",{className:"p-2 text-white md:rounded-r-full transition-all duration-300 hover:bg-gray-600 outline-0 outline-0 border border-transparent hover:scale-105 "+(g.includes(o)?"btn-gradient ":"filter-button "),onClick:function(){return x((function(e){return!e}))}},"Show More",a.createElement("span",{className:"px-2"},a.createElement(n.G,{icon:l.ptq,className:"hidden lg:inline-block"}),a.createElement(n.G,{icon:l.mTx,className:"lg:hidden"}))),a.createElement("div",{className:"z-50 absolute overflow-hidden -top-36 lg:top-auto"+(E?" max-h-0":" max-h-96")},a.createElement("ul",{className:" bg-violet-600 p-2 "},g.map((function(e){return a.createElement("li",{key:e},a.createElement("button",{"data-choice":e,onClick:function(e){return m(e.target.getAttribute("data-choice"))},className:" hover:scale-105 p-2 text-white"},e))}))))):""))};i.defaultProps={visibleChoices:2},t.Z=i}}]);
//# sourceMappingURL=component---src-pages-team-index-js-bd807caf4045499dade2.js.map
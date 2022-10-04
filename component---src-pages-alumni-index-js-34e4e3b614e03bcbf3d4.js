"use strict";(self.webpackChunkspec=self.webpackChunkspec||[]).push([[501],{7677:function(e,t,r){var n=r(4578),a=r(7294),l=r(6633),i=r.n(l),s=r(7524),c=r(4280),o=r(2510),u=function(e){return a.createElement(a.Fragment,null)},m=function(e){function t(){var t;return(t=e.call(this)||this).state={wait:!0,data:[],error:!1,errorData:[],url:""},t}(0,n.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;i().get(this.state.url,{timeout:1e4}).then((function(t){e.setState({data:t.data,wait:!1})})).catch((function(t){console.log(t.response);var r="Request Timed Out";t.response&&(r=t.response.status&&t.response.statusText?"API Error: "+t.response.status+" "+t.response.statusText:"API request failed"),e.setState({error:!0,errorMsg:r,wait:!1})}))},r.renderLoader=function(){if(this.state.wait)return a.createElement("div",{className:"flex h-90v justify-center items-center"},a.createElement(c.Z,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:1e4}))},r.renderError=function(){if(this.state.error)return a.createElement("div",{className:"flex flex-wrap h-90v"},a.createElement("div",{className:"flex items-end md:items-center justify-end w-full md:w-1/2"},a.createElement("picture",{className:"flex justify-center md:justify-end px-8"},a.createElement("source",{srcSet:"error.webp",type:"image/webp"}),a.createElement("img",{src:"error.webp",className:"w-1/2",alt:"error_image"}))),a.createElement("div",{className:"flex flex-col items-center justify-center w-full md:w-1/2 text-white p-4 text-4xl"},a.createElement("p",{className:"w-full text-red-500"},this.state.errorMsg),a.createElement("p",{className:"w-full text-xl"},"Ah Snap! Something was broken. We're trying to fix this")))},r.render=function(){return a.createElement(s.Z,null,a.createElement(o.Z,{title:"PAGE TITLE GOES HERE"}),this.renderLoader(),this.renderError(),this.state.wait||this.state.error?"":a.createElement(u,{data:this.state.data}))},t}(a.Component);t.Z=m},5502:function(e,t,r){r.r(t);var n=r(4578),a=r(7294),l=r(7524),i=r(2510),s=r(6948),c=r(8933),o=r(4471),u=r(7606),m=r(7190),d=r(1528),f=r(7677),h=function(e){var t=e.person;return a.createElement("div",{className:"max-w-sm rounded-xl w-full overflow-hidden shadow-lg text-left"},a.createElement("div",{className:"h-0 relative bg-gray-300 overflow-hidden",style:{paddingBottom:"111%"}},a.createElement("picture",null,a.createElement("source",{srcSet:t.profile_pic_webp_url,type:"image/webp"}),a.createElement("img",{className:"w-full h-full block absolute md:hover:scale-110 transition-all duration-400",src:t.profile_pic_url,alt:t.name+"_pic"}))),a.createElement("div",{className:"pt-4",style:{backgroundColor:"rgb(14,15,18)"}},a.createElement("div",{className:"px-6 flex justify-between pb-2"},a.createElement("div",{className:"text-xl",style:{fontWeight:"700"}},t.name),a.createElement("div",{className:"text-right"},a.createElement("a",{className:"hover:text-blue-500 transition-all",href:t.linkedin_id,target:"_blank",rel:"noreferrer noopener"},a.createElement(u.G,{icon:m.D9H})))),a.createElement("div",{className:"bg-gray-200 pl-6 py-2 text-base font-bold text-gray-700"},t.company)))},p=function(e){return a.createElement(s.t,{className:"alumni-swiper pt-8",modules:[c.tl,c.W_,c.pt,c.oM],pagination:{dynamicBullets:!0,clickable:!0},navigation:!0,preloadImages:!1,lazy:!0,loopAdditionalSlides:30,breakpoints:{640:{slidesPerView:2},1024:{slidesPerView:3},1280:{slidesPerView:4}}},e.children)},E=function(e){var t=e.data,r=(0,a.useState)("All Batches"),n=r[0],l=r[1],i={"All Batches":[2021,2020,2019,2018,2017]," 2021":[2021]," 2020":[2020]," 2019":[2019]," Before 2019":[2018,2017,2016,2015,2014]};return a.createElement(a.Fragment,null,a.createElement("div",{className:"lg:m-12 lg:p-8"},a.createElement(o.Z,{filter_keys:Object.keys(i),displayChoice:n,setDisplayChoice:l}),a.createElement("div",{className:"px-8"},Object.keys(i).slice(1).map((function(e){return a.createElement("div",{className:"batch text-white text-4xl font-monty text-center duration-500 transition-all overflow-hidden py-10 md:py-0 "+(e===n||"All Batches"===n?"max-h-100v":"hidden max-h-0 md:block"),key:e},"Batch",a.createElement("span",{style:{color:"rgb(46, 224, 154)"}},e),a.createElement(p,null,t.filter((function(t){return i[e].includes(t.batch)})).map((function(e){return a.createElement(s.o,{className:"flex justify-center",key:e.name},a.createElement(h,{person:e}))}))))})))))},w=function(e){function t(){var t;return(t=e.call(this)||this).state.url=d.sT,t}return(0,n.Z)(t,e),t.prototype.render=function(){return a.createElement(l.Z,null,a.createElement(i.Z,{title:"Alumni"}),this.renderLoader(),this.renderError(),this.state.wait||this.state.error?"":a.createElement(E,{data:this.state.data}))},t}(f.Z);t.default=w},4471:function(e,t,r){var n=r(7294),a=r(7606),l=r(8014);function i(){return{width:window.innerWidth}}var s=function(e){var t,r,s,c=e.filter_keys,o=e.displayChoice,u=e.setDisplayChoice,m=e.visibleChoices,d=(0,n.useState)(Math.min(m,c.length)),f=d[0],h=d[1],p=(0,n.useState)(!0),E=p[0],w=p[1],v=(t=(0,n.useState)(i()),r=t[0],s=t[1],(0,n.useEffect)((function(){function e(){s(i())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),r).width,b=(0,n.useRef)();(0,n.useEffect)((function(){var e=function(e){E||!b.current||b.current.contains(e.target)||w(!0)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[E]),(0,n.useEffect)((function(){h(v<768?2:Math.min(m,c.length))}),[v,m,c]);var x=c.slice(f);return n.createElement("div",{className:"flex fixed bottom-0 justify-center w-full md:mb-10 md:relative z-30"},n.createElement("div",{className:"flex flex-row w-full md:w-auto flex-wrap"},c.slice(0,f).map((function(e,t){return n.createElement("button",{className:"px-4 md:px-6 py-2 text-white transition-all duration-300 hover:bg-black outline-0 grow md:grow-0 "+(o===e?"active-filter-button ":"filter-button ")+(0===t?"md:rounded-l-full ":"border-x-2 -ml-2 ")+(t===f-1&&0===x.length?"md:rounded-r-full md:border-r-0 ":""),onClick:function(){u((function(){return e}))},key:t},e)})),x.length>0?n.createElement("div",{ref:b},n.createElement("button",{className:"p-2 text-white md:rounded-r-full transition-all duration-300 hover:bg-black outline-0 "+(x.includes(o)?"active-filter-button ":"filter-button "),onClick:function(){return w((function(e){return!e}))}},"Show More",n.createElement("span",{className:"px-2"},n.createElement(a.G,{icon:l.ptq,className:"hidden lg:inline-block"}),n.createElement(a.G,{icon:l.mTx,className:"lg:hidden"}))),n.createElement("div",{className:"z-50 absolute overflow-hidden -top-36 lg:top-auto"+(E?" max-h-0":" max-h-96")},n.createElement("ul",{className:" bg-blue-600 p-2 "},x.map((function(e){return n.createElement("li",{key:e},n.createElement("button",{"data-choice":e,onClick:function(e){return u(e.target.getAttribute("data-choice"))},className:"bg-blue-600 p-2"},e))}))))):""))};s.defaultProps={visibleChoices:2},t.Z=s}}]);
//# sourceMappingURL=component---src-pages-alumni-index-js-34e4e3b614e03bcbf3d4.js.map
"use strict";(self.webpackChunkspec=self.webpackChunkspec||[]).push([[749],{7677:function(e,t,r){var n=r(4578),a=r(7294),s=r(6633),l=r.n(s),i=r(7524),c=r(4280),o=r(2510),u=function(e){return a.createElement(a.Fragment,null)},m=function(e){function t(){var t;return(t=e.call(this)||this).state={wait:!0,data:[],error:!1,errorData:[],url:""},t}(0,n.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;l().get(this.state.url,{timeout:1e4}).then((function(t){e.setState({data:t.data,wait:!1})})).catch((function(t){console.log(t.response);var r="Request Timed Out";t.response&&(r=t.response.status&&t.response.statusText?"API Error: "+t.response.status+" "+t.response.statusText:"API request failed"),e.setState({error:!0,errorMsg:r,wait:!1})}))},r.renderLoader=function(){if(this.state.wait)return a.createElement("div",{className:"flex h-90v justify-center items-center"},a.createElement(c.Z,{type:"Puff",color:"#961adb7a",height:100,width:100,timeout:1e4}))},r.renderError=function(){if(this.state.error)return a.createElement("div",{className:"flex flex-wrap h-90v"},a.createElement("div",{className:"flex items-end md:items-center justify-end w-full md:w-1/2"},a.createElement("picture",{className:"flex justify-center md:justify-end px-8"},a.createElement("source",{srcSet:"error.webp",type:"image/webp"}),a.createElement("img",{src:"error.webp",className:"w-1/2",alt:"error_image"}))),a.createElement("div",{className:"flex flex-col items-center justify-center w-full md:w-1/2 text-white p-4 text-4xl"},a.createElement("p",{className:"w-full text-red-500"},this.state.errorMsg),a.createElement("p",{className:"w-full text-xl"},"Ah Snap! Something was broken. We're trying to fix this")))},r.render=function(){return a.createElement(i.Z,null,a.createElement(o.Z,{title:"PAGE TITLE GOES HERE"}),this.renderLoader(),this.renderError(),this.state.wait||this.state.error?"":a.createElement(u,{data:this.state.data}))},t}(a.Component);t.Z=m},2898:function(e,t,r){r.r(t);var n=r(4578),a=r(2982),s=r(7294),l=r(7677),i=r(7524),c=r(2510),o=r(4471),u=r(6948),m=r(8933),d=r(1528),h=r(7330),p=function(e){return(0,a.Z)(Array(e).keys())},f=function(){return s.createElement(u.t,{modules:[m.tl,m.pt],pagination:{dynamicBullets:!0,clickable:!0},loop:!0,autoplay:{delay:8e3,disableOnInteraction:!1},spaceBetween:0,slidesPerView:1},h.map((function(e,t){return s.createElement(u.o,{key:t},s.createElement("div",{key:t},s.createElement("img",{src:e.image_url,alt:e.event,className:"w-screen h-80v object-cover"})))})))},g=function(e){var t=e.project;return s.createElement("div",{class:"max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto"},s.createElement("img",{class:"rounded-t-lg",src:t.cover_webp_url,alt:""}),s.createElement("div",{class:"p-5"},s.createElement("h5",{class:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},t.name),s.createElement("p",{class:"mb-3 font-normal text-gray-700 dark:text-gray-400"},t.description.slice(0,130)+"..."),s.createElement("div",{className:"flex space-x-4 text-sm justify-between items-center py-4 mx-2"},s.createElement("p",{className:"text-white leading-none"},t.domain),s.createElement("p",{className:"text-white"},t.year)),s.createElement("button",{className:"flex w-full items-center justify-center rounded-md border border-transparent btn-gradient text-base font-medium text-white hover:scale-105 p-2"},"Read More",s.createElement("svg",{"aria-hidden":"true",class:"ml-2 -mr-1 w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},s.createElement("path",{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"})))))},v=function(e){var t={"Augmented Reality":["Augmented Reality"],"Machine Learning":["Machine Learning"],"Embedded System":["Embedded System"],"App Development":["App Development"],"Internet of Things":["Internet of Things"],"Web Development":["Web Development"],"All Categories":["Augmented Reality","Machine Learning","Embedded System","App Development","Internet of Things","Web Development"]},r=Object.keys(t),n=(0,s.useState)("All Categories"),a=n[0],l=n[1],i=(0,s.useState)(0),c=i[0],u=i[1],m=(0,s.useState)(e.data),d=m[0],h=m[1],v=(0,s.useState)(p(Math.floor(e.data.length/6))),E=v[0],x=v[1];return(0,s.useEffect)((function(){var r=e.data.filter((function(e){return t[a].includes(e.domain)}));h((function(){return r})),u((function(){return 0})),x((function(){return p(Math.floor(r.length/6))}))}),[a]),s.createElement(s.Fragment,null,s.createElement(f,null),s.createElement(o.Z,{filter_keys:r,displayChoice:a,setDisplayChoice:l}),s.createElement("div",{className:"flex flex-wrap justify-center mx-4 lg:mx-8 xl:mx-12 2xl:mx-16 "},d.slice(6*parseInt(c),6*(parseInt(c)+1)).map((function(e){return s.createElement("div",{className:"flex w-full lg:w-1/2 xl:w-1/3 p-4 mx-auto",key:e.id},s.createElement(g,{project:e,className:""}))}))),s.createElement("div",{className:"flex justify-center w-full"},E.map((function(e){return s.createElement("div",{className:"w-max mx-1"},s.createElement("button",{className:"p-3 text-white hover:bg-violet-900 rounded-md "+(e==c?"btn-gradient":"bg-grey-800"),"data-page":e,onClick:function(e){return u(parseInt(e.target.getAttribute("data-page")))}},parseInt(e)+1))}))))},E=function(e){function t(){var t;return(t=e.call(this)||this).state.url=d.u2,t}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this.state.data.sort((function(e,t){return e.year<t.year}));return this.state.data=e,s.createElement(i.Z,null,s.createElement(c.Z,{title:"Projects"}),this.renderLoader(),this.renderError(),this.state.wait||this.state.error?"":s.createElement(v,{data:this.state.data}))},t}(l.Z);t.default=E},4471:function(e,t,r){var n=r(7294),a=r(7606),s=r(8014);function l(){return{width:window.innerWidth}}var i=function(e){var t,r,i,c=e.filter_keys,o=e.displayChoice,u=e.setDisplayChoice,m=e.visibleChoices,d=(0,n.useState)(Math.min(m,c.length)),h=d[0],p=d[1],f=(0,n.useState)(!0),g=f[0],v=f[1],E=(t=(0,n.useState)(l()),r=t[0],i=t[1],(0,n.useEffect)((function(){function e(){i(l())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),r).width,x=(0,n.useRef)();(0,n.useEffect)((function(){var e=function(e){g||!x.current||x.current.contains(e.target)||v(!0)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[g]),(0,n.useEffect)((function(){p(E<768?2:Math.min(m,c.length))}),[E,m,c]);var w=c.slice(h);return n.createElement("div",{className:"flex fixed bottom-0 justify-center w-full md:mb-10 md:relative z-30 "},n.createElement("div",{className:"flex flex-row w-full md:w-auto flex-wrap"},c.slice(0,h).map((function(e,t){return n.createElement("button",{className:"px-4 md:px-6 py-2 text-white transition-all duration-300 hover:bg-gray-600 outline-0 grow md:grow-0 border border-transparent hover:scale-105 "+(o===e?"btn-gradient ":"filter-button ")+(0===t?"md:rounded-l-full ":"border-x-2 -ml-2 ")+(t===h-1&&0===w.length?"md:rounded-r-full md:border-r-0 ":""),onClick:function(){u((function(){return e}))},key:t},e)})),w.length>0?n.createElement("div",{ref:x},n.createElement("button",{className:"p-2 text-white md:rounded-r-full transition-all duration-300 hover:bg-gray-600 outline-0 outline-0 border border-transparent hover:scale-105 "+(w.includes(o)?"btn-gradient ":"filter-button "),onClick:function(){return v((function(e){return!e}))}},"Show More",n.createElement("span",{className:"px-2"},n.createElement(a.G,{icon:s.ptq,className:"hidden lg:inline-block"}),n.createElement(a.G,{icon:s.mTx,className:"lg:hidden"}))),n.createElement("div",{className:"z-50 absolute overflow-hidden -top-36 lg:top-auto"+(g?" max-h-0":" max-h-96")},n.createElement("ul",{className:" bg-violet-600 p-2 "},w.map((function(e){return n.createElement("li",{key:e},n.createElement("button",{"data-choice":e,onClick:function(e){return u(e.target.getAttribute("data-choice"))},className:" hover:scale-105 p-2 text-white"},e))}))))):""))};i.defaultProps={visibleChoices:2},t.Z=i},7330:function(e){e.exports=JSON.parse('[{"image_url":"https://source.unsplash.com/2ShvY8Lf6l0/800x599","thumb_image_url":"https://source.unsplash.com/2ShvY8Lf6l0/800x599","width":4,"height":3,"event":"Spec Event"},{"image_url":"https://source.unsplash.com/Dm-qxdynoEc/800x799","thumb_image_url":"https://source.unsplash.com/Dm-qxdynoEc/800x799","event":"Spec Event","width":1,"height":1},{"image_url":"https://source.unsplash.com/qDkso9nvCg0/600x799","thumb_image_url":"https://source.unsplash.com/qDkso9nvCg0/600x799","width":3,"height":4,"event":"Spec Event"},{"image_url":"https://source.unsplash.com/iecJiKe_RNg/600x799","thumb_image_url":"https://source.unsplash.com/iecJiKe_RNg/600x799","width":3,"height":4,"event":"Spec Event"},{"image_url":"https://source.unsplash.com/epcsn8Ed8kY/600x799","thumb_image_url":"https://source.unsplash.com/epcsn8Ed8kY/600x799","width":3,"height":4,"event":"Spec Event"},{"image_url":"https://source.unsplash.com/NQSWvyVRIJk/800x599","thumb_image_url":"https://source.unsplash.com/NQSWvyVRIJk/800x599","width":4,"height":3,"event":"Spec Event"},{"image_url":"https://source.unsplash.com/zh7GEuORbUw/600x799","thumb_image_url":"https://source.unsplash.com/zh7GEuORbUw/600x799","width":3,"height":4,"event":"Spec Event"},{"image_url":"https://source.unsplash.com/PpOHJezOalU/800x599","thumb_image_url":"https://source.unsplash.com/PpOHJezOalU/800x599","width":4,"height":3,"event":"Spec Event"},{"image_url":"https://source.unsplash.com/I1ASdgphUH4/800x599","thumb_image_url":"https://source.unsplash.com/I1ASdgphUH4/800x599","width":4,"height":3,"event":"Spec Event"}]')}}]);
//# sourceMappingURL=component---src-pages-project-index-js-64f8d75a6160c953bf8a.js.map
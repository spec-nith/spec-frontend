"use strict";(self.webpackChunkspec=self.webpackChunkspec||[]).push([[749],{7677:function(e,t,n){var r=n(4578),a=n(7294),l=n(6633),s=n.n(l),i=n(7524),c=n(4280),u=n(2510),o=function(e){return a.createElement(a.Fragment,null)},m=function(e){function t(){var t;return(t=e.call(this)||this).state={wait:!0,data:[],error:!1,errorData:[],url:""},t}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;s().get(this.state.url,{timeout:1e4}).then((function(t){e.setState({data:t.data,wait:!1})})).catch((function(t){console.log(t.response);var n="Request Timed Out";t.response&&(n=t.response.status&&t.response.statusText?"API Error: "+t.response.status+" "+t.response.statusText:"API request failed"),e.setState({error:!0,errorMsg:n,wait:!1})}))},n.renderLoader=function(){if(this.state.wait)return a.createElement("div",{className:"flex h-90v justify-center items-center"},a.createElement(c.Z,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:1e4}))},n.renderError=function(){if(this.state.error)return a.createElement("div",{className:"flex flex-wrap h-90v"},a.createElement("div",{className:"flex items-end md:items-center justify-end w-full md:w-1/2"},a.createElement("picture",{className:"flex justify-center md:justify-end px-8"},a.createElement("source",{srcSet:"error.webp",type:"image/webp"}),a.createElement("img",{src:"error.webp",className:"w-1/2",alt:"error_image"}))),a.createElement("div",{className:"flex flex-col items-center justify-center w-full md:w-1/2 text-white p-4 text-4xl"},a.createElement("p",{className:"w-full text-red-500"},this.state.errorMsg),a.createElement("p",{className:"w-full text-xl"},"Ah Snap! Something was broken. We're trying to fix this")))},n.render=function(){return a.createElement(i.Z,null,a.createElement(u.Z,{title:"PAGE TITLE GOES HERE"}),this.renderLoader(),this.renderError(),this.state.wait||this.state.error?"":a.createElement(o,{data:this.state.data}))},t}(a.Component);t.Z=m},2898:function(e,t,n){n.r(t);var r=n(4578),a=n(2982),l=n(7294),s=n(7677),i=n(7524),c=n(2510),u=n(4471),o=n(6948),m=n(8933),d=n(1528),h=n(7330),p=function(e){return(0,a.Z)(Array(e).keys())},f=function(){return l.createElement(o.t,{modules:[m.tl,m.pt],pagination:{dynamicBullets:!0,clickable:!0},loop:!0,autoplay:{delay:8e3,disableOnInteraction:!1},spaceBetween:0,slidesPerView:1},h.map((function(e,t){return l.createElement(o.o,{key:t},l.createElement("div",{key:t},l.createElement("img",{src:e.image_url,alt:e.event,className:"w-screen h-80v object-cover"})))})))},g=function(e){var t=e.project;return l.createElement("div",{className:"max-w-sm w-full lg:max-w-full lg:flex"},l.createElement("div",{className:"h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden",style:{backgroundImage:"url("+t.cover_webp_url+")"},title:"Woman holding a mug"}),l.createElement("div",{className:"border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"},l.createElement("div",{className:"mb-8"},l.createElement("div",{className:"text-gray-900 font-bold text-xl mb-2"},t.name),l.createElement("p",{className:"text-gray-700 text-base"},t.description.slice(0,130)+"...")),l.createElement("div",{className:"flex items-center"},l.createElement("div",{className:"text-sm"},l.createElement("p",{className:"text-gray-900 leading-none"},t.domain),l.createElement("p",{className:"text-gray-600"},t.year)))))},v=function(e){var t={"Augmented Reality":["Augmented Reality"],"Machine Learning":["Machine Learning"],"Embedded System":["Embedded System"],"App Development":["App Development"],"Internet of Things":["Internet of Things"],"Web Development":["Web Development"],"All Categories":["Augmented Reality","Machine Learning","Embedded System","App Development","Internet of Things","Web Development"]},n=Object.keys(t),r=(0,l.useState)("All Categories"),a=r[0],s=r[1],i=(0,l.useState)(0),c=i[0],o=i[1],m=(0,l.useState)(e.data),d=m[0],h=m[1],v=(0,l.useState)(p(Math.floor(e.data.length/6))),E=v[0],x=v[1];return(0,l.useEffect)((function(){var n=e.data.filter((function(e){return t[a].includes(e.domain)}));h((function(){return n})),o((function(){return 0})),x((function(){return p(Math.floor(n.length/6))}))}),[a]),l.createElement(l.Fragment,null,l.createElement(f,null),l.createElement(u.Z,{filter_keys:n,displayChoice:a,setDisplayChoice:s}),l.createElement("div",{className:"flex flex-wrap justify-center mx-4 lg:mx-8 xl:mx-12 2xl:mx-16"},d.slice(6*parseInt(c),6*(parseInt(c)+1)).map((function(e){return l.createElement("div",{className:"flex w-full lg:w-1/2 xl:w-1/3 p-4",key:e.id},l.createElement(g,{project:e,className:""}))}))),l.createElement("div",{className:"flex justify-center w-full"},E.map((function(e){return l.createElement("div",{className:"w-max"},l.createElement("button",{className:"p-3 bg-blue-600","data-page":e,onClick:function(e){return o(parseInt(e.target.getAttribute("data-page")))}},parseInt(e)+1))}))))},E=function(e){function t(){var t;return(t=e.call(this)||this).state.url=d.u2,t}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.state.data.sort((function(e,t){return e.year<t.year}));return this.state.data=e,l.createElement(i.Z,null,l.createElement(c.Z,{title:"Projects"}),this.renderLoader(),this.renderError(),this.state.wait||this.state.error?"":l.createElement(v,{data:this.state.data}))},t}(s.Z);t.default=E},4471:function(e,t,n){var r=n(7294),a=n(7606),l=n(8014);function s(){return{width:window.innerWidth}}var i=function(e){var t,n,i,c=e.filter_keys,u=e.displayChoice,o=e.setDisplayChoice,m=e.visibleChoices,d=(0,r.useState)(Math.min(m,c.length)),h=d[0],p=d[1],f=(0,r.useState)(!0),g=f[0],v=f[1],E=(t=(0,r.useState)(s()),n=t[0],i=t[1],(0,r.useEffect)((function(){function e(){i(s())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n).width,x=(0,r.useRef)();(0,r.useEffect)((function(){var e=function(e){g||!x.current||x.current.contains(e.target)||v(!0)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[g]),(0,r.useEffect)((function(){p(E<768?2:Math.min(m,c.length))}),[E,m,c]);var b=c.slice(h);return r.createElement("div",{className:"flex fixed bottom-0 justify-center w-full md:mb-10 md:relative z-30"},r.createElement("div",{className:"flex flex-row w-full md:w-auto flex-wrap"},c.slice(0,h).map((function(e,t){return r.createElement("button",{className:"px-4 md:px-6 py-2 text-white transition-all duration-300 hover:bg-black outline-0 grow md:grow-0 "+(u===e?"active-filter-button ":"filter-button ")+(0===t?"md:rounded-l-full ":"border-x-2 -ml-2 ")+(t===h-1&&0===b.length?"md:rounded-r-full md:border-r-0 ":""),onClick:function(){o((function(){return e}))},key:t},e)})),b.length>0?r.createElement("div",{ref:x},r.createElement("button",{className:"p-2 text-white md:rounded-r-full transition-all duration-300 hover:bg-black outline-0 "+(b.includes(u)?"active-filter-button ":"filter-button "),onClick:function(){return v((function(e){return!e}))}},"Show More",r.createElement("span",{className:"px-2"},r.createElement(a.G,{icon:l.ptq,className:"hidden lg:inline-block"}),r.createElement(a.G,{icon:l.mTx,className:"lg:hidden"}))),r.createElement("div",{className:"z-50 absolute overflow-hidden -top-36 lg:top-auto"+(g?" max-h-0":" max-h-96")},r.createElement("ul",{className:" bg-blue-600 p-2 "},b.map((function(e){return r.createElement("li",{key:e},r.createElement("button",{"data-choice":e,onClick:function(e){return o(e.target.getAttribute("data-choice"))},className:"bg-blue-600 p-2"},e))}))))):""))};i.defaultProps={visibleChoices:2},t.Z=i},7330:function(e){e.exports=JSON.parse('[{"image_url":"https://source.unsplash.com/2ShvY8Lf6l0/800x599","thumb_image_url":"https://source.unsplash.com/2ShvY8Lf6l0/800x599","width":4,"height":3,"event":"Spec Event"},{"image_url":"https://source.unsplash.com/Dm-qxdynoEc/800x799","thumb_image_url":"https://source.unsplash.com/Dm-qxdynoEc/800x799","event":"Spec Event","width":1,"height":1},{"image_url":"https://source.unsplash.com/qDkso9nvCg0/600x799","thumb_image_url":"https://source.unsplash.com/qDkso9nvCg0/600x799","width":3,"height":4,"event":"Spec Event"},{"image_url":"https://source.unsplash.com/iecJiKe_RNg/600x799","thumb_image_url":"https://source.unsplash.com/iecJiKe_RNg/600x799","width":3,"height":4,"event":"Spec Event"},{"image_url":"https://source.unsplash.com/epcsn8Ed8kY/600x799","thumb_image_url":"https://source.unsplash.com/epcsn8Ed8kY/600x799","width":3,"height":4,"event":"Spec Event"},{"image_url":"https://source.unsplash.com/NQSWvyVRIJk/800x599","thumb_image_url":"https://source.unsplash.com/NQSWvyVRIJk/800x599","width":4,"height":3,"event":"Spec Event"},{"image_url":"https://source.unsplash.com/zh7GEuORbUw/600x799","thumb_image_url":"https://source.unsplash.com/zh7GEuORbUw/600x799","width":3,"height":4,"event":"Spec Event"},{"image_url":"https://source.unsplash.com/PpOHJezOalU/800x599","thumb_image_url":"https://source.unsplash.com/PpOHJezOalU/800x599","width":4,"height":3,"event":"Spec Event"},{"image_url":"https://source.unsplash.com/I1ASdgphUH4/800x599","thumb_image_url":"https://source.unsplash.com/I1ASdgphUH4/800x599","width":4,"height":3,"event":"Spec Event"}]')}}]);
//# sourceMappingURL=component---src-pages-project-index-js-90296f475c01608e3018.js.map
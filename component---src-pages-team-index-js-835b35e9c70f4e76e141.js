"use strict";(self.webpackChunkspec=self.webpackChunkspec||[]).push([[164],{63303:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var l=a(94578),n=a(67294),r=a(77606),c=a(57190),s=a(88014);var i=function(e){return n.createElement(n.Fragment,null,n.createElement("div",{className:"overflow-hidden flex flex-col justify-center items-center w-full sticky shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 "},n.createElement("div",{className:"col-md-4 col-sm-6 col-xs-12 "},n.createElement("article",{className:"team-card Red relative h-0 mb-14 text-xl m-0 leading-6  "},n.createElement("h2",{className:"absolute left-0   w-full pt-2 pb-2"},n.createElement("span",{className:"text-xl text-white px-4 block"},e.data.name),n.createElement("strong",{className:"text-base text-gray-900 font-normal team_post px-4 block pt-1 pb-3"},"Coordinator"==e.data.title?n.createElement("a",{className:"text-white"}," ",n.createElement(r.G,{icon:s.FVb,size:"1x"})):"Executive"==e.data.title?n.createElement("a",{className:"text-white"}," ",n.createElement(r.G,{icon:s.r$M,size:"1x"})):n.createElement("a",{className:"text-white"}," ",n.createElement(r.G,{icon:s.Cv1,size:"1x"}))," ",e.data.title),n.createElement("div",{className:"team_socials"},n.createElement("div",{className:"team_icons relative -top-20 pt-3 "},n.createElement("div",null," ",e.data.github_id&&n.createElement("a",{href:e.data.github_id,target:"_blank",rel:"noreferrer noopener"}," ",n.createElement("div",{className:"text-white hover:text-black hover:opacity-50 pb-3"}," ",n.createElement(r.G,{icon:c.zhw,size:"1x"})))),e.data.linkedin_id&&n.createElement("a",{href:e.data.linkedin_id,target:"_blank",rel:"noreferrer noopener"},n.createElement("div",{className:"text-white hover:text-black hover:opacity-50"}," ",n.createElement(r.G,{icon:c.hwn,size:"1x"})))))),n.createElement("div",{className:"absolute top-0 right-0 bottom-4 left-4"},n.createElement("div",{className:"img-container overflow-hidden absolute top-0 left-0 w-full h-full"},n.createElement("img",{src:e.data.profile_pic_url,alt:e.data.name}))),n.createElement("div",null,n.createElement("a",{className:"block relative float-left w-20 h-20"}),n.createElement("a",{className:"block relative float-left w-20 h-20"}),n.createElement("a",{className:"block relative float-left w-20 h-20"}),n.createElement("a",{className:"block relative float-left w-20 h-20"}))))))},m=a(14910),o=a(96837),d=a(96633),u=a.n(d),p=a(14280),x=["President","Vice President","Technical Lead","Web Development Head","Public Relation Head","Finance Head"],E=["Final Year","Coordinator","Executive","Volunteer"],f=["Coordinator","Executive","Volunteer"],h=function(e){function t(){var t;return(t=e.call(this)||this).Selected_Post=function(e){t.setState({selected_post:e.target.value})},t.state={error:!1,wait:!0,data:[]},t}(0,l.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;u().get(m.dn).then((function(t){e.setState({data:t.data.sort((function(e,t){return e.name.localeCompare(t.name)})),wait:!1})})).catch((function(t){console.log(t),e.setState({error:!0})}))},a.render=function(){var e=this;return this.state.wait?n.createElement(o.Z,null,n.createElement("div",{className:"flex h-90v justify-center items-center"},n.createElement(p.Z,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:1e5}))):n.createElement(o.Z,null,n.createElement("div",{className:"min-h-90v"},n.createElement("div",{className:"flex justify-end mt-5"},n.createElement("span",{className:"mt-16 p-3 rounded-lg "}," ",n.createElement(r.G,{icon:s.G_j,size:"1x"})),n.createElement("select",{onChange:this.Selected_Post,className:"mt-16 mr-10 h-10 rounded-lg posts"},n.createElement("option",{value:" ",className:"team_post_option p-10"},"Team Spec"),E.map((function(e){return n.createElement("option",{value:e,className:"team_post_option p-10"},e)})))),"Final Year"===this.state.selected_post?n.createElement(n.Fragment,null," ",n.createElement("div",null,this.state.data.find((function(e){return x.includes(e.title)}))?n.createElement("h1",{className:"team_years text-white text-3xl text-center m-3"},this.state.selected_post+" Members"):null,n.createElement("section",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 pb-12 flex justify-evenly"},n.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"},x.map((function(t){return n.createElement(n.Fragment,null,e.state.data.map((function(e,a){return e.title===t&&n.createElement(i,{data:e,key:e.id})})))})))))):f.includes(this.state.selected_post)?n.createElement(n.Fragment,null,n.createElement("div",null,n.createElement("h1",{className:"team_years text-white text-center text-3xl m-3"},this.state.selected_post+"s"),n.createElement("section",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 pb-12 flex justify-center"},n.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"},this.state.data.map((function(t,a){return t.title===e.state.selected_post&&n.createElement(i,{data:t,key:t.id})})))))):n.createElement(n.Fragment,null,n.createElement("div",null,this.state.data.find((function(e){return x.includes(e.title)}))?n.createElement("h1",{className:"team_years text-white text-3xl text-center m-3"},"Final Year Members"):null,n.createElement("section",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 pb-12 flex justify-evenly"},n.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"},x.map((function(t){return n.createElement(n.Fragment,null,e.state.data.map((function(e,a){return e.title===t&&n.createElement(i,{data:e,key:e.id})})))}))))),n.createElement("div",null,f.map((function(t){return n.createElement("div",null,e.state.data.find((function(e){return e.title===t}))?n.createElement("h1",{className:"team_years text-white text-center text-3xl m-3"},t+"s"):null,n.createElement("h1",{className:"team_years"}),n.createElement("section",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 pb-12 flex justify-center"},n.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"},e.state.data.map((function(e,a){return e.title===t&&n.createElement(i,{data:e,key:e.id})})))))}))))," "))},t}(n.Component)}}]);
//# sourceMappingURL=component---src-pages-team-index-js-835b35e9c70f4e76e141.js.map
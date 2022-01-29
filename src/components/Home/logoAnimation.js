import React, { useEffect } from "react";
import anime from "assets/utils/anime.es";
import 'assets/styles/animations.css';

 const Bg=()=>{
     useEffect(()=>{
        anime.timeline({loop: false})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .vertical-line',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 1000,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 1500,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 1500,
    offset: '-=600'
  });
     },[])
     return (<section className="h-full">
         <h1 className="relative text-white text-4xl pl-4 md:pl-0 md:text-5xl lg:text-6xl ml5 top-1/2 md:left-32">
             <span>
                 <span className="line line1"></span>
                 <div className="inline-block letters-left">
                     <div>Society for</div>
                     <div>Promotion of</div>
                     <div>Electronics</div>
                     <div>Culture</div>
                 </div>
                 <div className="inline-block items-center vertical-line h-40 md:h-64">
                     <div className="w-[2px] h-full mt-1 md:mt-4 bg-white mx-auto"></div>
                 </div>
                 <div className="inline-block letters-right">
                     <div>Search</div>
                     <div>Plan</div>
                     <div>Engage</div>
                     <div>Create</div>
                 </div>
                 <span className="line line2"></span>
             </span>
         </h1>
     </section>
    )
 }
 export default Bg;
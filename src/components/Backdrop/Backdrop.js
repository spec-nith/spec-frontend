import React from 'react';
const backdrop=(props)=>(
   props.show?<div className="w-screen h-screen fixed z-[100] left-0 top-0 bg-black/70 " onClick={props.clicked}></div>:null
);
export default backdrop;
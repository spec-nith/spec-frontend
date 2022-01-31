import React from "react";
import Animation from "./logoAnimation";

const Hero = () => {
  return (
    <div className="h-screen relative pb-20 overflow-hidden">
      <video
        className="h-screen absolute w-screen object-cover z-10"
        autoPlay
        loop
        muted
        poster="/images/bg2.png"
      >
        <source src="/bgvideo.m4v" type="video/mp4" />
      </video>
      <Animation />
    </div>
  );
};
export default Hero;

import React from 'react';
import { carouselData } from "assets/data/CarouselImages";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'assets/styles/Carousel2.css'

const AboutCard = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  // const slider= (
  //   <AutoplaySlider
  //      play={true}
  //     cancelOnInteraction={true} 
  //     interval={5000}
  //     organicArrows={false}
  //   >
  //    {carouselData.map(element=>(
  //      <div className="bg-transparent h-full">
  //        <img className="" src={element} alt="carousel"/>
  //      </div>
  //    ))}
  //   </AutoplaySlider>
  // )
   const slider=<div className="carouselBody">

   <div className="slider">
   <div className="slide-track">
   {carouselData.map(element=>(
     <div className="slide">
         <img className="h-full" src={element} alt="carousel"/>
       </div>
     ))}
   </div>
 </div>
     </div>
    return (
      <React.Fragment>
      <div className="font-monty flex flex-col lg:grid lg:grid-cols-6 lg:grid-rows-6 max-w-full ">
        <div className="lg:col-start-3 lg:col-span-4  lg:row-start-1 row-end-6 bg-white">
          <h1 className="z-10 text-5xl py-8 text-black font-abrilface text-center" id="head">WHO WE ARE?</h1>
        </div>
        {/* <div className="lg:col-start-4 lg:col-span-3 row-start-1 row-end-3 bg-white">
          <h1 className="z-10 text-5xl py-8 text-black font-abrilface text-center" id="head">WHO WE ARE?</h1>
        </div> */}
        <div className="lg:col-start-5 lg:col-span-2 lg:row-start-2 row-end-6 bg-white text-gray-700 z-1 px-8 pb-10">
          <span className="mt-0 text-justify">
            SPEC is being run under the aegis of the Electronics and Communication Department, NIT Hamirpur. We at SPEC, organize various events, workshops, and competitions to pique the scientific temperament of the students. The society is reputed for conducting a national level hackathon: ELECTROTHON, one of the most ingenious and diverse hackathon. ELECTROTHON has been a budding ground to many mind-boggling ideas and inventions, a platform for the upcoming innovators and bold entrepreneurs. The event is majorly manifested by guest-talks, project exhibitions and a 48 hour grinding hackathon. It also conducts its yearly technical fest, SPEC FEST covering advancements and marvels of the tech world, along with a display of year-long projects. Comprising events, workshops and exhibitions that provide diverse opportunities for students to enlighten their inquisitive minds.
          </span>
        </div>
        <div className="lg:col-start-1 lg:row-start-2 lg:row-end-7 lg:col-span-4 z-1">
          {slider}
        </div>
      </div>
      </React.Fragment>
    )
};
export default AboutCard;
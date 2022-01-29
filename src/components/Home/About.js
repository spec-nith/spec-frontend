import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

// Import Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import/Define Constants
const data = [
  "images/p2_01.jpg",
  "images/s331.jpg",
  "images/team1.jpg",
  "images/team22.jpg",
  "images/team12.jpg",
  "images/team1.jpg",
];
const writeup = <p className="mt-4 text-justify lg:col-span-3"><span className="text-yellow-400">SPEC</span> is being run under the aegis of the Electronics and Communication Department, NIT Hamirpur. We at <span className="text-yellow-400">SPEC</span>, organize various events, workshops, and competitions to pique the scientific temperament of the students. The society is reputed for conducting a national level hackathon: <span className="text-yellow-400">ELECTROTHON</span>, one of the most ingenious and diverse hackathon. <span className="text-yellow-400">ELECTROTHON</span> has been a budding ground to many mind-boggling ideas and inventions, a platform for the upcoming innovators and bold entrepreneurs. It also conducts its yearly technical fest, <span className="text-yellow-400">SPEC-FEST</span> covering advancements and marvels of the tech world, along with a display of year-long projects."</p>

const About = () => {
  return (
    <React.Fragment>
      <div className="font-monty max-w-5xl lg:max-w-full h-full relative">
        <div className="top-8 w-full shadow lg:backdrop-filter lg:backdrop-blur-lg section-content">
        <div className="relative md:left-2/3 left-3 pr-8 pl-2 pb-6 md:w-1/3 text-gray-300 text-md lg:text-xl lg:text-base leading-loose lg:leading:normal">
            {writeup}
          </div>
        </div>
        <div className="md:absolute z-10 md:left-6 mt-8 md:mt-0 md:w-10/16 md:-top-0">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              pagination={{ dynamicBullets: true, clickable: true }}
              navigation={true}
              loop={true}
              autoplay={{ delay: 2500 }}
              spaceBetween={0}
              slidesPerView={1}
            >
              {data.map((image, index) => {
                return (
                  <SwiperSlide key={index+Math.random()}>
                    <img src={image} className="" alt="carousel img" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
        </div>
      </div>
    </React.Fragment>
  );
};
export default About;
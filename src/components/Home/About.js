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
const writeup = "SPEC is being run under the aegis of the Electronics and Communication Department, NIT Hamirpur. We at SPEC, organize various events, workshops, and competitions to pique the scientific temperament of the students. The society is reputed for conducting a national level hackathon: ELECTROTHON, one of the most ingenious and diverse hackathon. ELECTROTHON has been a budding ground to many mind-boggling ideas and inventions, a platform for the upcoming innovators and bold entrepreneurs. It also conducts its yearly technical fest, SPEC FEST covering advancements and marvels of the tech world, along with a display of year-long projects."

const About = () => {
  return (
    <React.Fragment>
      <div className="font-monty flex flex-col lg:grid lg:grid-cols-8 lg:grid-rows-6 max-w-full lg:scale-110">
        <div className="lg:col-start-3 lg:col-span-6  lg:row-start-1 row-end-6 bg-white">
          <h1
            className="z-10 text-5xl py-8 text-black font-abrilface text-center"
            id="head"
          >
            WHO WE ARE?
          </h1>
        </div>
        {/* <div className="lg:col-start-4 lg:col-span-3 row-start-1 row-end-3 bg-white">
          <h1 className="z-10 text-5xl py-8 text-black font-abrilface text-center" id="head">WHO WE ARE?</h1>
        </div> */}
        <div className="lg:col-start-5 lg:col-span-4 lg:row-start-2 row-end-6 bg-white text-gray-700 z-1 px-8 pb-10">
          <p className="mt-2 text-justify lg:col-span-3">
            {writeup}
          </p>
        </div>
        <div className="lg:col-start-1 lg:row-start-2 lg:row-end-7 lg:col-span-4 z-1">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            pagination={{ dynamicBullets: true, clickable: true }}
            navigation={true}
            autoplay={{ delay: 2500 }}
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {data.map((image, index) => {
              return (
                <SwiperSlide>
                  <img src={image} key={index} className="" />
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
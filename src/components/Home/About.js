import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

// Import Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import/Define Constants
const data = [
  "/images/carousel/p2_01.jpg",
  "/images/carousel/s331.jpg",
  "/images/carousel/team1.jpg",
  "/images/carousel/team22.jpg",
  "/images/carousel/team12.jpg",
  "/images/carousel/team1.jpg",
];
const writeup = <p className="text-justify lg:col-span-3"><span className="text-yellow-400">SPEC</span> is being run under the aegis of the Electronics and Communication Department, NIT Hamirpur. We at <span className="text-yellow-400">SPEC</span>, organize various events, workshops, and competitions to pique the scientific temperament of the students. The society is reputed for conducting a national level hackathon: <span className="text-yellow-400">ELECTROTHON</span>, one of the most ingenious and diverse hackathon. It also conducts its yearly technical fest, <span className="text-yellow-400">SPEC-FEST</span> covering advancements and marvels of the tech world."</p>

const About = () => {
  return (
    <React.Fragment>
      <div className="font-monty max-w-5xl lg:max-w-full h-full relative">
        <div className="top-8 w-full shadow lg:backdrop-filter lg:backdrop-blur-lg section-content relative">
        <div className="relative lg:left-2/3 left-3 pr-8 pl-2 pb-6 lg:w-1/3 text-gray-300 text-md md:text-xl lg:text-base leading-loose md:leading:normal">
            <div className="mx-auto p-6 text-center">
              <h1 className="text-5xl font-outfit">Who <span className="text-rose-500">WE</span> are</h1>
            <div className="mx-auto pt-3 border-b-2 w-4/5 border-yellow-500 opacity-25"></div>
            </div>
            {writeup}
        </div>
        <div className="lg:absolute w-2/3 flex justify-center bottom-8 space-x-2 md:space-x-4">
        <a href="https://www.facebook.com/spec.ece/"
          rel="noreferrer noopenor"
          target="_blank" className="text-xs flex items-center justify-center rounded-full w-12 h-12 hover:bg-gray-200 hover:text-black">
          <FontAwesomeIcon icon={faFacebookF} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/s-p-e-c-nith-40214b197/"
          rel="noreferrer noopenor"
          target="_blank" className="text-xs flex items-center justify-center rounded-full w-12 h-12 hover:bg-gray-200 hover:text-black">
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
        <a href="https://twitter.com/SPEC__NITH"
          rel="noreferrer noopenor"
          target="_blank" className="text-xs flex items-center justify-center rounded-full w-12 h-12 hover:bg-gray-200 hover:text-black">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://instagram.com/s.p.e.c_nith?utm_source=ig_profile_share&amp;igshid=1dd01jvv7xk83"
          rel="noreferrer noopenor"
          target="_blank" className="text-xs flex items-center justify-center rounded-full w-12 h-12 hover:bg-gray-200 hover:text-black">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
        </div>
        <div className="lg:absolute z-10 lg:left-6 mt-8 lg:mt-0 lg:w-10/16 lg:-top-0">
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
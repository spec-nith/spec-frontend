//Components
import * as React from "react";
import Head from "utils/helmet";
import Layout from "components/Layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay,EffectCards } from "swiper";
import axios from "axios";
import Hero from "components/HomePage/Hero";
//Styles and Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "./animations.css";


// Constants, JSONs and Assests
import { projectURL } from "utils/routes";
const visionData = require("./VisionData.json");
const projects = require("./ProjectData.json");

const data = [
  "/images/carousel/p2_01.jpg",
  "/images/carousel/s331.jpg",
  "/images/carousel/team1.jpg",
  "/images/carousel/team22.jpg",
  "/images/carousel/team12.jpg",
  "/images/carousel/team1.jpg",
];
const writeup = (
  <p className="text-justify lg:col-span-3">
    <span className="text-yellow-400">SPEC</span> is being run under the aegis
    of the Electronics and Communication Department, NIT Hamirpur. We at{" "}
    <span className="text-yellow-400">SPEC</span>, organize various events,
    workshops, and competitions to pique the scientific temperament of the
    students. The society is reputed for conducting a national level hackathon:{" "}
    <span className="text-yellow-400">ELECTROTHON</span>, one of the most
    ingenious and diverse hackathon. It also conducts its yearly technical fest,{" "}
    <span className="text-yellow-400">SPEC-FEST</span> covering advancements and
    marvels of the tech world."
  </p>
);

// const Hero = () => {
//   return (
//     <div className="h-screen relative pb-20 overflow-hidden">
//       <video
//         className="h-screen absolute w-screen object-cover z-10"
//         autoPlay
//         loop
//         muted
//         poster="/images/bg2.png"
//       >
//         <source src="/bgvideo.m4v" type="video/mp4" />
//       </video>
//     </div>
//   );
// };

const About = () => {
  return (
    <React.Fragment>
      <div className="font-monty max-w-5xl xl:max-w-full h-full relative">
        <div className="top-8 w-full shadow test-bg relative">
          <div className="relative xl:left-2/3 left-3 pr-8 pl-6 pb-3 xl:w-1/3 text-gray-300 text-md md:text-xl xl:text-base leading-loose md:leading:normal">
            <div className="mx-auto p-6 text-center">
              <h1 className="text-5xl font-outfit text-white">
                Who <span className="">WE</span> are
              </h1>
              <div className="mx-auto pt-3 border-b-2 w-4/5 border-yellow-500 opacity-25"></div>
            </div>
            {writeup}
          </div>
          <div className="xl:w-2/3 flex justify-center pb-4 space-x-2 md:space-x-4 text-white">
            <a
              href="https://www.facebook.com/spec.ece/"
              rel="noreferrer noopenor"
              target="_blank"
              className="text-xs flex items-center justify-center rounded-full w-12 h-12 hover:bg-gray-200 hover:text-black"
            >
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/s-p-e-c-nith-40214b197/"
              rel="noreferrer noopenor"
              target="_blank"
              className="text-xs flex items-center justify-center rounded-full w-12 h-12 hover:bg-gray-200 hover:text-black"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </a>
            <a
              href="https://twitter.com/SPEC__NITH"
              rel="noreferrer noopenor"
              target="_blank"
              className="text-xs flex items-center justify-center rounded-full w-12 h-12 hover:bg-gray-200 hover:text-black"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://instagram.com/s.p.e.c_nith?utm_source=ig_profile_share&amp;igshid=1dd01jvv7xk83"
              rel="noreferrer noopenor"
              target="_blank"
              className="text-xs flex items-center justify-center rounded-full w-12 h-12 hover:bg-gray-200 hover:text-black"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
        <div className="w-full flex justify-center items-center xl:absolute z-10 xl:left-3 md:pl-6 lg:pl-16 pt-12 md:pt-20 xl:w-10/16 xl:-top-10">
        <div className="w-full md:w-4/5">
          <Swiper
            modules={[Pagination,EffectCards,Autoplay]}
            pagination={{ dynamicBullets: true, clickable: true }}
            loop={true}
            autoplay={{ delay: 3500 }}
            spaceBetween={0}
            slidesPerView={1}
            effect={"cards"}
          >
            {data.map((image, index) => {
              return (
                <SwiperSlide key={index + Math.random()}>
                  <img src={image} className="" alt="carousel img" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      </div>
    </React.Fragment>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="text-gray-200 text-center max-w-sm px-4 test-bg pb-6 px-3 rounded-3xl shadow-lg">
      <h4 className="pt-4 px-4 text-xl font-semibold uppercase leading-tight truncate">
        {project.title}
      </h4>
      <div className="mx-auto pt-3 border-b-2 w-4/5 border-yellow-500 opacity-25"></div>
      <div className="mt-4 pb-2 relative">
        <span className="text-md px-2 md:px-4 mb-8 block font-semibold">
          {project.content}
        </span>
        {/* <span className="p-2 px-4 border-2 border-gray-500 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black">
              Explore
            </span> */}
        {/* <img className={"h-36 absolute "+(project.class)} src={project.image} alt="project-vector"/>           */}
        <picture>
          <source srcSet={project.webp} type="image/webp" />
          <img
            className={"h-32 absolute " + project.class}
            src={project.image}
            alt="project-vector"
          />
        </picture>
      </div>
    </div>
  );
};

// const VisionCard = ({ vision }) => {
//   return (
//     <div className="flex items-center h-auto w-full flex-wrap lg:flex-nowrap mx-auto my-20 lg:my-10 text-black">
//       <div className="w-full lg:w-4/5 h-full lg:h-96 rounded-lg shadow-2xl bg-gray-300 mx-6 lg:mx-0">
//         <div className="p-4 lg:p-12 md:p-8 text-center lg:text-left">
//           <div
//             className="block lg:hidden rounded-full shadow-xl mx-auto mt-16 md:mt-4 h-48 w-48 bg-cover bg-center"
//             style={{ backgroundImage: `url(${vision.image})` }}
//           ></div>
//           <h1 className="text-3xl font-bold pt-8 text-center lg:pt-0 md:whitespace-nowrap">
//             {vision.name}
//           </h1>
//           <div className="mx-auto lg:mx-0 pt-3 border-b-2 border-green-500 opacity-50"></div>
//           <div className="flex items-center justify-center lg:justify-start px-8">
//             <div className="pt-4">
//               <FontAwesomeIcon icon={faBriefcase} />
//             </div>
//             <div className="pt-4 pl-2">
//               <p className="text-base font-bold">{vision.post}</p>
//             </div>
//           </div>
//           <p className="leading-loose md:py-3 lg:py-6 lg:px-8 text-md text-justify">
//             {vision.content}
//           </p>
//         </div>
//       </div>
//       <div className="w-full lg:w-2/5">
//         {/* <img
//           src={vision.image}
//           alt="pic"
//           className="rounded-none object-cover h-80 lg:rounded-lg shadow-2xl hidden lg:block"
//         /> */}
//         <picture className="">
//           <source srcSet={vision.webp} type="image/webp" />
//           <img
//             src={vision.image}
//             className="rounded-none object-cover h-full lg:rounded-lg shadow-2xl hidden lg:block"
//             alt="Electrothon Logo"
//           />
//         </picture>
//       </div>
//     </div>
//   );
// };

const VisionCard2 = ({ vision }) => {
  return (
  <div className="h-auto flex flex-col lg:flex-row bg-transparent">
    <div className="lg:w-2/5 w-full h-full">
      <picture className="flex items-center justify-center">
        <source srcSet={vision.webp} type="image/webp" />
        <img
          src={vision.image}
          className="rounded-none object-cover lg:rounded-lg shadow-2xl block h-[14rem] w-[14rem] md:h-[18rem] md:w-[18rem] lg:h-[25rem] lg:w-[25rem]"
          alt="vision-photo"
        />
      </picture>
    </div>
    <div className="lg:w-4/5 h-full text-white lg:leading-loose md:py-3 lg:mt-10 lg:py-6 p-10 lg:px-8 text-lg lg:text-xl text-center">
     <p> {vision.content}</p>
    </div>
  </div>
  )}
class Home extends React.Component {
  state = {
    data: [],
    pathName: this.props.location.pathname.split("/").pop(),
  };
  componentDidMount() {
    axios
      .get(projectURL)
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const slider2 = (
      <Swiper
        modules={[Pagination,Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 4000 }}
        spaceBetween={0}
        slidesPerView={1}
      >
        {visionData.map((element, index) => {
          return (
            <SwiperSlide key={index + Math.random()}>
              <VisionCard2 vision={element} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
    return (
      <>
        <Head title="Home" />
        <Layout curLocation={this.state.pathName}>
        <Hero />
        <div className="shade top-[63rem] left-[68rem] w-[80rem] h-[80rem]"></div>
          <div className="relative">
            <div className="mt-24">
              <div className="max-w-7xl mx-auto pt-6 sm:px-6 lg:px-8">
                <About />
              </div>
            </div>
            <div className="mt-40 relative">
              <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-outfit text-center text-white">
                  What <span className="">WE</span> do?
                </h1>
              </div>
              <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex justify-center">
                <div className="px-4 py-6 sm:px-0 rounded-lg h-auto grid gap-x-12 lg:gap-x-24 gap-y-36 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
                  {projects.map((element, index) => (
                    <ProjectCard
                      key={index + Math.random()}
                      project={element}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-32">
              <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                <h1 className="text-6xl font-outfit text-center text-white">
                  <span className="">Our</span> Vision
                </h1>
              </div>
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">  
                {slider2}
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}
export default Home;

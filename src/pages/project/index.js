// Components
import React, { Component, useEffect, useState, useRef } from "react";
import GenericPage from "pageBoiler";
import Layout from "components/Layout/Layout";
import Head from "utils/helmet";
import Filter from "utils/filters";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

// Icons and Styles
import "swiper/css";
import "swiper/css/pagination";

// Constants, JSONs
import { projectURL } from "utils/routes";
const photos = require("./photos.json");
const range = (n) => [...Array(n).keys()];

const Carousel = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ dynamicBullets: true, clickable: true }}
      loop={true}
      autoplay={{ delay: 8000, disableOnInteraction: false }}
      spaceBetween={0}
      slidesPerView={1}
    >
      {photos.map((image, index) => {
        return (
          <SwiperSlide key={index}>
            <div key={index}>
              <img
                src={image.image_url}
                alt={image.event}
                className="w-screen h-80v object-cover"
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto">
      <img class="rounded-t-lg w-[24rem] object-cover h-[16rem]" src={project.cover_webp_url} alt="" />
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {project.name}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {project.description.slice(0, 130) + "..."}
        </p>
        <div className="flex space-x-4 text-sm justify-between items-center py-4 mx-2">
          <p className="text-white leading-none">{project.domain}</p>
          <p className="text-white">{project.year}</p>
        </div>
        <form action={project.github_link}>
        <button className="flex w-full items-center justify-center rounded-md border border-transparent btn-gradient text-base font-medium text-white hover:scale-105 p-2" type="submit">
          Read More
          <svg
            aria-hidden="true"
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
              ></path>
          </svg>
        </button>
      </form>
      </div>
    </div>
  );
};

const MainBody = (props) => {
  let filter = {
    "Augmented Reality": ["Augmented Reality"],
    "Machine Learning": ["Machine Learning"],
    "Embedded System": ["Embedded System"],
    "App Development": ["App Development"],
    "Internet of Things": ["Internet of Things"],
    "Web Development": ["Web Development"],
    "All Categories": [
      "Augmented Reality",
      "Machine Learning",
      "Embedded System",
      "App Development",
      "Internet of Things",
      "Web Development",
    ],
  };
  let filter_keys = Object.keys(filter);
  let [displayChoice, setDisplayChoice] = useState("All Categories");
  let [pageChoice, setPageChoice] = useState(0);
  let [displayData, setDisplayData] = useState(props.data);
  let [totalPages, setTotalPages] = useState(
    range(Math.floor(props.data.length / 6))
  );

  useEffect(() => {
    let filteredData = props.data.filter((project) =>
      filter[displayChoice].includes(project.domain)
    );
    setDisplayData(() => filteredData);
    setPageChoice(() => 0);
    setTotalPages(() => range(Math.floor(filteredData.length / 6)));
  }, [displayChoice]);

  return (
    <React.Fragment>
      <Carousel />
      <Filter
        filter_keys={filter_keys}
        displayChoice={displayChoice}
        setDisplayChoice={setDisplayChoice}
      />
      <div className="shade top-[20rem] left-[68rem] w-[80rem] h-[80rem]"></div>
      <div className="flex flex-wrap justify-center mx-4 lg:mx-8 xl:mx-12 2xl:mx-16 ">
        {displayData
          .slice(parseInt(pageChoice) * 6, 6 * (parseInt(pageChoice) + 1))
          .map((project) => (
            <div
              className="flex w-full lg:w-1/2 xl:w-1/3 p-4 mx-auto"
              key={project.id}
            >
              <ProjectCard project={project} className="" />
            </div>
          ))}
      </div>
      <div className="flex justify-center w-full">
        {totalPages.map((pageNo) => {
          return (
            <div className="w-max mx-1">
              <button
                className={
                  "p-3 text-white hover:bg-violet-900 rounded-md " +
                  (pageNo == pageChoice ? "btn-gradient" : "bg-grey-800")
                }
                data-page={pageNo}
                onClick={(e) =>
                  setPageChoice(parseInt(e.target.getAttribute("data-page")))
                }
              >
                {parseInt(pageNo) + 1}
              </button>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

class Projects extends GenericPage {
  constructor() {
    super();
    this.state.url = projectURL;
  }

  render() {
    let data = this.state.data;
    const sortedData = data.sort((a, b) => a.year < b.year);
    this.state.data = sortedData;
    return (
      <Layout>
        <Head title="Projects" />
        {this.renderLoader()}
        {this.renderError()}
        {this.state.wait || this.state.error ? (
          ""
        ) : (
          <MainBody data={this.state.data} />
        )}
      </Layout>
    );
  }
}

export default Projects;

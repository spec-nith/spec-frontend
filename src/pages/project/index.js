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
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url(${project.cover_webp_url})` }}
        title="Woman holding a mug"
      ></div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            {project.name}
          </div>
          <p className="text-gray-700 text-base">
            {project.description.slice(0, 130) + "..."}
          </p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{project.domain}</p>
            <p className="text-gray-600">{project.year}</p>
          </div>
        </div>
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
      <div className="flex flex-wrap justify-center mx-4 lg:mx-8 xl:mx-12 2xl:mx-16">
        {displayData
          .slice(parseInt(pageChoice) * 6, 6 * (parseInt(pageChoice) + 1))
          .map((project) => (
            <div className="flex w-full lg:w-1/2 xl:w-1/3 p-4" key={project.id}>
              <ProjectCard project={project} className="" />
            </div>
          ))}
      </div>
      <div className="flex justify-center w-full">
        {totalPages.map((pageNo) => {
          return (
            <div className="w-max">
              <button
                className={"p-3 text-white hover:bg-violet-900 "+(pageNo==pageChoice?"btn-gradient":"bg-grey-800")}
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

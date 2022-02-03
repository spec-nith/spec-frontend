// Components
import React, { Component, useEffect, useState, useRef } from "react";
import GenericPage from "pageBoiler";
import Layout from "components/Layout/Layout";
import Head from "utils/helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";

// Icons and Styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faCalendarAlt,
  faMapMarkerAlt,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import "./workshopcard.css";

// Constants, JSONs, and Styles
import { worskhopURL } from "utils/routes";
import { data } from "autoprefixer";
import "swiper/css";
import "swiper/css/scrollbar";

// Drop Down Filter List
const MediaIcons = (props) => {
  return <React.Fragment></React.Fragment>;
};

const WorkshopCard = ({ shop }) => {
  let [toggle, setToggle] = useState(true);
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (!toggle && ref.current && !ref.current.contains(e.target)) {
        setToggle(true);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [toggle]);
  return (
    <React.Fragment>
    <div className={"contain z-40" + (toggle ? " hidden" : " block")}>
      <div className="z-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-justify w-1/2 h-1/2 p-4" ref={ref}>
        <div className="flex w-full justify-end">
          <button onClick={() => {setToggle((prevState) => !prevState);}}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        {shop.description}
      </div>
    </div>
    <div className="workshop-card-container border-4">
      <div className="">
        <picture className="object-cover max-h-full w-full">
          <source srcSet={shop.cover_webp_url} type="image/webp" />
          <img src={shop.cover_url} alt={shop.title + "_pic"} />
        </picture>
      </div>
      <div className="z-10 flex flex-wrap text-white card-overlay w-full h-full justify-center pt-8">
        <span className="block self-start text-center text-2xl">
          {shop.title}
        </span>
        <span className="flex flex-wrap w-full text-center self-center">
          <a className="w-full p-4 pointer-events-none" href="#" target="_blank" rel="noopener noreferrer">Register Now</a>
          <button className="w-full p-4"  onClick={() => {setToggle((prevState) => !prevState);}}>Read More</button>
        </span>
        <span className="flex flex-wrap w-full text-right self-end pb-4 pr-2">
          <span className="block w-full">
            <FontAwesomeIcon icon={faCalendarAlt} />
            {" " + shop.event_date.toDateString()}
          </span>
          <span className="block w-full">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            {" " + shop.venue }
          </span>
        </span>
      </div>
    </div>
    </React.Fragment>
  );
};

const MainBody = (props) => {
  let [displayData, setDisplayData] = useState(props.data);
  let [toggle, setToggle] = useState(true);
  let filter = [2021, 2020, 2019, 2018];
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (!toggle && ref.current && !ref.current.contains(e.target)) {
        setToggle(true);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [toggle]);
  return (
    <React.Fragment>
      <div className="flex justify-end">
        <div className="fixed md:relative right-0 top-0 md:mr-8 text-white z-20" ref={ref}>
        <button
            className="flex items-center justify-center h-16 w-16"
            aria-label="Social Media"
            onClick={() => {
              setToggle((prevState) => !prevState);
            }}
          >
            <FontAwesomeIcon className="text-2xl" icon={faFilter} />
          </button>
          <div
            className={
              "relative h-full w-full" +
              (toggle ? " hidden" : " block")
            }
          >
              <ul className="absolute bg-gray-600 right-8 list-none list-outside w-max">
              <li
                className="p-4 text-center"
              >
                <a
                  className="bg-transparent hover:bg-blue-700 text-white font-bold text-lg text-center"
                  aria-label="Filter for show all"
                  href="#"
                  data-filter="All Years"
                  onClick={(e) => {
                    setToggle((prevState) => !prevState);
                    setDisplayData(() => props.data);
                  }}
                >
                  All Years
                </a>
              </li>
              {filter.map((year, index) => (
                <li
                  className="p-4 text-center"
                  key={index}
                >
                  <a
                    className="bg-transparent hover:bg-blue-700 text-white font-bold text-lg"
                    aria-label={`Filter for Year ${year}`}
                    href="#"
                    data-filter={year}
                    onClick={(e) => {
                      setToggle((prevState) => !prevState);
                      setDisplayData(() => {
                        return props.data.filter(
                          (element) =>
                            element.event_date.getFullYear() ==
                            e.target.getAttribute("data-filter")
                        );
                      });
                    }}
                  >
                    {year}
                  </a>
                </li>
              ))}
              </ul>
          </div>
        </div>
      </div>
      <Swiper
      className="alumni-swiper"
      modules={[Pagination, Navigation, Autoplay]}
      pagination={{ dynamicBullets: true, clickable: true }}
      navigation={true}
      // loop={true}
      // autoplay={{ delay: 100, disableOnInteraction: false }}
      loopAdditionalSlides={30}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
    >
     {displayData.map((shop) => {
          return (
            <SwiperSlide>
              <WorkshopCard shop={shop} key={shop.id} />
              </SwiperSlide>
          );
        })} 
    </Swiper>
      {/* <div className="flex flex-wrap">
        {displayData.map((shop) => {
          return (
            <div className="flex w-full md:w-1/2 lg:w-1/4 xl:w-1/6 p-4">
              <WorkshopCard shop={shop} key={shop.id} />
            </div>
          );
        })}
      </div> */}
    </React.Fragment>
  );
};

class Workshop extends GenericPage {
  constructor() {
    super();
    this.state.url = worskhopURL;
  }

  render() {
    let data = this.state.data;
    data.forEach((element) => {
      element.event_date = new Date(element.event_date);
    });
    const sortedData = data.sort((a, b) => a.event_date < b.event_date);
    this.state.data = sortedData;
    return (
      <Layout>
        <Head title="workshop" />
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

export default Workshop;

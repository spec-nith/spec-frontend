// Components
import React, { useState } from "react";
import Layout from "components/Layout/Layout";
import Head from "utils/helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";

// Icons and Styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./alumnicarousel.css";
import "swiper/css";
import "swiper/css/scrollbar";

//Constants, JSONs and Assests
import { alumniURL } from "utils/routes";
import GenericPage from "../../pageBoiler";

const AlumniCard = ({ person }) => {
  return (
    <div className="max-w-sm rounded-2xl w-full overflow-hidden shadow-lg text-left">
      <div
        className="h-0 relative bg-gray-300"
        style={{ paddingBottom: "111%" }}
      >
        <picture>
          <source srcSet={person.profile_pic_webp_url} type="image/webp" />
          <img
            className="w-full h-full block absolute"
            src={person.profile_pic_url}
            alt={person.name + "_pic"}
          />
        </picture>
      </div>
      <div className="px-6 py-4" style={{ backgroundColor: "#353638" }}>
        <div className="grid grid-cols-2 grid-rows-1">
          <div className="text-base">{person.batch}</div>
          <div className="text-right">
            <a
              className="hover:text-blue-500 transition-all"
              href={person.linkedin_id}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold text-xl mb-2">{person.name}</div>
        </div>
        <div>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {person.company}
          </span>
        </div>
      </div>
    </div>
  );
};

const AlumniSwiper = (props) => {
  return (
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
      {props.children}
    </Swiper>
  );
};

// <------------- Funtional Component ------------->
const MainBody = ({ data }) => {
  const [selected_year, setYear] = useState("0");
  const year_mapping = {
    " 2021": [2021],
    " 2020": [2020],
    " 2019": [2019],
    " Before 2019": [2018, 2017, 2016, 2015, 2014],
  };
  const select_year = (e) => setYear(e.target.value);
  return (
    <React.Fragment>
      <div className="lg:m-12 lg:p-8">
        {/* Filter for selecting year to view */}
        <select
          className="h-10 text-white bg-zinc-800 rounded-lg p-2 font-monty"
          onChange={select_year}
        >
          <option value={0}>All Year</option>
          {Object.keys(year_mapping).map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>

        <div className="px-8">
          {Object.keys(year_mapping).map((year) => (
            <div
              className={
                "batch text-white text-4xl font-monty text-center duration-500 transition-all overflow-hidden " +
                (year === selected_year || selected_year === "0"
                  ? "max-h-100v"
                  : "max-h-0")
              }
              key={year}
            >
              Batch
              <span style={{ color: "rgb(46, 224, 154)" }}>{year}</span>
              <AlumniSwiper>
                {data
                  .filter((user) => year_mapping[year].includes(user.batch))
                  .map((user) => (
                    <SwiperSlide
                      className="flex justify-center"
                      key={user.name}
                    >
                      <AlumniCard person={user} />
                    </SwiperSlide>
                  ))}
              </AlumniSwiper>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

class Alumni extends GenericPage {
  constructor() {
    super();
    this.state.url = alumniURL;
  }
  render() {
    return (
      <Layout>
        <Head title="Alumni" />
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
export default Alumni;

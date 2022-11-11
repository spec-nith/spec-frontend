// Components
import React, { useState } from "react";
import Layout from "components/Layout/Layout";
import Head from "utils/helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Lazy } from "swiper";
import Filter from "utils/filters";

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
    <div className="max-w-sm rounded-xl w-full overflow-hidden shadow-lg text-left">
      <div
        className="h-0 relative bg-gray-300 overflow-hidden"
        style={{ paddingBottom: "111%" }}
      >
        <picture>
          <source srcSet={person.profile_pic_webp_url} type="image/webp" />
          <img
            className="w-full h-full block absolute md:hover:scale-110 transition-all duration-400"
            src={person.profile_pic_url}
            alt={person.name + "_pic"}
          />
        </picture>
      </div>
      <div className="pt-4" style={{ backgroundColor: "rgb(14,15,18)" }}>
        <div className="px-6 flex justify-between pb-2">
          <div className="text-xl" style={{ fontWeight: "700" }}>
            {person.name}
          </div>
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
        <div className="bg-gray-200 pl-6 py-2 text-base font-bold text-gray-700">
          {person.company}
        </div>
      </div>
    </div>
  );
};

const AlumniSwiper = (props) => {
  return (
    <Swiper
      className="alumni-swiper pt-8"
      modules={[Pagination, Navigation, Autoplay, Lazy]}
      pagination={{ dynamicBullets: true, clickable: true }}
      navigation={true}
      preloadImages={false}
      lazy={true}
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
  const [selected_year, setYear] = useState("All Batches");
  const year_mapping = {
    "All Batches": [2021, 2020, 2019, 2018, 2017],
    " 2021": [2021],
    " 2020": [2020],
    " 2019": [2019],
    " Before 2019": [2018, 2017, 2016, 2015, 2014],
  };

  return (
    <React.Fragment>
      <div className="lg:m-12 lg:p-8">
        <Filter
          filter_keys={Object.keys(year_mapping)}
          displayChoice={selected_year}
          setDisplayChoice={setYear}
        />
        <div className="shade top-[63rem] left-[68rem] w-[80rem] h-[80rem]"></div>
        <div className="px-8">
          {Object.keys(year_mapping)
            .slice(1)
            .map((year) => (
              <div
                className={
                  "batch text-white text-4xl font-monty text-center duration-500 transition-all overflow-hidden py-10 md:py-0 " +
                  (year === selected_year || selected_year === "All Batches"
                    ? "max-h-100v"
                    : "hidden max-h-0 md:block")
                }
                key={year}
              >
                Batch
                <span className="HeroText">{year}</span>
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

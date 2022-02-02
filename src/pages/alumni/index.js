// Components
import React, { useState } from "react";
import axios from "axios";
import Layout from "components/Layout/Layout";
import Loader from "react-loader-spinner";
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
  const year_of_grad_options = [2021, 2020, 2019, "Before 2019"];
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
          {year_of_grad_options.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>

        <div className="px-8">
          {year_of_grad_options.map((year, index) => (
            <div
              className="batch text-white text-4xl font-monty text-center transition-all"
              key={year}
            >
              {year !== "Before 2019" ? (
                // Title of Swiper Section
                <div
                  className={
                    (String(year) === selected_year || selected_year === "0"
                      ? "h-auto"
                      : "h-0") + " transition-all overflow-hidden"
                  }
                >
                  Batch{" "}
                  <span style={{ color: "rgb(46, 224, 154)" }}>{year}</span>
                  <AlumniSwiper>
                    {data
                      .filter((user) => user.batch === year)
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
              ) : (
                <div
                  className={
                    (String(year) === selected_year || selected_year === "0"
                      ? "h-auto"
                      : "h-0") + " transition-all overflow-hidden"
                  }
                >
                  {" "}
                  Batch before
                  <span style={{ color: "rgb(46, 224, 154)" }}> 2019 </span>
                  <AlumniSwiper>
                    {data
                      .filter((user) => user.batch < 2019)
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
              )}
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

class Alumni extends React.Component {
  constructor() {
    super();
    this.state = {
      wait: true,
      data: [],
      error: false,
      errorData: [],
    };
  }
  componentDidMount() {
    axios
      .get(alumniURL, { timeout: 10000 })
      .then((response) => {
        this.setState({ data: response.data, wait: false });
      })
      .catch((err) => {
        console.log(err.response);
        let msg = "Request Timed Out";
        if (err.response) {
          msg =
            err.response.status && err.response.statusText
              ? "API Error: " +
                err.response.status +
                " " +
                err.response.statusText
              : "API request failed";
        }
        this.setState({ error: true, errorMsg: msg, wait: false });
      });
  }

  renderLoader() {
    if (this.state.wait) {
      return (
        <div className="flex h-90v justify-center items-center">
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={10000} // 10 secs wait until error message shows
          />
        </div>
      );
    }
  }

  renderError() {
    if (this.state.error) {
      return (
        <div className="flex flex-wrap h-90v">
          <div className="flex items-end md:items-center justify-end w-full md:w-1/2">
            <picture className="flex justify-center md:justify-end px-8">
              <source srcSet="error.webp" type="image/webp" />
              <img src="error.webp" className="w-1/2" alt="error_image" />
            </picture>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-1/2 text-white p-4 text-4xl">
            <p className="w-full text-red-500">{this.state.errorMsg}</p>
            <p className="w-full text-xl">
              Ah Snap! Something was broken. We're trying to fix this
            </p>
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <Layout>
        <Head title="PAGE TITLE GOES HERE" />
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

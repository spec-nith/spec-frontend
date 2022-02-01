// Components
import React, { useState, useEffect } from "react";
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

const Alumni = () => {
  const [alumni, setData] = useState({
    wait: true,
    data: [],
    selected_year: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(alumniURL);
      setData(() => ({ ...alumni, data: response.data, wait: false }));
    };
    fetchData();
  }, []);

  const year_of_grad_options = [2021, 2020, 2019, "Before 2019"];
  const select_year = (e) => {
    setData({ ...alumni, selected_year: e.target.value });
  };
  return (
    <>
      <Head title="Alumni" />
      <Layout>
        {alumni.wait ? (
          <div className="flex h-90v justify-center items-center">
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={100000} // 10 secs wait until error message shows
            />
          </div>
        ) : (
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
                        (year === alumni.selected_year ||
                        alumni.selected_year === 0
                          ? "h-auto"
                          : "h-0") + " transition-all overflow-hidden"
                      }
                    >
                      {" "}
                      Batch
                      <span style={{ color: "rgb(46, 224, 154)" }}>{year}</span>
                      <AlumniSwiper>
                        {alumni.data
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
                        (year === alumni.selected_year ||
                        alumni.selected_year === 0
                          ? "h-auto"
                          : "h-0") + " transition-all overflow-hidden"
                      }
                    >
                      {" "}
                      Batch before
                      <span style={{ color: "rgb(46, 224, 154)" }}> 2019 </span>
                      <AlumniSwiper>
                        {alumni.data
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
        )}
      </Layout>
    </>
  );
};
export default Alumni;

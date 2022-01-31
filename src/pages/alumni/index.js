import React, { PureComponent } from "react";
import Cards from "components/UI/Card/AlumniCard";
import axios from "axios";
import Layout from "components/UI/Layout/Layout";
import { alumniURL } from "assets/utils/Routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loader-spinner";
import Head from "assets/utils/helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar } from "swiper";
import "assets/styles/alumni.css";
import "swiper/css";
import "swiper/css/scrollbar";
import "assets/styles/alumniCarousel.css";

class Alumni extends PureComponent {
  constructor() {
    super();
    this.state = {
      error: false,
      wait: true,
      data: [],
      selected_year: 0,
      dummy: [],
    };
  }
  componentDidMount() {
    axios
      .get(alumniURL)
      .then((response) => {
        this.setState({
          dummy: response.data,
          wait: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: true });
      });
  }
  Selected_Year = (e) => {
    this.setState({ selected_year: e.target.value });
  };
  render() {
    const checking = {
      width: "100%",
      overflow: "hidden",
      overflowX: "scroll",
    };
    const year_card = {
      border: "1px solid indigo",
      borderRadius: "5px",
      display: "flex",
      margin: "0 10px 20px 0",
    };
    const year_of_grad = [2021, 2020, 2019, 2018, 2017, 2016, 2015];
    const year_of_grad_options = [2021, 2020, 2019, 2018, "Before 2018"];
    const before_18 = [2017, 2016, 2015];
    var year_blank = [];

    if (this.state.wait) {
      return (
        <>
          <Head title="Alumni" />
          <Layout>
            <div className="flex h-90v justify-center items-center">
              <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={100000} // 10 secs wait until error message shows
              />
            </div>
          </Layout>
        </>
      );
    } else {
      return (
        <>
          <Head title="Alumni" />
          <Layout>
            <div className="head">
              <div className="text-5xl font-bold text-center mt-24 mb-20 sm:mb-0">
                OUR ALUMNI
              </div>

              <div className="flex mt-5 mr-2 sm:mr-12 justify-end sm:justify-end fixed left-40 top-1 sm:l-0 sm:static z-50 ">
                <span className="mt-16 mx-2 ">
                  <FontAwesomeIcon icon={faFilter} size="1x" />
                </span>
                <select
                  className="h-10 text-white bg-zinc-800 rounded-lg p-2 font-monty"
                  onChange={this.Selected_Year}
                >
                  <option value={0}>All Year</option>
                  {year_of_grad_options.map((obj) => (
                    <option value={obj}>{obj}</option>
                  ))}
                </select>
              </div>
              <div
                className={
                  this.state.selected_year == 0
                    ? "flex flex-col"
                    : "flex justify-center"
                }
                style={{ padding: "auto" }}
              >
                {year_of_grad_options.map((obj) => (
                  <React.Fragment key={obj}>
                    {this.state.selected_year == 0 ? (
                      <>
                        <div className="batch text-white text-4xl font-monty flex justify-center">
                          <div className="pr-2">Batch </div>
                          <span style={{ color: "rgb(46, 224, 154)" }}>
                            {obj}
                          </span>
                        </div>
                        <div
                          className="hide"
                          id={obj}
                          style={{ display: "flex", margin: "0 4vw 30px 4vw" }}
                        >
                          <Swiper
                            modules={[Navigation, Scrollbar]}
                            pagination={{ clickable: true }}
                            spaceBetween={1}
                            scrollbar={{ hide: false }}
                            navigation={true}
                            slidesPerView={1}
                            breakpoints={{
                              640: {
                                slidesPerView: 2,
                              },
                              1024: {
                                slidesPerView: 3,
                              },
                            }}
                          >
                            {this.state.dummy.map((test) =>
                              test.batch === obj ? (
                                <SwiperSlide
                                  key={test.id}
                                  className="flex md:w-1/2 lg:w-1/3 justify-center px-10 py-10"
                                >
                                  <Cards person={test} />
                                </SwiperSlide>
                              ) : obj == "Before 2018" && test.batch < 2018 ? (
                                <SwiperSlide
                                  key={test.id}
                                  className="flex justify-center py-6"
                                >
                                  <Cards person={test} />
                                </SwiperSlide>
                              ) : null
                            )}
                          </Swiper>
                        </div>
                      </>
                    ) : obj != this.state.selected_year ? (
                      <div
                        className="hide"
                        id={obj}
                        style={{ display: "flex", margin: "0 4vw 10px 4vw" }}
                        style={{ display: "none" }}
                      >
                        <section className="container_outside_cards">
                          <div className="flex flex-row flex-wrap justify-center gap-10">
                            {this.state.dummy.map(
                              (test) =>
                                test.batch < 2018 && (
                                  <Cards person={test} key={test.id} />
                                )
                            )}
                          </div>
                        </section>
                      </div>
                    ) : this.state.selected_year == "Before 2018" ? (
                      <div
                        className="hide"
                        id={obj}
                        style={{ display: "flex", margin: "0 4vw 10px 4vw" }}
                      >
                        <section
                          className="container_outside_cards"
                          style={checking}
                        >
                          <div className="flex flex-row flex-wrap justify-center gap-10">
                            {this.state.dummy.map(
                              (test) =>
                                test.batch < 2018 && (
                                  <Cards person={test} key={test.id} />
                                )
                            )}
                          </div>
                        </section>{" "}
                      </div>
                    ) : (
                      <div
                        className="hide"
                        id={obj}
                        style={{ display: "flex", margin: "0 4vw 10px 4vw" }}
                      >
                        <section
                          className="container_outside_cards"
                          style={checking}
                        >
                          <div className="flex flex-row flex-wrap justify-center gap-10">
                            {this.state.dummy.map(
                              (test) =>
                                test.batch === obj && (
                                  <Cards person={test} key={test.id} />
                                )
                            )}
                          </div>
                        </section>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </Layout>
        </>
      );
    }
  }
}
export default Alumni;

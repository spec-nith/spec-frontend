import React, { Component } from "react";
import { worskhopURL } from "components/Routes";
import Layout from "components/UI/Layout/Layout";
import axios from "axios";
import WorkshopCard from "../../components/UI/Card/WorkshopCard";
import "react-tabs/style/react-tabs.css";
import "assets/styles/workshopcard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loader-spinner";

class Workshop extends Component {
  constructor() {
    super();
    this.state = {
      selected_year: 0,
      wait: true,
      dummy: [],
    };
  }
  componentDidMount() {
    axios
      .get(worskhopURL)
      .then((response) => {
        this.setState({ dummy: response.data, wait: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  Selected_Year = (e) => {
    this.setState({ selected_year: e.target.value });
  };

  datTimeHandler = (dat) => {
    return new Date(dat).getFullYear();
  };
  render() {
    const year_of_grad = [2021, 2020, 2019, 2018];
    if (this.state.wait) {
      return (
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
      );
    } else {
      return (
        <Layout>
          <div className="">
            <header className="head my-5">
              <div className="text-5xl font-bold text-center my-12 sm:text-7xl md:text-8xl">
                WORKSHOPS
              </div>

              <div className="flex flex-row flex-wrap justify-center">
                <img
                  alt="arduino_pic"
                  className="sm:rounded-l-lg w-64 border-2 border-y-teal-400 border-l-teal-400"
                  src="./images/20944391.jpg"
                />

                <div className="border-y-teal-400 border-r-teal-400 border-2 w-64 p-6 text-center align-middle text-lg self-center text-monty shadow backdrop-filter backdrop-blur-lg section-content sm:rounded-r-lg lg:w-1/3 sm:w-1/2">
                  {" "}
                  SPEC provides students to keep a beady eye with the ever
                  changing technology by holding workshops on many fascinating
                  topics. For instance, many workshops on Arduino, Photoshop,
                  IOT, Integrated circuits are held which ignites the passion
                  for electronics and technology among students.
                </div>
              </div>
            </header>
            <div className="flex mt-5 mr-16 justify-center sm:justify-end">
              <span className="mt-14 ml-2 mr-2 ">
                <FontAwesomeIcon icon={faFilter} size="1x" />
              </span>
              <select
                className="h-10 text-white font-bold bg-zinc-800  rounded-lg p-2 font-monty "
                onChange={this.Selected_Year}
              >
                <option value={0}>All Year</option>
                {year_of_grad.map((obj) => (
                  <option value={obj}>{obj}</option>
                ))}
              </select>
            </div>
            <div className="mx-auto" style={{ padding: "auto" }}>
              {year_of_grad.map((obj) => (
                <React.Fragment key={obj}>
                  {this.state.selected_year === 0 ? (
                    <div>
                      <div className="text-white  text-center text-4xl py-8 font-outfit">
                        YEAR{" "}
                        <span style={{ color: "rgb(46, 224, 154)" }}>
                          {obj}
                        </span>
                      </div>
                      <div className="workshop-page-content grid p-4">
                        {this.state.dummy.map(
                          (element) =>
                            this.datTimeHandler(element.event_date) === obj && (
                              <WorkshopCard
                                key={element.title}
                                shop={element}
                              />
                            )
                        )}
                      </div>
                    </div>
                  ) : obj === this.state.selected_year ? (
                    <div>
                      <div
                        className="text-white text-center text-4xl py-8 font-outfit"
                        style={{ fontSize: "40px" }}
                      >
                        YEAR{" "}
                        <span style={{ color: "rgb(46, 224, 154)" }}>
                          {obj}
                        </span>
                      </div>
                      <div className="workshop-page-content grid p-4">
                        {this.state.dummy.map(
                          (element) =>
                            this.datTimeHandler(element.event_date) === obj && (
                              <WorkshopCard
                                key={element.title}
                                shop={element}
                              />
                            )
                        )}
                      </div>
                    </div>
                  ) : null}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Layout>
      );
    }
  }
}

export default Workshop;

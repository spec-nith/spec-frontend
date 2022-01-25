import React, { Component } from "react";
import { worskhopURL } from "components/Routes";
import Layout from "components/UI/Layout/Layout";
import axios from "axios";
import WorkshopCard from "../../components/UI/Card/WorkshopCard";
import "react-tabs/style/react-tabs.css";
import "assets/styles/workshopcard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

class Workshop extends Component {
  constructor() {
    super();
    this.state = {
      selected_year: 0,
      dummy: [],
    };
  }
  componentDidMount() {
    axios
      .get(worskhopURL)
      .then((response) => {
        this.setState({ dummy: response.data });
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
    const checking = {
      width: "80vw",
      margin: "0 10px 10px 0",
      overflow: "hidden",
      overflowX: "scroll",
    };
    const year_card = {
      border: "1px solid indigo",
      borderRadius: "5px",
      display: "flex",
      margin: "0 10px 20px 0",
    };

    const year_of_grad = [2021, 2020, 2019, 2018];

    var year_blank = [];
    return (
      <Layout>
        <div className="bg-black">
          <header className="head my-5">
            <div className="font-serif text-5xl py-12 text-white font-bold text-center sm:text-7xl md:text-8xl">
              WORKSHOPS
            </div>
            <div className="flex flex-wrap justify-center text-center">
              <div className=" align-middle text-lg h-48 mx-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-gray-900 rounded-lg align-center font-josefin text-blue-400">
                <div className="text-center align-middle sm:text-base md:text-sm lg:text-lg xl:text-lg">
                  Spec provides students to keep a beady eye with the ever
                  changing technology by holding workshops on many fascinating
                  topics. For instance, many workshops on Arduino, Photoshop,
                  IOT, Integrated circuits are held which ignites the passion
                  for electronics and technology among students.
                </div>
              </div>
              <div className="h-48 mx-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-gray-900 text-white rounded-lg">
                <img
                  className="h-48 w-full rounded-lg"
                  src="https://cdn.pixabay.com/photo/2020/05/14/17/32/arduino-5170681_960_720.jpg"
                />
                "
              </div>
            </div>
          </header>
          <div className="flex mt-5">
            <span className="mt-14 ml-4">
              <FontAwesomeIcon icon={faFilter} size="1x" />
            </span>
            <select
              className="h-10 ml-2 text-white bg-black rounded-lg"
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
                {this.state.selected_year == 0 ? (
                  <div>
                    <div
                      className="text-blue-700 text-center text-5xl py-8"
                    >
                      YEAR {obj}
                    </div>
                    <div className="workshop-page-content grid p-4">
                      {this.state.dummy.map(
                        (element) =>
                          this.datTimeHandler(element.event_date) === obj && (
                            <WorkshopCard key={element.title} shop={element} />
                          )
                      )}
                    </div>
                  </div>
                ) : obj == this.state.selected_year ? (
                  <div>
                    <div
                      className="text-blue-700 text-center"
                      style={{ fontSize: "40px" }}
                    >
                      YEAR {obj}
                    </div>
                    <div className="workshop-page-content grid p-4">
                      {this.state.dummy.map(
                        (element) =>
                          this.datTimeHandler(element.event_date) === obj && (
                            <WorkshopCard key={element.title} shop={element} />
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

export default Workshop;
import React, { Component } from "react";
import Cards from "components/UI/Card/AlumniCard";
import axios from "axios";
import "assets/styles/alumni.css";
import Layout from "components/UI/Layout/Layout";
import { alumniURL } from "components/Routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

class Alumni extends Component {
  constructor() {
    super();
    this.state = {
      selected_year: 0,
      dummy: [],
    };
  }
  componentDidMount() {
    axios
      .get(alumniURL)
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
    return (
      <Layout>
        <div className="alumni_bg px-auto">
          <header className="head">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <div className="our_alumni text-6xl font-bold text-white text-center">
                OUR ALUMNI
              </div>
            </div>
          </header>
          <div className="flex justify-end">
            <span className="mt-20 mr-2">
              {" "}
              <FontAwesomeIcon icon={faFilter} size="1x" />
            </span>
            <select className="years h-9" onChange={this.Selected_Year}>
              <option value={0}>All Year </option>
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
                    <div className="batch">{"Batch " + obj}</div>
                    <div
                      className="hide"
                      id={obj}
                      style={{ display: "flex", margin: "0 8vw 30px 8vw" }}
                    >
                      <section
                        className="carousel_cards_container"
                        style={checking}
                      >
                        <div
                          className="card_block gap-4 mb-4 "
                          style={{ display: "flex" }}
                        >
                          {this.state.dummy.map((test) =>
                            test.batch === obj ? (
                              <Cards person={test} key={test.id} />
                            ) : obj == "Before 2018" && test.batch < 2018 ? (
                              <Cards person={test} key={test.id} />
                            ) : null
                          )}
                        </div>
                      </section>
                    </div>
                  </>
                ) : obj != this.state.selected_year ? (
                  <div
                    className="hide"
                    id={obj}
                    style={{ display: "flex", margin: "0 8vw 10px 8vw" }}
                    style={{ display: "none" }}
                  >
                    <section className="container_outside_cards">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
    );
  }
}
export default Alumni;

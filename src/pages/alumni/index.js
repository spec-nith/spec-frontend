import React, { Component} from "react";
import Cards from "components/UI/Card/AlumniCard";
import axios from "axios";
// import { Carousel } from '@trendyol-js/react-carousel';
import "assets/styles/alumni.css";
import Layout from "components/UI/Layout/Layout";
import { alumniURL } from "components/Routes";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
      width: "50vw",
      margin:"0 10px 10px 0",
      overflow: "hidden",
      overflowX: "scroll",
    };
    const year_card = {
      border: "1px solid indigo",
      borderRadius: "5px",
      display: "flex",
      margin: "0 10px 20px 0",
      '@media (max-width: 500px)': {
        display: 'none',
      },
    };
    const dashed_card = {
      flex: "none",
      margin: "auto 40px",
      fontWeight: "bold",
      fontSize: "2vw",
    };
    const years = {
      fontSize: "20px",
      marginLeft: "20.5%",
      borderRadius: "8px",
      background: "#555",
      color: "white",
    };
    const year_of_grad = [
      ...new Set(this.state.dummy.map((item) => item.batch)),
    ].sort((a, b) => a < b);

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

          <select style={years} onChange={this.Selected_Year}>
            <option value={0}>All Year</option>
            {year_of_grad.map((obj) => (
              <option value={obj}>{obj}</option>
            ))}
          </select>
          <div className="mx-auto" style={{ padding: "auto" }}>
            {year_of_grad.map((obj) => (
              <React.Fragment key={obj}>
                {this.state.selected_year == 0 ? (
                  <div
                    className="hide"
                    id={obj}
                    style={{ display: "flex", margin: "20px 0 20px 15%" }}
                  >
                    {/* max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-2 flex justify-center */}
                    {/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6  */}
                   
                    <div className="batch" style={year_card}>

                      <h1 style={dashed_card}>{"Batch " + obj}</h1>
                    </div>
                    <section className="" style={checking}>
                      <div className="" style={{ display: "flex" }}>
                        {this.state.dummy.map(
                          (test) =>
                            test.batch === obj && (
                              <Cards person={test} key={test.id} />
                            )
                        )}
                      </div>
                    </section>
                  </div>
                ) : obj != this.state.selected_year ? (
                  <div
                    className="hide"
                    id={obj}
                    style={{ display: "flex", margin: "20px 0 20px 15%" }}
                    style={{ display: "none" }}
                  >
                    {/* max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-2 flex justify-center */}
                    {/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6  */}
                    <div className="batch py-10" style={year_card}>
                      <h1 style={dashed_card}>{"Batch " + obj}</h1>
                    </div>
                    <section className="" style={checking}>
                      <div className="" style={{ display: "flex" }}>
                        {this.state.dummy.map(
                          (test) =>
                            test.batch === obj && (
                              <Cards person={test} key={test.id} />
                            )
                        )}
                      </div>
                    </section>
                  </div>
                ) : (
                  <div
                    className="hide"
                    id={obj}
                    style={{ display: "flex", margin: "20px 0 20px 15%" }}
                  >
                    {/* max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-2 flex justify-center */}
                    {/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6  */}
                    <div className="batch py-10" style={year_card}>
                      <h1 style={dashed_card}>{"Batch " + obj}</h1>
                    </div>
                    <section className="" style={checking}>
                      <div className="" style={{ display: "flex" }}>
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

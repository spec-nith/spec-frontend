// Components
import React, { Component, useState } from "react";
import Layout from "components/Layout/Layout";
import axios from "axios";
import Loader from "react-loader-spinner";
import Head from "utils/helmet";


// Icons and Styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import "./workshopcard.css";

// Constants, JSONs, and Styles
import { worskhopURL } from "utils/routes";

const WorkshopCard = ({ shop }) => {
  console.log(shop);

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <section className="workshop-card-section">
        <div
          className="workshop-card relative flex items-end overflow-hidden p-4 text-center border-black-700 border-2 rounded-lg "
          style={{ backgroundImage: `url("${shop.cover_webp_url}")` }} //./images/spec_workshop11.jpg
        >
          <div className="workshop-content relative flex flex-col items-center w-full p-4">
            <h2 className="workshop-title text-xl font-bold text-white">
              {shop.title}
            </h2>
            <p className="copy text-lg italic text-white"> At {shop.venue}</p>
            <button
              id="open-btn"
              onClick={() => setShowModal(true)}
              className="workshop-btn cursor-pointer mt-6 text-xs font-bold uppercase text-black bg-white rounded-sm hover:bg-green-400"
            >
              Read More
            </button>
          </div>
        </div>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="rounded-lg relative flex flex-col w-full shadow backdrop-filter backdrop-blur-xl outline-none focus:outline-none border-2 border-teal-400">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t text-center">
                    <h3 className="text-3xl font-semibold text-white">
                      {shop.title}
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-white opacity-2 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-white hover:text-green-500 opacity-2 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-white text-lg leading-relaxed">
                      {shop.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-white hover:text-black hover:bg-green-400 rounded-sm background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </section>
    </>
  );
};


class MainBody extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: this.props.data,
      selected_year: 0
    }
  }

  Selected_Year = (e) => {
    this.setState({ selected_year: e.target.value });
  };

  datTimeHandler = (dat) => {
    return new Date(dat).getFullYear();
  };
  render() {
    const year_of_grad = [2021, 2020, 2019, 2018];
      return (
          <div className="">
            <header className="head my-5">
              <div className="text-5xl font-bold text-center my-16 sm:text-7xl md:text-8xl">
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
                        {this.state.data.map(
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
                        {this.state.data.map(
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
      );
    }
  }


class Workshop extends Component {
  constructor() {
    super();
    this.state = {
      wait: true,
      data: [],
      error:false,
      errorData:[]
    };
  }
  componentDidMount() {
    axios
      .get(worskhopURL)
      .then((response) => {
        this.setState({ data: response.data, wait: false });
      })
      .catch((err) => {
        console.log(err.response);
        this.setState({error: true, errorData: err.response, wait: false})
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
                  timeout={100000} // 10 secs wait until error message shows
                />
              </div>
          );
        }
  }

  renderError() {
      if (this.state.error){
          return(
              <div className="flex flex-wrap h-90v">
                <div className="flex items-center justify-end w-full md:w-1/2">
                  <img src="error.webp"/>
                </div>
                <div className="flex items-center justify-start w-full md:w-1/2 text-white p-4">
                  <h1>YO YO this is fucked</h1>
                  <h1>{this.state.errorData.status}</h1>
                  <h1>{this.state.errorData.statusText}</h1>
                </div>
              </div>
          )
        }
  }
  render() {
      return(
           <Layout>
               <Head title="workshop" />
               { this.renderLoader() }
               { this.renderError() }
               {(this.state.wait || this.state.error) ? "" : <MainBody data={this.state.data}/>}
           </Layout>
      )
  }
}
  

export default Workshop;

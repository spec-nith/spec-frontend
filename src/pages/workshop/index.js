// Components
import React, { useEffect, useState, useRef } from "react";
import GenericPage from "pageBoiler";
import Layout from "components/Layout/Layout";
import Head from "utils/helmet";
import Filter from "utils/filters";

// Icons and Styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faMapMarkerAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./workshopcard.css";

// Constants, JSONs, and Styles
import { worskhopURL } from "utils/routes";
const filter = {
  "All Years": [2021, 2020, 2019, 2018],
  2021: [2021],
  2020: [2020],
  2019: [2019],
  2018: [2018],
};
let range = (n) => [...Array(n).keys()];

const WorkshopCard = ({ shop }) => {
  let [toggle, setToggle] = useState(true);
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (!toggle && ref.current && !ref.current.contains(e.target)) {
        setToggle(true);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [toggle]);
  return (
    <React.Fragment>
      <div className={"contain z-40" + (toggle ? " hidden" : " block")}>
        <div
          className="z-50 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 min-h-1/2 border-2 flex flex-col md:flex-row text-white bg-black opacity-80 border-indigo-500"
          ref={ref}
        >
          <button
            className="absolute top-0 right-0 m-4 text-white"
            onClick={() => {
              setToggle((prevState) => !prevState);
            }}
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
          <div className="h-full w-full md:w-1/3 hidden md:block">
            <picture>
              <source srcSet={shop.cover_webp_url} type="image/webp" />
              <img src={shop.cover_url} alt={shop.title + "_pic"} />
            </picture>
          </div>
          <div className="px-4 py-4 md:px-12 md:py-8 w-full md:w-2/3">
            <div className="text-xl md:text-4xl font-semibold">
              {shop.title}
            </div>
            <div className="my-1 md:my-4 text-xs">
              <span>
                <FontAwesomeIcon icon={faCalendarAlt} />
                {" " + shop.event_date.toDateString()}
              </span>
              <span className="px-2 md:px-4">|</span>
              <span>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                {" " + shop.venue}
              </span>
            </div>
            <div className="mt-2 text-sm md:text-lg">{shop.description}</div>
            <div className="mt-4 md:mt-10">
              <button
                className="text-sm md:text-lg border-2 rounded-xl py-2 px-4 cursor-not-allowed"
                disabled
              >
                Event Complete
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Main Body */}
      <div className="workshop-card-container bg-[#535a83] rounded-xl border-2 border-indigo-300 ">
        <div className="z-10 flex flex-wrap text-white card-overlay w-full h-full justify-center pt-2">
          <span className="flex flex-col h-20 content-center">
            <span className="block self-start text-center text-2xl font-semibold ">
              {shop.title.toUpperCase()}
            </span>
            {/* <span class="h-1 w-full bg-purple-600 mt-2"></span> */}
          </span>
          <img
            className="card rounded-md shadow-xl"
            src="https://media.istockphoto.com/vectors/abstract-vector-dynamic-background-vector-id1159749274?k=20&m=1159749274&s=612x612&w=0&h=9u2n1GDqWYwUqA3XsL1KLiWHRLQctsFgjKKiqO-Djbc="
            alt={shop.title + "_pic"}
          />
          <span className="flex flex-row w-full text-center self-center mx-4 space-x-4 mt-4">
            {/* <a
                className="p-3 pointer-events-none block w-7/12 gradientButton mx-auto"
                href="https://blank.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </a> */}

            <button
              disabled = "true"
              className="p-3 w-7/12 block gradientButton mx-auto rounded-md text-lg hover:scale-105 "
              onClick={() => {
                setToggle((prevState) => !prevState);
              }}
            >
              Register Now
            </button>
            <button
              className="p-3 w-7/12 block gradientButton mx-auto rounded-md text-lg hover:scale-105"
              onClick={() => {
                setToggle((prevState) => !prevState);
              }}
            >
              Read More
            </button>
          </span>
          <span className="flex w-full space-x-4 p-4 justify-center">
            <span className="flex-1 block w-full">
              <FontAwesomeIcon icon={faCalendarAlt} />
              {" " + shop.event_date.toDateString()}
            </span>
            <span className="flex-1 block w-full">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              {" " + shop.venue}
            </span>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

const MainBody = (props) => {
  let filter_keys = Object.keys(filter);
  filter_keys.reverse();
  let [displayChoice, setDisplayChoice] = useState(filter_keys[0]);
  let [pageChoice, setPageChoice] = useState(0);
  let [displayData, setDisplayData] = useState(props.data);
  let [totalPages, setTotalPages] = useState(
    range(Math.floor(props.data.length / 8))
  );

  useEffect(() => {
    let filteredData = props.data.filter((shop) =>
      filter[displayChoice].includes(shop.event_date.getFullYear())
    );
    setDisplayData(() => filteredData);
    setPageChoice(() => 0);
    setTotalPages(() => range(Math.floor(filteredData.length / 8)));
    console.log(displayChoice);
  }, [displayChoice, props.data]);

  return (
    <React.Fragment>
      <Filter
        filter_keys={filter_keys}
        displayChoice={displayChoice}
        setDisplayChoice={setDisplayChoice}
      />
      <div className="flex flex-wrap justify-center mx-6 lg:mx-8 xl:mx-12 2xl:mx-16">
        {displayData
          .slice(parseInt(pageChoice) * 8, 8 * (parseInt(pageChoice) + 1))
          .map((shoop) => (
            <div
              className="flex md:w-1/2 xl:w-1/3 2xl:w-1/4 p-2"
              key={shoop.id}
            >
              <WorkshopCard shop={shoop} className="" />
            </div>
          ))}
      </div>
      <div className="flex justify-center w-full mt-8 rounded-xl">
        {totalPages.map((pageNo) => {
          return (
            <div className="w-max" key={pageNo}>
              <button
                className="p-3 gradientButton"
                data-page={pageNo}
                onClick={(e) =>
                  setPageChoice(parseInt(e.target.getAttribute("data-page")))
                }
              >
                {parseInt(pageNo) + 1}
              </button>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

class Workshop extends GenericPage {
  constructor() {
    super();
    this.state.url = worskhopURL;
  }

  render() {
    let data = this.state.data;
    data.forEach((element) => {
      element.event_date = new Date(element.event_date);
    });
    const sortedData = data.sort((a, b) => a.event_date < b.event_date);
    this.state.data = sortedData;
    return (
      <Layout>
        <Head title="Events" />
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

export default Workshop;

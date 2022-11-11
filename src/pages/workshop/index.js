// Components
import React, { useEffect, useState, useRef } from "react";
import GenericPage from "pageBoiler";
import Layout from "components/Layout/Layout";
import Head from "utils/helmet";
import Filter from "utils/filters";
import Modal from "components/Modal/Modal";

// Icons and Styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faMapMarkerAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./workshopcard.css";
import axios from "axios";

// Constants, JSONs, and Styles
import { worskhopURL } from "utils/routes";
const filter = {
  "All Years": [2022,2021, 2020, 2019, 2018],
  2022: [2022],
  2021: [2021],
  2020: [2020],
  2019: [2019],
  2018: [2018],
};
let range = (n) => [...Array(n).keys()];

const WorkshopCard = ({ shop,modalHandler }) => {
  let [toggle, setToggle] = useState(true);
  let today = new Date();
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (!toggle && ref.current && !ref.current.contains(e.target)) {
        setToggle(true);
        document.body.style.overflow = "unset";
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [toggle]);

  const modalViewHandler=()=>{
    modalHandler(shop.title);
  }
  return (
    <React.Fragment>
      <div className="max-w-[19rem] rounded-xl overflow-hidden shadow-lg z-[11]">
        <div
          className="h-0 relative bg-gray-300 overflow-hidden"
          style={{ paddingBottom: "111%" }}
        >
          <div
            className="min-h-[3rem] text-center  text-xl font-semibold "
            style={{ backgroundColor: "rgb(14,15,18)", color: "white" }}
          >
            {shop.title.toUpperCase()}
          </div>
          <picture>
            <source srcSet={shop.cover_webp_url} type="image/webp" />
            <img
              className="object-fill rounded-md shadow-xl"
              src={shop.cover_url}
              alt={shop.title + "_pic"}
            />
          </picture>
        </div>
        <div
          className="pt-2"
          style={{ backgroundColor: "rgb(14,15,18)", color: "white" }}
        >
          <span className="flex p-1 justify-center">
            <span className="flex-1 block w-full">
              <FontAwesomeIcon icon={faCalendarAlt} />
              {" " + shop.event_date.toDateString()}
            </span>
            <span className="flex-1 block w-full text-right">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              {" " + shop.venue}
            </span>
          </span>
          <div className="flex justify-center">
            <button
              className={"flex w-full items-center justify-center rounded-bl-md border border-transparent text-base font-medium text-white hover:scale-105 p-2 "+(today.getTime() > shop.event_date.getTime()?" bg-gray-500 ":" btn-gradient ")}
              onClick={modalViewHandler}
              disabled={today.getTime() > shop.event_date.getTime()}
            >
              Register Now
            </button>
            <button
              className="flex w-full items-center justify-center rounded-br-md border border-transparent btn-gradient text-base font-medium text-white hover:scale-105 p-2"
              onClick={() => {
                setToggle((prevState) => !prevState);
                document.body.style.overflow = "hidden";
              }}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className={"contain z-40" + (toggle ? " hidden" : " block")}>
        <div
          className="z-50 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 min-h-1/2 border-2 flex flex-col md:flex-row text-white bg-black opacity-80 border-indigo-500"
          ref={ref}
        >
          <button
            className="absolute top-0 right-0 m-4 text-white"
            onClick={() => {
              setToggle((prevState) => !prevState);
              document.body.style.overflow = "unset";
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
            <div
              style={{ height: "500px", overflowY: "scroll" }}
              className="mt-2 text-sm md:text-lg"
            >
              {shop.description}
            </div>
            <div className="mt-4 md:mt-10">
              <button
                className="text-sm md:text-lg border-2 rounded-xl py-2 px-4 cursor-not-allowed"
                disabled={today.getTime() > shop.event_date.getTime()}
                onClick={modalViewHandler}
              >
                {today.getTime() > shop.event_date.getTime()?" Event Complete ":" Register Now"}
              </button>
            </div>
          </div>
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
      <div className="shade top-[0rem] left-[68rem] w-[80rem] h-[80rem]"></div>
      <div className="flex flex-wrap justify-center mx-6 lg:mx-8 xl:mx-12 2xl:mx-16">
        {displayData
          .slice(parseInt(pageChoice) * 8, 8 * (parseInt(pageChoice) + 1))
          .map((shoop) => (
            <div
              className="flex md:w-1/2 xl:w-1/3 2xl:w-1/4 my-4 justify-center max-w-sm"
              key={shoop.id}
            >
              <WorkshopCard shop={shoop} modalHandler={props.modalHandler} />
            </div>
          ))}
      </div>
      <div className="flex justify-center w-full mt-8 rounded-xl">
        {totalPages.map((pageNo) => {
          return (
            <div className="w-max m-1" key={pageNo}>
              <button
                className="flex w-full items-center justify-center rounded-md border border-transparent btn-gradient text-base font-medium text-white hover:scale-105 p-2"
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
    this.state.modalShow=false;
    this.state.workshop="";
    this.state.name="";
    this.state.email="";
    this.state.suggestions="";
    this.state.output=null;
    // this.state.error=null;
  }
  modalHandler = (value) => {
    this.setState((prevState) => ({
      modalShow: !prevState.modalShow,
      workshop: value,
    }))
  }

  inputHandler = (e) => {
   this.setState((prevState)=>({
      [e.target.name]:e.target.value
   }))
  }

  submitHandler = (e) => {
   e.preventDefault();
   const getItem=this.state.data.filter((item)=>item.title===this.state.workshop);
   const formData={
      name:this.state.name,
      email:this.state.email,
      suggestions:this.state.suggestions,
      workshop:getItem[0].title_date
   }
   console.log('data sent',formData)
   axios.post("https://azure-faltu.azurewebsites.net/workshop/register/", formData)
   .then((res)=>{
      console.log(res.data)
      this.setState({
          output:res.data
      })
   }).catch((err)=>{
      console.log(err)
    //   this.setState({
    //     error:err.data
    // })
   })
  }

  render() {
    let data = this.state.data;
    data.forEach((element) => {
      element.event_date = new Date(element.event_date);
    });
    const sortedData = data.sort((a, b) => a.event_date < b.event_date);
    this.state.data = sortedData;

    let inputForm = (<form onSubmit={this.submitHandler} method='POST' className="mt-10 py-6" autoComplete="off">
    <div className="flex justify-center items-center flex-col">
      <div className="relative w-[20rem] pt-10">
        <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-violet-600 focus:outline-none focus:ring-0" placeholder=" " onChange={this.inputHandler} value={this.state.name} autoComplete="nope" required pattern="[A-Za-z]*"/>
        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-3 peer-focus:scale-[0.85]">Your name</label>
      </div>
      <div className="relative w-[20rem] pt-10">
        <input type="text" name="email" pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-violet-600 focus:outline-none focus:ring-0" placeholder=" " onChange={this.inputHandler} value={this.state.email} autoComplete="nope" required/>
        <label className="absolute top-3 -z-10 origin-[0] -translate-y-3 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-3 peer-focus:scale-[0.85]" >Your email</label>
      </div>
      <div className="relative w-[20rem] pt-10">
        <input type="text" name="workshop" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-gray-300 py-2.5 px-0 text-sm text-gray-900 focus:border-red-500 focus:outline-none focus:ring-0" value={this.state.workshop} placeholder=" " readOnly/>
        <label className="absolute top-3 -z-10 origin-[0] -translate-y-3 scale-[0.85] transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-3 peer-focus:scale-[0.85]">Workshop</label>
      </div>
      <div className="relative w-[20rem] pt-10">
        <textarea name="suggestions" rows="4" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-violet-600 focus:outline-none focus:ring-0" placeholder=" " onChange={this.inputHandler} value={this.state.suggestions} autoComplete="nope"></textarea>
        <label className="absolute top-3 -z-10 origin-[0] -translate-y-3 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-3 peer-focus:scale-[0.85]">Your suggestion</label>
      </div>
      <div className="space-x-10">
    <button type="submit" className='btn-gradient mt-6 p-2 focus:outline-none rounded text-lg text-gray-200'>Register</button>
    <button className='bg-red-500 mt-6 p-2 focus:outline-none rounded text-lg text-gray-200 px-4' onClick={this.modalHandler}>Close</button>
      </div>
    </div>
  </form>)

  if(this.state.output){
    inputForm=(<div className="flex justify-center items-center flex-col h-56 md:h-80 w-full">
    <h1 className="text-xl md:text-2xl font-bold text-gray-700 pb-6">{this.state.output.message}</h1>
    {/* <h1 className="text-2xl font-bold text-gray-700">Thank you for registering</h1> */}
    <button className='bg-red-500 mt-6 p-2 focus:outline-none rounded text-lg text-gray-200 px-4' onClick={this.modalHandler}>Close</button>
  </div>)
  }
    return (
      <React.Fragment>
      <Layout>
        <Head title="Events" />
        {this.renderLoader()}
        {this.renderError()}
        {this.state.wait || this.state.error ? (
          ""
          ) : 
            (<React.Fragment>
              <Modal show={this.state.modalShow} clicked={this.modalHandler}>
                {inputForm}
              </Modal>
              <MainBody data={this.state.data} modalHandler={this.modalHandler} />
            </React.Fragment>
            )}
      </Layout>
      </React.Fragment>
    );
  }
}

export default Workshop;

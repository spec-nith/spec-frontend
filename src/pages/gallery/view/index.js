// Import Components
import React, { Component } from "react";
import Layout from "components/UI/Layout/Layout";
import axios from "axios";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay,Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { galleryURL } from "assets/utils/Routes";
import {
  faChevronRight,
  faChevronLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loader-spinner";

//CSS
import "assets/styles/gallery.css";
import "assets/styles/gallerygrid.css";
// Constants
// const photo = require("./photos.json");

export default class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FullImageCard: false,
      imageUrl: null,
      currentIndex: 0,
      data: [],
      title: this.props.location.search.slice(6),
      currentImage: 0,
      viewerIsOpen: false,
      load_status: true,
      touchStart:0,
      touchEnd:0,
      imageClick: false,
      windowWidth: window.innerWidth,
    };
  }
  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
   };
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    let url = "/?event=" + this.state.title;
    if (this.state.title === "Random") {
      url = "";
    }
    
    console.log(this.state.url);
    axios
      .get(galleryURL + url)
      .then((response) => {
        let photos = response.data;
        function select(a,b){
            if(a.year>b.year){
                return 1;
            }
            else{
                return -1;
            }
        }
        photos.sort(select);
        this.setState({ data: photos });
        this.setState({ load_status: false });
        // console.log(this.state.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
   } 
  closeLightbox = () => {
    this.setState({ FullImageCard: false });
    console.log('called');
  };
  openLightbox = (photo, index ) => {
      this.setState({ currentImage: index,currentIndex:index, viewerIsOpen: true })
      this.showImage(photo,index);   
  };
  showImage = (img, ind) => {
      let url = this.state.data[ind].image_url;
      this.setState({
          FullImageCard: true,
          imageUrl: url,
          currentIndex: ind,
      });
  }
  exitButton = () => {
    console.log('exit');
      this.setState({ FullImageCard: false });
  }
  render() {
    const { windowWidth } = this.state; 
    return (
      <Layout>
        <React.Fragment>
        {/* <h1>{ windowWidth } </h1> */}
        <h1 className="text-5xl font-bold text-center mt-16 sm:text-7xl md:text-8xl">{this.state.title}</h1>
        {this.state.FullImageCard && (
            <div 
            id="overlay" className="lg:px-16">
            <div id="exitButton" onClick={() => this.exitButton()}>
                <FontAwesomeIcon icon={faTimes} />
              </div>
              <Swiper
          modules={[Pagination, Autoplay,Navigation]}
          pagination={{ dynamicBullets: true, clickable: true }}
          loop={true}
          // autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={0}
          slidesPerView={1}
          navigation={ windowWidth>1000? true : false}
          initialSlide={this.state.currentIndex}>
          {this.state.data.map((image, index) => {
            return (
              <SwiperSlide key={index} >
                <div
                  key={index}
                >
                  <img
                    src={image.image_url}
                    alt={image.event}
                    className="m-auto p-2 lg:max-w-[70%] max-w-[90%]"
             
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
            </div>
          )}

        <section class="mx-16 py-8 gallery-section">
        <div className="grid gap-8 grid-flow-row-dense gallery-grid">
          {this.state.data.map((img_data,ind) => {
            return (
              <div class="flex flex-col bg-cover bg-center cursor-pointer relative justify-end col-auto box-border rounded gallery-item"
              onClick={() => this.openLightbox(img_data,ind)}

               style={{backgroundImage:`url(${img_data.thumb_image_url})`}}>
              <div class=" font-semibold p-4 bg-white text-black rounded">
                <div className="font-extrabold text-lg">{img_data.event} {img_data.year}</div>   {img_data.sub_event}
              </div>
            </div>
              
            );
          })}
        </div>
        </section>
        </React.Fragment>
      </Layout>
    );
  }
}

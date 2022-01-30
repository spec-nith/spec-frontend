// Import Components
import React, { Component } from "react";
import Layout from "components/UI/Layout/Layout";
import axios from "axios";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Scrollbar, A11y } from 'swiper';
// import Gallery from "react-photo-gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { galleryURL } from "../../../components/Routes";
import {
  faChevronRight,
  faChevronLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
// import LightGallery from 'lightgallery/react';
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';

//CSS
// import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
// import 'lightgallery/css/lg-thumbnail.css';
import "assets/styles/gallery.css";
import Loader from "react-loader-spinner";
import "assets/styles/gallerygrid.css";
// Constants
const photo = require("./photos.json");

// console.log(lightgallery)
// console.log(gallery)
export default class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FullImageCard: false,
      imageUrl: null,
      currentIndex: 0,
      data: [],
      title: this.props.location.search.slice(6),
      // tt: this.props.location,
      currentImage: 0,
      viewerIsOpen: false,
      load_status: true,
      touchStart:0,
      touchEnd:0,
      imageClick: false,
    };
  }
  componentDidMount() {
    let url = "/?event=" + this.state.title;
    // console.log(this.state.tt)
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
    return (
      <Layout>
        <React.Fragment>

        <h1 className="text-5xl font-bold text-center mt-16 sm:text-7xl md:text-8xl">{this.state.title}</h1>
        {this.state.FullImageCard && (
            <div 
            id="overlay" 
        
              className="lg:px-16"

            >
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
          navigation={true}
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
                    className="m-auto p-2 md:w-9/12"
             
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
            </div>
          )}

        {/* <div className="mx-8 lg:mx-16 2xl:mx-32 mt-16 pb-32"> */}
        <section class="p-8 lg:p-16 gallery-section">
        <div className="grid gap-8 grid-flow-row-dense gallery-grid">
          {this.state.data.map((img_data,ind) => {
            return (
              <div class="flex flex-col bg-cover bg-center cursor-pointer relative justify-end col-auto box-border rounded gallery-item"
              // onClick={() => console.log('hello ',img_data,ind)}
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

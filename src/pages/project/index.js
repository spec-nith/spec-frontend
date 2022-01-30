import React, { Component } from 'react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Scrollbar, A11y } from 'swiper';
const photos = require("./photos.json");

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {

          data: [],
          
        };
      }
      componentDidMount() {
        this.setState({ data: photos });
      }
  render() {
    return <div>
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
                    className="m-auto p-2"
             
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

    </div>;
  }
}

import React, { Component } from "react";
import Layout from "components/Layout/Layout";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import {} from "swiper";
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
    return (
      <Layout>
        <React.Fragment>
          <div>
            <Swiper
              modules={[Pagination, Autoplay, Navigation]}
              pagination={{ dynamicBullets: true, clickable: true }}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              spaceBetween={0}
              slidesPerView={1}
              navigation={true}
            >
              {this.state.data.map((image, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div key={index}>
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
            <div className="flex">
              {this.state.data.map((data, index) => {
                return (
                  <div class="w-96 rounded shadow-lg" key={index}>
                    <img class="w-full" src={data.image_url} alt={data.event} />
                    <div class="px-6 py-4">
                      <div class="font-bold text-xl mb-2">
                        The Coldest Sunset
                      </div>
                      <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, nulla! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
                      </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #photography
                      </span>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #travel
                      </span>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #winter
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </React.Fragment>
      </Layout>
    );
  }
}

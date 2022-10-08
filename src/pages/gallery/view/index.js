// Components
import React, { Component } from "react";
import Layout from "components/Layout/Layout";
import axios from "axios";
import Head from "utils/helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import Loader from "react-loader-spinner";

// Icons and Styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/pagination";
import "../gallery.css";
import "./gallerygrid.css";

//Constans, JSONs and Assests
import { galleryURL } from "utils/routes";

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
      touchStart: 0,
      touchEnd: 0,
      imageClick: false,
      // windowWidth: window.innerWidth,
    };
  }

  componentDidMount() {
    let url = "/?event=" + this.state.title;
    if (this.state.title === "SPEC") {
      url = "";
    }

    // console.log(this.state.url);
    axios
      .get(galleryURL + url)
      .then((response) => {
        let photos = response.data;
        function select(a, b) {
          if (a.year > b.year) {
            return 1;
          } else {
            return -1;
          }
        }
        photos.sort(select);
        this.setState({ data: photos });
        this.setState({ load_status: false });
        console.log(this.state.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  closeLightbox = () => {
    this.setState({ FullImageCard: false });
  };
  openLightbox = (photo, index) => {
    this.setState({
      currentImage: index,
      currentIndex: index,
      viewerIsOpen: true,
    });
    this.showImage(photo, index);
  };
  showImage = (img, ind) => {
    let url = this.state.data[ind].image_url;
    this.setState({
      FullImageCard: true,
      imageUrl: url,
      currentIndex: ind,
    });
  };
  exitButton = () => {
    // console.log('exit');
    this.setState({ FullImageCard: false });
  };
  render() {
    const { windowWidth } = this.state;
    if (this.state.load_status) {
      return (
        <>
          <Head title="Team" />
          <Layout>
            <div className="flex h-90v justify-center items-center">
              <Loader
                type="Puff"
                color="#961adb7a"
                height={100}
                width={100}
                timeout={100000} // 10 secs wait until error message shows
              />
            </div>
          </Layout>
        </>
      );
    } else {
      return (
        <Layout>
          <React.Fragment>
            <h1 className="text-5xl font-bold text-center mt-16 sm:text-7xl md:text-8xl">
              {this.state.title}
            </h1>
            {this.state.FullImageCard && (
              <div id="overlay" className="lg:px-16">
                <div id="exitButton" onClick={() => this.exitButton()}>
                  <FontAwesomeIcon icon={faTimes} />
                </div>
                <Swiper
                  modules={[Pagination, Autoplay, Navigation]}
                  pagination={{ dynamicBullets: true, clickable: true }}
                  loop={true}
                  // autoplay={{ delay: 4000, disableOnInteraction: false }}
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation={true}
                  initialSlide={this.state.currentIndex}
                >
                  {this.state.data.map((image, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div key={index}>
                          <img
                            src={image.image_url}
                            alt={image.event}
                            className="m-auto p-2 lg:max-w-[70%] max-w-[90%]"
                            loading="lazy"
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            )}

            <section className="mx-16 py-8 gallery-section">
              <div className="grid gap-8 grid-flow-row-dense gallery-grid">
                {this.state.data.map((img_data, ind) => {
                  return (
                    <div
                      className="flex flex-col bg-cover bg-center cursor-pointer relative justify-end col-auto box-border rounded gallery-item"
                      onClick={() => this.openLightbox(img_data, ind)}
                      loading="lazy"
                      style={{
                        backgroundImage: `url(${img_data.thumb_image_url})`,
                      }}
                    >
                      <div className=" font-semibold p-4 bg-white text-black rounded">
                        <div className="font-extrabold text-lg">
                          {img_data.event} {img_data.year}
                        </div>{" "}
                        {img_data.sub_event}
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
}

// Component Imports
import React, { Component } from "react";
import Loader from "react-loader-spinner";

// CSS Imports

// Constants

// Begin
export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.photos,
      wait: this.props.loadStatus,
      lightbox: false,
      lightbox_index: 0,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.loadStatus !== prevProps.loadStatus) {
      this.setState({ wait: false, data: this.props.photos });
    }
  }

  showGallery = () => {
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
    } else {
      return (
        <div className="flex flex-wrap -mx-px overflow-hidden min-h-90v">
          {this.state.data.map((img_data) => {
            return (
              <div
                className="my-1 px-1 overflow-hidden w-full sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/5 items-center justify-center object-cover lg:max-h-48 xl:max-h-48 max-h-56"
                key={img_data.id}
                onClick={(e) => this.showLightbox(e, img_data.id)}
              >
                <img
                  src={img_data.thumb_image_url}
                  alt="image"
                  className="w-full"
                />
              </div>
            );
          })}
        </div>
      );
    }
  };

  renderLightbox = () => {
    if (this.state.lightbox) {
      return (
        <div>
          GGWP
          {this.state.lightbox_index}
        </div>
      );
    }
  };

  showLightbox = (e, id) => {
    e.type == "click" && this.setState({ lightbox: true, lightbox_index: id });
  };

  render() {
    return (
      <React.Fragment>
        {this.showGallery()}
        {this.renderLightbox()}
      </React.Fragment>
    );
  }
}

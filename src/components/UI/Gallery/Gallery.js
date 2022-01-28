// Component Imports
import React, { Component } from "react";
import Loader from "react-loader-spinner";

// CSS Imports
import "assets/styles/gallerygrid.css";
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
    if (this.props.loadStatus != prevProps.loadStatus) {
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
        <section class="gallery-section">
        <div className="gallery-grid">
          {this.state.data.map((img_data) => {
            return (
              <div class="gallery-item item--medium"
               style={{backgroundImage:`url(${img_data.thumb_image_url})`}}>
              <div class="item__details">
                sesame snaps chocolate
              </div>
            </div>
              
            );
          })}
        </div>
        </section>
      );
    }
  };

  renderLightbox = () => {
    if (this.state.lightbox) {
      return (
        <div>
          
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

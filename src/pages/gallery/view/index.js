import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faChevronRight,
  faChevronLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "../../../assets/styles/gallery.css";
import Layout from "components/UI/Layout/Layout";
import axios from "axios";

export default class ImageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FullImageCard: false,
      imageUrl: null,
      currentIndex: 0,
      dummy: [],
      title: this.props.location.search.slice(6),

    };
  }
  async componentDidMount() {
    await axios
      .get("https://spec-backend.herokuapp.com/api/gallery/?event=" + this.state.title)
      .then((response) => {
        this.setState({ dummy: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async showImage(img, ind) {
    await this.setState({
      FullImageCard: true,
      imageUrl: img,
      currentIndex: ind,
    });
  }
  async showPrev(ind) {
    if (ind > 0) {
      let url = this.state.dummy[ind - 1].image_url;
      await this.setState({
        FullImageCard: true,
        imageUrl: url,
        currentIndex: ind - 1,
      });
    }

  }
  async showNext(ind) {
    if (ind < this.state.dummy.length - 1) {
      let url = this.state.dummy[ind + 1].image_url;
      await this.setState({
        FullImageCard: true,
        imageUrl: url,
        currentIndex: ind + 1,
      });
    }
  }
  async exitButton() {
    await this.setState({ FullImageCard: false });
  }
  render() {
    return (
      <Layout>
        <div className="gallery-color-scheme">
          <h1 className="text-5xl font-bold text-center mt-16 sm:text-7xl md:text-8xl">{this.state.title}</h1>
          {this.state.FullImageCard && (
            <div id="overlay">
              <div
                id="prevButton"
                className={
                  this.state.currentIndex == 0 ? "gallery-disabled" : ""
                }
                onClick={() => this.showPrev(this.state.currentIndex)}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
              <img src={this.state.imageUrl} style={{ width: '70%'}}/>
              <div
                id="nextButton"
                className={
                  this.state.currentIndex == this.state.dummy.length - 1
                    ? "gallery-disabled"
                    : ""
                }
                onClick={() => this.showNext(this.state.currentIndex)}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
              <div id="exitButton" onClick={() => this.exitButton()}>
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
          )}

          <div className="image-container-background">
            <div className="gallery-grid">
              {this.state.dummy.map((element, index) => (
                <div
                  className="gallery-item"
                  style={{ backgroundImage: `url(${element.thumb_image_url})` }}
                  onClick={() => this.showImage(element.image_url, index)}
                  key={index}
                >
                  <div className="gallery-item__details">{element.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

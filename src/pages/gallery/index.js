import React, { Component } from "react";
import "assets/styles/gallery.css";
import Layout from "components/UI/Layout/Layout";

let galleryCards = [
  {
    title: "SPEC",
    sub: "ELECTROTHON",
    link: "",
    img: `url('https://source.unsplash.com/random/?food')`,
  },
  {
    title: "SPEC",
    sub: "SPECFEST",
    link: "",
    img: `url('https://source.unsplash.com/random/?food')`,
  },
  {
    title: "SPEC",
    sub: "WORKSHOP",
    link: "",
    img: `url('https://source.unsplash.com/random/?food')`,
  },
  {
    title: "SPEC",
    sub: "EVENTS",
    link: "",
    img: `url('https://source.unsplash.com/random/?food')`,
  },
];

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  GalleryComponent = galleryCards.map((props) => {
    return (
      <div className="internal-con" key={props.img + Math.random()}>
        <div
          className="background"
          style={{ backgroundImage: props.img }}
        ></div>
        <div className="text">
          <div className="gallery-card-title-medium">{props.title}</div>
          <div className="gallery-card-title">{props.sub}</div>
          <div className="gallery-card-title-small">Gallery collection</div>
          <button className="btn-prime">Gallery</button>
        </div>
      </div>
    );
  });
  render() {
    return (
      <Layout>
        <div className="gallery-main">
          <div className="main-container">{this.GalleryComponent}</div>
        </div>
      </Layout>
    );
  }
}

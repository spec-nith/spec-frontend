import React, { Component } from "react";
import Layout from "components/UI/Layout/Layout";
import { Link } from "gatsby";
import "assets/styles/gallery.css";

export default class GallerySecondary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout >

          <h1 className="text-5xl font-bold text-center mt-16 sm:text-7xl md:text-8xl">Gallery</h1>

        <div className="mx-10 mt-28 xl:mx-28 grid gap-4 xl:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-2xl font-bold xl:text-3xl">
          <div className="w-58 h-120 lg:h-120 lg:row-span-2 bg-gray-400 object-center gallery-main-boxes" style={{ backgroundImage: `url('images/gallery/specfest.jpg')` }}>
            <div className="gallay-mainpage-inner">
              <Link to="/gallery/view/?page=SpecFest">
                <button className="text-2xl font-bold xl:text-3xl hover:bg-gray-100 hover:bg-opacity-20 text-white font-bold py-2 px-4 rounded">
                <h3>SPECFEST</h3>
                </button>
              </Link>
            </div>
          </div>

          <div className="w-58 h-60 bg-gray-400 object-scale-down gallery-main-boxes" style={{ backgroundImage:  `url('images/gallery/electrothon.jpg')` }}>
            <div className="gallay-mainpage-inner">
              <Link to="/gallery/view/?page=Electrothon">
              <button className="text-2xl font-bold xl:text-3xl hover:bg-gray-100 hover:bg-opacity-20 text-white font-bold py-2 px-4 rounded">
                <h3>ELECTROTHON</h3>
                </button>
              </Link>
            </div>
          </div>
          <div className="w-58 h-60 lg:col-span-2 bg-gray-400 object-cover gallery-main-boxes" style={{ backgroundImage: `url('images/gallery/workshop.jpg')` }}>
            <div className="gallay-mainpage-inner">
              <Link to="/gallery/view/?page=Workshop">
              <button className="text-2xl font-bold xl:text-3xl hover:bg-gray-100 hover:bg-opacity-20 text-white font-bold py-2 px-4 rounded">
                <h3>WORKSHOP</h3>
                </button>
              </Link>
            </div>
          </div>
          <div className="w-58 h-60 lg:col-span-3 bg-gray-400  object-cover gallery-main-boxes" style={{ backgroundImage: `url('images/gallery/random.jpg')` }}>
            <div className="gallay-mainpage-inner">
              <Link to="/gallery/view/?page=random">
              <button className="text-2xl font-bold xl:text-3xl hover:bg-gray-100 hover:bg-opacity-20 text-white font-bold py-2 px-4 rounded">
                <h3>RANDOM</h3>
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-10"></div>
        </div>
        
      </Layout>
    );
  }
}

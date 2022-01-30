import React, { Component } from "react";
import Layout from "components/UI/Layout/Layout";
import { Link } from "gatsby";
import "assets/styles/gallery.css";
import Head from "assets/utils/helmet";

export default class GallerySecondary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
      <Head title="Gallery" />
      <Layout>
        <h1 className="text-5xl font-bold text-center mt-16 sm:text-7xl md:text-8xl">
          Gallery
        </h1>

        <div className="mx-16 mt-28 grid gap-4 xl:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-2xl font-bold xl:text-3xl">
          <div
            className="w-58 h-120 lg:h-120 lg:row-span-2 bg-gray-400 object-center gallery-main-boxes"
            style={{ backgroundImage: `url('images/gallery/specfest.jpg')` }}
          >
        <Link to="/gallery/view/?page=SpecFest" className="w-1/1 h-1/1 flex gallery-link k justify-center items-center hover:bg-gray-100 hover:bg-opacity-20">
            <div className="gallay-mainpage-inner">
              
                <button className="text-2xl font-bold xl:text-3xl  text-white font-bold py-2 px-4 rounded">
                  <h3>SPECFEST</h3>
                </button>
              
            </div>
          </Link>
          </div>

          <div
            className="w-58 h-60 bg-gray-400 object-scale-down gallery-main-boxes"
            style={{ backgroundImage: `url('images/gallery/electrothon.jpg')` }}
          >
              <Link to="/gallery/view/?page=Electrothon" className="w-1/1 h-1/1 flex gallery-link k justify-center items-center hover:bg-gray-100 hover:bg-opacity-20">
            <div className="gallay-mainpage-inner">
                <button className="text-2xl font-bold xl:text-3xl  text-white font-bold py-2 px-4 rounded">
                  <h3>ELECTROTHON</h3>
                </button>
            </div>
              </Link>
          </div>
          <div
            className="w-58 h-60 lg:col-span-2 bg-gray-400 object-cover gallery-main-boxes"
            style={{ backgroundImage: `url('images/gallery/workshop.jpg')` }}
          >
              <Link to="/gallery/view/?page=Workshop" className="w-1/1 h-1/1 flex gallery-link justify-center items-center hover:bg-gray-100 hover:bg-opacity-20 hover:">
            <div className="gallay-mainpage-inner">
                <button className="text-2xl font-bold xl:text-3xl  text-white font-bold py-2 px-4 rounded">
                  <h3>WORKSHOP</h3>
                </button>
            </div>
              </Link>
          </div>
          <div
            className="w-58 h-60 lg:col-span-3 bg-gray-400  object-cover gallery-main-boxes"
            style={{ backgroundImage: `url('images/gallery/random.jpg')` }}
          >
              <Link to="/gallery/view/?page=Random" className="w-1/1 h-1/1 flex gallery-link k justify-center items-center hover:bg-gray-100 hover:bg-opacity-20">
            <div className="gallay-mainpage-inner">
                <button className="text-2xl font-bold xl:text-3xl  text-white font-bold py-2 px-4 rounded">
                  <h3>RANDOM</h3>
                </button>
            </div>
              </Link>
          </div>
          <div className="mt-10"></div>
        </div>
      </Layout>
      </>
    );
  }
}

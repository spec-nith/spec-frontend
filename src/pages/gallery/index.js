<<<<<<< HEAD
import React, { Component } from "react";
import Layout from "components/UI/Layout/Layout";
import { Link } from "gatsby";
import "assets/styles/gallery.css";
=======
import React, { Component } from 'react';
import '../../assets/styles/gallery.css';
import axios from 'axios';
>>>>>>> 26fcad6ce42096f024d2390dcf854e8c1f408cbd

import { Link } from 'gatsby';

<<<<<<< HEAD
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
=======
let galleryCards = [{
    title: "SPEC",
    sub: "ELECTROTHON",
    link: "",
    img: `url('https://source.unsplash.com/random/?food')`
},
{
    title: "SPEC",
    sub: "SPECFEST",
    link: "",
    img: `url('https://source.unsplash.com/random/?food')`
},
{
    title: "SPEC",
    sub: "WORKSHOP",
    link: "",
    img: `url('https://source.unsplash.com/random/?food')`
},
{
    title: "SPEC",
    sub: "EVENTS",
    link: "",
    img: `url('https://source.unsplash.com/random/?food')`
}];

>>>>>>> 26fcad6ce42096f024d2390dcf854e8c1f408cbd

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
        };
    }
    async componentDidMount() {
        console.log("Mount running");
        await axios.get('https://spec-backend.herokuapp.com/api/team/')
          .then(response => {
            console.log(response.data)
            this.setState({ data: response.data });
          })
          .catch(err => {
            console.log(err)
          })
      }
    GalleryComponent = galleryCards.map((props) => {
        return (
            <div className="internal-con " key = {props.sub}>
                <div className="background" style={{ backgroundImage: props.img }}></div>
                <div className="text">
                    <div className="gallery-card-title-medium">{props.title}</div>
                    <div className="gallery-card-title">{props.sub}</div>
                    <div className="gallery-card-title-small">Image collection</div>
                    <button className="btn-prime"><Link to = {`/gallery/gallerysecondary/?name=${props.sub}`}>Gallary</Link></button>
                </div>
            </div>
        )
    });
    render() {
        return (
            <div className=" gallery-color-scheme">
                <h1>GALLERY</h1>
            <div className='gallery-main'>
                <div className="main-container">
                    {this.GalleryComponent}
                </div>
            </div>
<<<<<<< HEAD
          </div>
          <div className="w-58 h-60 lg:col-span-3 bg-gray-400  object-cover gallery-main-boxes" style={{ backgroundImage: `url('images/gallery/random.jpg')` }}>
            <div className="gallay-mainpage-inner">
              <Link to="/gallery/view/?page=Random">
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
=======
            </div>
        )
    }
>>>>>>> 26fcad6ce42096f024d2390dcf854e8c1f408cbd
}


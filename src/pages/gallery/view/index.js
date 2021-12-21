<<<<<<< HEAD
import React, { Component } from "react";
import Layout from "components/UI/Layout/Layout";
import axios from "axios";
import Gallery from "react-photo-gallery";
=======
import React, { Component, useState, useCallback } from "react";
import Layout from "components/UI/Layout/Layout";
import axios from "axios";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
>>>>>>> 26fcad6ce42096f024d2390dcf854e8c1f408cbd
import { photos } from "./photos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {galleryURL} from "../../../components/Routes";
import {
  faChevronRight,
  faChevronLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
<<<<<<< HEAD
import "assets/styles/gallery.css";
=======
import "../../../assets/styles/gallery.css";
>>>>>>> 26fcad6ce42096f024d2390dcf854e8c1f408cbd
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
            viewerIsOpen: false
<<<<<<< HEAD
        };
        
    }
    async componentDidMount() {
        let url = "/?event=" + this.state.title;
        if(this.state.title ==="Random"){
            url = "";
        }
        console.log(this.state.url);
        await axios
            .get(galleryURL + url)
            .then((response) => {
                let rs = response.data;
                function select(a,b){
                    if(a.year>b.year){
                        return 1;
                    }
                    else{
                        return -1;
                    }
                }
                rs.sort(select);
                console.log(rs);
=======

        };
    }
    async componentDidMount() {
        await axios
            .get("https://spec-backend.herokuapp.com/api/gallery/?event=" + this.state.title)
            .then((response) => {
                let rs = response.data;
>>>>>>> 26fcad6ce42096f024d2390dcf854e8c1f408cbd
                for (let i = 0; i < response.data.length; i++) {
                    rs[i].src = response.data[i].thumb_image_url;
                    rs[i].width = 3;
                    rs[i].height = 4;
                    if (i % 3 === 0) {
                        rs[i].width = 4;
                        rs[i].height = 3;
                    }
                    if (i % 2 === 1) {
                        rs[i].width = 3;
                        rs[i].height = 2;
                    }
                    else if (i % 2 === 0) {
                        rs[i].width = 4;
                        rs[i].height = 3;
                    }
                    if (i % 7 === 0) {
                        rs[i].width = 3;
                        rs[i].height = 4;
                    }
                    if (i % 5 === 0) {
                        rs[i].width = 6;
                        rs[i].height = 5;
                    }
                    if (i % 4 === 0) {
                        rs[i].width = 4;
                        rs[i].height = 2;
                    }
                }
<<<<<<< HEAD
                this.setState({ data: photos });
                console.log(photos);
=======
                
                this.setState({ data: photos });
                console.log(photos);


>>>>>>> 26fcad6ce42096f024d2390dcf854e8c1f408cbd
            })
            .catch((err) => {
                console.log(err);
            });
    }
<<<<<<< HEAD
    openLightbox = (event, { photo, index }) => {
        this.setState({ currentImage: index, viewerIsOpen: true })
        this.showImage(photo,index);
    };
    closeLightbox = () => {
        this.setState({ currentImage: 0, viewerIsOpen: false })
    };
    showImage = (img, ind) => {
        let url = this.state.data[ind].image_url;
        this.setState({
            FullImageCard: true,
            imageUrl: url,
=======

    openLightbox = (event, { photo, index }) => {
        console.log('awftsf');
        this.setState({ currentImage: index, viewerIsOpen: true })
        this.showImage(photo,index);

    };

    closeLightbox = () => {
        this.setState({ currentImage: 0, viewerIsOpen: false })

    };
    showImage = (img, ind) => {
        this.setState({
            FullImageCard: true,
            imageUrl: img,
>>>>>>> 26fcad6ce42096f024d2390dcf854e8c1f408cbd
            currentIndex: ind,
        });
    }
    showPrev = (ind) => {
        if (ind > 0) {
            let url = this.state.data[ind - 1].image_url;
            this.setState({
                FullImageCard: true,
                imageUrl: url,
                currentIndex: ind - 1,
            });
        }
<<<<<<< HEAD
    }
    showNext = (ind) => {
        if (ind < this.state.data.length - 1) {
            let url = this.state.data[ind + 1].image_url;
            this.setState({
                FullImageCard: true,
                imageUrl: url,
                currentIndex: ind + 1,
            });
        }
    }
    exitButton = () => {
        this.setState({ FullImageCard: false });
    }
    render() {
        return (
=======

    }
    showNext = (ind) => {
        if (ind < this.state.data.length - 1) {
            let url = this.state.data[ind + 1].image_url;
            this.setState({
                FullImageCard: true,
                imageUrl: url,
                currentIndex: ind + 1,
            });
        }
    }
    exitButton = () => {
        this.setState({ FullImageCard: false });
    }
    render() {

        return (
            
>>>>>>> 26fcad6ce42096f024d2390dcf854e8c1f408cbd
            <Layout>
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
<<<<<<< HEAD
                  this.state.currentIndex === this.state.data.length - 1
=======
                  this.state.currentIndex == this.state.data.length - 1
>>>>>>> 26fcad6ce42096f024d2390dcf854e8c1f408cbd
                    ? "gallery-disabled"
                    : "nextButton"
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
<<<<<<< HEAD
          
                <div className="mx-8 lg:mx-16 2xl:mx-32 mt-16 pb-32">
                    <Gallery photos={this.state.data} onClick={this.openLightbox} />
                <div className="mt-10"></div>
=======
                <div className="mx-32 my-16">

                    <Gallery photos={photos} onClick={this.openLightbox} />
                    <ModalGateway>
                        {/* {this.state.viewerIsOpen ? (
                            <Modal onClose={this.closeLightbox}>
                                <Carousel
                                    currentIndex={this.state.currentImage}
                                    views={photos.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: x.title
                                    }))}
                                />
                            </Modal>
                        ) : null} */}
                    </ModalGateway>

>>>>>>> 26fcad6ce42096f024d2390dcf854e8c1f408cbd
                </div>
            </Layout>
        );
    }
}


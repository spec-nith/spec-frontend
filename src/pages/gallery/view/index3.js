import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import Layout from "components/UI/Layout/Layout";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faChevronRight,
  faChevronLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "../../../assets/styles/gallery.css";
export default class Images extends Component {
    constructor(props) {
        super(props);
        this.state = {
          FullImageCard: false,
          imageUrl: null,
          currentIndex: 0,
          data: [],
          title: this.props.location.search.slice(6),
    
        };
      }
      async componentDidMount() {
        await axios
          .get("https://spec-backend.herokuapp.com/api/gallery/?event=" + this.state.title)
          .then((response) => {
                let rs = response.data;
            for(let i =0;i< response.data.length;i++) {
                rs[i].src = response.data[i].thumb_image_url;
                rs[i].width =3;
                rs[i].height = 4;
                if(i%3===0){
                    rs[i].width = 4;
                    rs[i].height = 3;
                }
                if(i%2===1){
                  rs[i].width = 3;
                  rs[i].height = 2;
                }
                else if(i%2===0){
                  rs[i].width = 4;
                  rs[i].height = 3;
                }
                if(i%7===0){
                    rs[i].width = 3;
                    rs[i].height = 4;
                  }
                if(i%5===0){
                    rs[i].width = 6;
                    rs[i].height = 5;
                }
                if(i%4===0){
                  rs[i].width = 4;
                  rs[i].height = 2;
                }
            }
            console.log(rs);
            this.setState({ data: rs });
            
            
          })
          .catch((err) => {
            console.log(err);
          });
      }
       showImage= async (img, ind)=> {
        await this.setState({
          FullImageCard: true,
          imageUrl: img,
          currentIndex: ind,
        });
      }
       showPrev =async (ind)=> {
        if (ind > 0) {
          let url = this.state.dummy[ind - 1].image_url;
          await this.setState({
            FullImageCard: true,
            imageUrl: url,
            currentIndex: ind - 1,
          });
        }
    
      }
      showNext= async(ind)=> {
        if (ind < this.state.dummy.length - 1) {
          let url = this.state.dummy[ind + 1].image_url;
          await this.setState({
            FullImageCard: true,
            imageUrl: url,
            currentIndex: ind + 1,
          });
        }
      }
      exitButton=async ()=> {
        await this.setState({ FullImageCard: false });
      }
      
      inLarge=(event,{index,photo})=>{
        console.log(index);
        this.setState({
          FullImageCard: true,
          imageUrl: photo.image_url,
          currentIndex: index,
        });
      }
    render() {
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
        return (
            <Layout>
          <h1 className="text-5xl font-bold text-center mt-16 sm:text-7xl md:text-8xl">{this.state.title}</h1>
          
                <div className="mx-32 my-16">

                    <Gallery photos={photos} direction={"row"} onClick={this.state.inLarge} />

                </div>
            </Layout>
        );
    }
}

// import React, { useState, useCallback } from "react";
// import { render } from "react-dom";
// import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";
// import { photos } from "./photos";

// export default function ImageGal() {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [viewerIsOpen, setViewerIsOpen] = useState(false);

//   const openLightbox = useCallback((event, { photo, index }) => {
//     setCurrentImage(index);
//     setViewerIsOpen(true);
//   }, []);

//   const closeLightbox = () => {
//     setCurrentImage(0);
//     setViewerIsOpen(false);
//   };

//   return (
//     <Layout>
//     <div>
      
//       <Gallery photos={photos} onClick={openLightbox} />
//       <ModalGateway>
//         {viewerIsOpen ? (
//           <Modal onClose={closeLightbox}>
//             <Carousel
//               currentIndex={currentImage}
//               views={photos.map(x => ({
//                 ...x,
//                 srcset: x.srcSet,
//                 caption: x.title
//               }))}
//             />
//           </Modal>
//         ) : null}
//       </ModalGateway>
//     </div>
//     </Layout>
//   );
// }



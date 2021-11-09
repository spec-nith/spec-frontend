import React, { Component , useState, useCallback } from "react";
import Layout from "components/UI/Layout/Layout";
import axios from "axios";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import "../../../assets/styles/gallery.css";
// export default class Images extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           FullImageCard: false,
//           imageUrl: null,
//           currentIndex: 0,
//           data: [],
//           title: this.props.location.search.slice(6),
    
//         };
//       }
//       async componentDidMount() {
//         await axios
//           .get("https://spec-backend.herokuapp.com/api/gallery/?event=" + this.state.title)
//           .then((response) => {
//                 let rs = response.data;
//             for(let i =0;i< response.data.length;i++) {
//                 rs[i].src = response.data[i].thumb_image_url;
//                 rs[i].width =3;
//                 rs[i].height = 4;
//                 if(i%3===0){
//                     rs[i].width = 4;
//                     rs[i].height = 3;
//                 }
//                 if(i%2===1){
//                   rs[i].width = 3;
//                   rs[i].height = 2;
//                 }
//                 else if(i%2===0){
//                   rs[i].width = 4;
//                   rs[i].height = 3;
//                 }
//                 if(i%7===0){
//                     rs[i].width = 3;
//                     rs[i].height = 4;
//                   }
//                 if(i%5===0){
//                     rs[i].width = 6;
//                     rs[i].height = 5;
//                 }
//                 if(i%4===0){
//                   rs[i].width = 4;
//                   rs[i].height = 2;
//                 }
//             }
//             console.log(rs);
//             this.setState({ data: rs });
            
            
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       }
       
//     render() {
      
//         return (
//             <Layout>
//           <h1 className="text-5xl font-bold text-center mt-16 sm:text-7xl md:text-8xl">{this.state.title}</h1>
          
//                 <div className="mx-32 my-16">

//                     <Gallery photos={photos} direction={"row"} onClick={this.state.inLarge} />

//                 </div>
//             </Layout>
//         );
//     }
// }


export default function ImageGal() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Layout>
        <h1 className="text-5xl font-bold text-center mt-16 sm:text-7xl md:text-8xl">something</h1>
    <div>
      
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
    </Layout>
  );
}



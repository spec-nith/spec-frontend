import React from "react";
// import GridLayout from 'react-grid-layout';
import "assets/styles/workshopcard.css";

export default function WorkshopCard({ shop }) {
  console.log(shop);
  return (
    <div>
      <div className="centerflipcards">
        <div className="square-flip">
          <div
            className="square"
            style={{ backgroundImage: `url(${shop.cover_url})` }}
          >
            <div className="square-container">
              <div className="align-center">
                <img src="" className="boxshadow" alt="" />
              </div>
              <h2 className="textshadow">{shop.venue}</h2>
              <h3 className="textshadow ">{shop.title}</h3>
            </div>
            <div className="flip-overlay"></div>
          </div>
          <div className="square2">
            <div className="square-container2">
              {/* <div className="align-center"></div> */}
              <h2>{shop.description}</h2>
            </div>
            <div className="flip-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

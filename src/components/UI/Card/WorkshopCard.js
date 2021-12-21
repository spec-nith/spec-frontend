import React from "react";
// import GridLayout from 'react-grid-layout';
import "assets/styles/workshopcard.css";

export default function WorkshopCard({ shop }) {
  console.log(shop);

  let modal = document.getElementById("my-modal");

  const handleopenbtn =() => {
    modal.style.display = "block";
  };

  const handleokbtn = ()=> {
    modal.style.display = "none";
  };

  window.onclick = (event)=>{
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  return (
    <>
      <div
        className="card relative flex items-end overflow-hidden p-4 w-4/5 text-center border-black-700 border-2 rounded-lg "
        style={{ backgroundImage: `url(${shop.cover_url})` }}
      >
        <div className="content relative flex flex-col items-center w-full p-4">
          <h2 className="title text-xl font-bold text-white">{shop.title}</h2>
          <p className="copy text-lg italic text-white"> At {shop.venue}</p>
          <button
            id="open-btn"
            onClick={handleopenbtn}
            className="btn cursor-pointer mt-6 text-xs font-bold uppercase text-white bg-black"
          >
            Read More
          </button>
        </div>
      </div>
      <div
        className="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20"
        id="my-modal"
      >
        <div className="relative top-20 mx-auto p-5 border w-5/12 rounded-md bg-white">
          <div className="mt-3 text-center">
            <h3 className="text-xl leading-6 font-medium text-red-700">
              {shop.title}
            </h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-lg text-black">{shop.description}</p>
            </div>
            <div className="items-center px-4 py-3">
              <button
                onClick={handleokbtn}
                id="ok-btn"
                className="px-4 py-2 bg-black text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-black-600 focus:outline-none focus:ring-2 focus:ring-green-300"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

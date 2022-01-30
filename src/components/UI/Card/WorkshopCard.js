import React from "react";
import { useState } from "react";
// import GridLayout from 'react-grid-layout';
import "assets/styles/workshopcard.css";

export default function WorkshopCard({ shop }) {
  console.log(shop);

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <section className="workshop-card-section">
        <div
          className="workshop-card relative flex items-end overflow-hidden p-4 text-center border-black-700 border-2 rounded-lg "
          style={{ backgroundImage: `url("${shop.cover_webp_url}")` }}         //./images/spec_workshop11.jpg
        >
          <div className="workshop-content relative flex flex-col items-center w-full p-4">
            <h2 className="workshop-title text-xl font-bold text-white">
              {shop.title}
            </h2>
            <p className="copy text-lg italic text-white"> At {shop.venue}</p>
            <button
              id="open-btn"
              onClick={() => setShowModal(true)}
              className="workshop-btn cursor-pointer mt-6 text-xs font-bold uppercase text-black bg-white rounded-sm hover:bg-green-400"
            >
              Read More
            </button>
          </div>
        </div>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="rounded-lg relative flex flex-col w-full shadow backdrop-filter backdrop-blur-xl outline-none focus:outline-none border-2 border-teal-400">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t text-center">
                    <h3 className="text-3xl font-semibold text-white">
                      {shop.title}
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-white opacity-2 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-white hover:text-green-500 opacity-2 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-white text-lg leading-relaxed">
                      {shop.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-white hover:text-black hover:bg-green-400 rounded-sm background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </section>
    </>
  );
}

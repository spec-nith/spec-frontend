import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const card = ({ vision }) => {
  return (
    <div className="flex items-center h-auto w-full flex-wrap lg:flex-nowrap mx-auto my-20 lg:my-10 text-black">
      <div
        className="w-full lg:w-4/5 h-full lg:h-96 rounded-lg shadow-2xl bg-white mx-6 lg:mx-0"
      >
        <div className="p-4 lg:p-12 md:p-8 text-center lg:text-left">
          <div
            className="block lg:hidden rounded-full shadow-xl mx-auto mt-16 md:mt-4 h-48 w-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${vision.image})` }}
          ></div>
          <h1 className="text-3xl font-bold pt-8 text-center lg:pt-0 md:whitespace-nowrap">{vision.name}</h1>
          <div className="mx-auto lg:mx-0 pt-3 border-b-2 border-green-500 opacity-25"></div>
          <div className="flex items-center justify-center lg:justify-start px-8">
            <div className="pt-4">
              <FontAwesomeIcon icon={faBriefcase} />
            </div>
            <div className="pt-4 pl-2">
              <p className="text-base font-bold">{vision.post}</p>
            </div>
          </div>
          <p className="leading-loose md:py-3 lg:py-6 lg:px-8 text-md text-justify">{vision.content}</p>
        </div>
      </div>
      <div className="w-full lg:w-2/5">
        <img
          src={vision.image}
          alt="pic"
          className="rounded-none object-cover h-80 lg:rounded-lg shadow-2xl hidden lg:block"
        />
      </div>
    </div>
  );
};
export default card;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const card = ({ vision }) => {
  return (
    <div className="max-w-4xl flex items-center h-auto lg:h-auto flex-wrap mx-auto my-20 lg:my-10">
      <div
        id="profile"
        className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
      >
        <div className="p-4 md:p-12 text-center lg:text-left">
          <div
            className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${vision.image})` }}
          ></div>
          <h1 className="text-3xl font-bold pt-8 lg:pt-0">{vision.name}</h1>
          <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
          <div className="flex items-center justify-center lg:justify-start">
            <div className="pt-4">
              <FontAwesomeIcon icon={faBriefcase} />
            </div>
            <div className="pt-4 pl-2">
              <p className="text-base font-bold">{vision.post}</p>
            </div>
          </div>
          <p className="pt-8 text-md">{vision.content}</p>
        </div>
      </div>
      <div className="w-full lg:w-2/5">
        <img
          src={vision.image}
          alt="pic"
          className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
        />
      </div>
    </div>
  );
};
export default card;

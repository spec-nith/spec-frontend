import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const footer = () => (
  <footer className="pl-4 mt-24 divide-y bg-black text-white">
    <div className="container flex flex-col justify-around py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
      <div className="flex-1 lg:w-1/3 flex flex-col justify-center items-center">
        <img className="w-1/3" src="images/logo.png" alt="spec_logo" />
        <a href="/">
          <span className="text-center text-2xl font-monty">
            SEARCH PLAN ENGAGE CREATE
          </span>
        </a>
      </div>
      <div className="flex-1">
        <h1 className="text-center text-4xl pr-4">Get in Touch</h1>
        <div className="justify-center mt-6">
          <div className="rounded-md">
            <div className="max-w-screen-xl pr-8 grid gap-x-24 gap-y-8 grid-cols-1 mx-auto">
              <textarea
                className="w-full h-32 content-theme  mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                placeholder="Enter your query"
                aria-label="Enter your query"
              />

              <button className="p-3 border-2 border-gray-900 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black ">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-around pt-5 pb-10 border-t border-gray-900 sm:flex-row">
      <a
        className="transform hover:-translate-y-1 duration-300 text-xl"
        href="mailto:spec@nith.ac.in"
      >
        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
        spec@nith.ac.in
      </a>
      <div className="flex items-center mt-4 space-x-4 sm:mt-0">
        <a href="/" title="Facebook" className="flex items-center p-1">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="/" title="LinkedIn" className="flex items-center p-1">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="/" title="Twitter" className="flex items-center p-1">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="/" title="Instagram" className="flex items-center p-1">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </div>
  </footer>
);
export default footer;

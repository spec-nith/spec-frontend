// Components
import React from "react";
import { useForm } from "@formspree/react";
// Icons and Styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Constants, JSONs and Assests

const Footer = () => {
  const [state, handleSubmit] = useForm("xgedaoke");
  let formInput = (
    <form onSubmit={handleSubmit}>
      <div className="justify-center mt-6 rounded-md">
        <div className="max-w-screen-xl pr-4 md:pr-8 grid gap-x-24 gap-y-8 grid-cols-1 mx-auto">
          <textarea
            id="message"
            name="message"
            className="w-full h-32 text-black mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Enter your query"
            aria-label="Enter your query"
          />
          <button
            className="p-3 border-2 border-gray-900 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black "
            type="submit"
            disabled={state.submitting}
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
  if (state.succeeded) {
    formInput = (
      <div className="flex items-center h-full rounded-md">
        <div className="pr-4 md:pr-8 mx-auto">
          <h1 className="text-4xl lg:text-5xl text-gray-200 m-auto">
            Thank you !!
          </h1>
        </div>
      </div>
    );
  }

  return (
    <footer className="divide-y bg-transparent text-white ">
      <div className="bg-zinc-800">
        <div className="max-w-screen-xl md:mt-4 px-8 grid gap-x-24 gap-y-8 grid-cols-1 md:grid-cols-2 md:px-12  md:py-16 mx-auto ">
          <div className="flex flex-col justify-center items-center">
            <img className="w-1/2" src="/images/logo.png" alt="spec_logo" />
            <div className="text-center text-2xl font-monty mt-4">
              SEARCH PLAN
              <br className="block md:hidden" /> ENGAGE CREATE
              <div className="flex justify-center mt-4">
                <a
                  className="transform hover:-translate-y-1 duration-300 text-xl"
                  href="mailto:spec@nith.ac.in"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  spec@nith.ac.in
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-screen-xl md:mt-4 grid-cols-1 md:grid-cols-2 w-full sm:px-8  text-gray-900 px-2 mt-10 sm:mt-0">
            <form onSubmit={handleSubmit}>
              <div>
                <label
                  className="uppercase text-sm text-white font-bold"
                  htmlFor="Name"
                ></label>
                <div className="flex flex-col gap-4 px-0 py-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11"
                    viewBox="0 0 20 20"
                    fill="gray"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    className="pl-10 w-full text-white p-1 focus:outline-none focus:shadow-outline bg-transparent border-b-2  border-zinc-400 text-lg hover:border-white"
                    type="text"
                    placeholder="Name"
                    name="Name"
                    id="Name"
                  />
                </div>
              </div>
              <div className="mt-8">
                <label
                  className="uppercase text-sm text-gray-100 font-bold"
                  htmlFor="Sender"
                ></label>
                <div className="flex flex-col gap-4 px-0 py-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="font-medium text-2xl text-gray-400 absolute p-2.5 px-3 w-11"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                  <input
                    className="pl-10 w-full text-white p-1 focus:outline-none focus:shadow-outline bg-transparent border-b-2  border-zinc-400 text-lg hover:border-white"
                    type="email"
                    placeholder="Email"
                    name="Sender"
                    id="Sender"
                  />
                </div>
              </div>
              <div className="mt-8">
                <label
                  className="uppercase text-sm text-gray-100 font-bold"
                  htmlFor="Message"
                ></label>
                <textarea
                  className="w-full h-44 text-white mt-2 p-3 focus:outline-none focus:shadow-outline bg-transparent border-2 rounded-lg border-zinc-400 text-lg hover:border-white"
                  name="Message"
                  placeholder="Message"
                  id="Message"
                ></textarea>
              </div>
              <div className="mt-8">
                <button
                  className="uppercase bg-zinc-500 hover:bg-zinc-600 text-gray-100 p-3 rounded-lg w-full "
                  type="submit"
                  disabled={state.submitting}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="md:flex justify-center gap-10 md:justify-around pt-5 pb-10 border-t border-gray-900">
          <div className="flex justify-center mt-4 space-x-2 md:space-x-4 sm:mt-0">
            <a
              href="https://www.facebook.com/spec.ece/"
              rel="noreferrer noopenor"
              target="_blank"
              className="text-xs flex items-center justify-center rounded-full border-2 border-white w-12 h-12 hover:bg-gray-200 hover:text-black"
            >
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/s-p-e-c-nith-40214b197/"
              rel="noreferrer noopenor"
              target="_blank"
              className="text-xs flex items-center justify-center rounded-full border-2 border-white w-12 h-12 hover:bg-gray-200 hover:text-black"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </a>
            <a
              href="https://twitter.com/SPEC__NITH"
              rel="noreferrer noopenor"
              target="_blank"
              className="text-xs flex items-center justify-center rounded-full border-2 border-white w-12 h-12 hover:bg-gray-200 hover:text-black"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://instagram.com/s.p.e.c_nith?utm_source=ig_profile_share&amp;igshid=1dd01jvv7xk83"
              rel="noreferrer noopenor"
              target="_blank"
              className="text-xs flex items-center justify-center rounded-full border-2 border-white w-12 h-12 hover:bg-gray-200 hover:text-black"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
        <div className="text-center border-transparent p-4 bg-black/2">
          © 2022, SPEC NITH
        </div>
      </div>
    </footer>
  );
};
export default Footer;

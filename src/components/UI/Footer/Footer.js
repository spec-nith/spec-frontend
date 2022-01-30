import React from "react";
import { useForm } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const [state, handleSubmit] = useForm("xgedaoke");
  let formInput=(

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
          <button className="p-3 border-2 border-gray-900 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black " type="submit" disabled={state.submitting}>
            Send
          </button>
        </div>
      </div>
    </form>);
if (state.succeeded) {
 formInput=(<div className="flex items-center h-full rounded-md">
  <div className="pr-4 md:pr-8 mx-auto">
    <h1 className="text-4xl lg:text-5xl text-gray-200 m-auto">Thank you !!</h1>
  </div>
</div>
    )
}

return(
  <footer className="pl-4 mt-24 divide-y bg-transparent text-white">

    <div className="max-w-screen-xl md:mt-4 px-8 grid gap-x-24 gap-y-8 grid-cols-1 md:grid-cols-2 md:px-12  md:py-16 mx-auto">
      <div className="flex flex-col justify-center items-center">
        <img className="w-1/2" src="images/logo.png" alt="spec_logo" />
        <div className="text-center text-2xl font-monty mt-4">
            SEARCH PLAN<br className="block md:hidden"/> ENGAGE CREATE
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
      <div className="w-full">
        <h1 className="text-center text-4xl pr-4">Get in Touch</h1>
        {formInput}
      </div>
    </div>
    <div className="md:flex justify-center gap-10 md:justify-around pt-5 pb-10 border-t border-gray-900">
      <div className="flex justify-center mt-4 space-x-2 md:space-x-4 sm:mt-0">
        <a href="https://www.facebook.com/spec.ece/"
          rel="noreferrer noopenor"
          target="_blank" className="text-xs flex items-center justify-center rounded-full border-2 border-white w-12 h-12 hover:bg-gray-200 hover:text-black">
          <FontAwesomeIcon icon={faFacebookF} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/s-p-e-c-nith-40214b197/"
          rel="noreferrer noopenor"
          target="_blank" className="text-xs flex items-center justify-center rounded-full border-2 border-white w-12 h-12 hover:bg-gray-200 hover:text-black">
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
        <a href="https://twitter.com/SPEC__NITH"
          rel="noreferrer noopenor"
          target="_blank" className="text-xs flex items-center justify-center rounded-full border-2 border-white w-12 h-12 hover:bg-gray-200 hover:text-black">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://instagram.com/s.p.e.c_nith?utm_source=ig_profile_share&amp;igshid=1dd01jvv7xk83"
          rel="noreferrer noopenor"
          target="_blank" className="text-xs flex items-center justify-center rounded-full border-2 border-white w-12 h-12 hover:bg-gray-200 hover:text-black">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </div>
    <div className="text-center border-transparent p-4 bg-black/2">
      © 2022, SPEC NITH
    </div>
  </footer>
  )};
export default Footer;
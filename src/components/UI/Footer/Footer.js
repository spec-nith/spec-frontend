import React from "react";
import { useForm } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const [state, handleSubmit] = useForm("mzbodbrg");
  let formInput=(
    <form onSubmit={handleSubmit}>
      <div className="justify-center mt-6 rounded-md">

        <div className="max-w-screen-xl pr-4 md:pr-8 grid gap-x-24 gap-y-8 grid-cols-1 mx-auto">
          <textarea
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
 formInput=(<div className="justify-center mt-6 rounded-md">

  <div className="max-w-screen-xl pr-4 md:pr-8 grid gap-x-24 gap-y-8 grid-cols-1 mx-auto">
    <h1 className="text-4xl lg:text-5xl text-gray-200 m-auto">Thank you !!</h1>
  </div>
</div>
    )
}

return(
  <footer className="pl-4 mt-24 divide-y bg-zinc-900 text-white">
    <div className="container flex flex-col justify-around py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
      <div className="flex-1 lg:w-1/3 flex flex-col justify-center items-center">
        <img className="w-1/3" src="images/logo.png" alt="spec_logo" />
        <a href="/" className="text-center text-2xl font-monty mt-4">
            SEARCH PLAN<br className="block md:hidden"/> ENGAGE CREATE
          </a>
      </div>
      <div className="flex-1 flex flex-col jusitfy-center">
        <h1 className="text-center text-4xl pr-4">Get in Touch</h1>
        {formInput}
      </div>
    </div>
    <div className="md:flex justify-center gap-10 md:justify-around pt-5 pb-10 border-t border-gray-900">
      <div className="flex justify-center">
      <a
        className="transform hover:-translate-y-1 duration-300 text-xl"
        href="mailto:spec@nith.ac.in"
      >
        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
        spec@nith.ac.in
      </a>
      </div>
      <div className="flex justify-center mt-4 space-x-2 md:space-x-4 sm:mt-0">
        <a href="https://www.facebook.com/spec.ece/"
          rel="noreferrer noopenor"
          target="_blank" className="text-1xl text-blue-600 fill-current">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/s-p-e-c-nith-40214b197/"
          rel="noreferrer noopenor"
          target="_blank" className="text-1xl text-blue-500 fill-current">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://twitter.com/SPEC__NITH"
          rel="noreferrer noopenor"
          target="_blank" className="text-1xl text-blue-300 fill-current">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://instagram.com/s.p.e.c_nith?utm_source=ig_profile_share&amp;igshid=1dd01jvv7xk83"
          rel="noreferrer noopenor"
          target="_blank" className="text-1xl text-pink-600 fill-current">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </div>
    
  </footer>
  )};
export default Footer;
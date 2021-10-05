import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function spec(props) {
  return (
    <div className="p-20 bg-orange-200">
      <div className="bg-white rounded-lg shadow-2xl md:flex">
        <img className="object-cover" src={props.imgsrc} alt="alumniImages" />
        <div className="p-6">
          <h2 className="font-bold text-xl md:text-3xl mb-2 text-orange-700">
            {props.name}
          </h2>
          <p className="text-orange-700 h-48">
            {props.company}
            <h3>{props.batch}</h3>
            
            <a
              href={props.linkedin_id}
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default spec;

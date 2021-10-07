import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function spec({ person }) {
  return (
    <div className="p-20 bg-orange-200">
      <div className="bg-white rounded-lg shadow-2xl md:flex">
        <img
          src={person.profile_pic_url}
          className="object-cover alumni_img"
          alt="alumniImages"
        />
        <div className="p-6 text-center space-y-2">
          <h2 className="font-bold text-xl md:text-3xl mb-2 text-orange-700">
            {person.name}
          </h2>
          <p className="text-orange-700 h-48 text-xl">
            {person.company}
            <h3>{person.batch}</h3>

            <a
              href={person.linkedin_id}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default spec;

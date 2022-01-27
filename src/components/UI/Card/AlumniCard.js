import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function spec({ person }) {
  return (
    <div className="card bg-opacity-100">
      <div className="font-monty">
        <div className="card_bg rounded-2xl overflow-hidden shadow-lg w-72 h-96">
          <img
            src={person.profile_pic_url}
            src="https://image.oppo.com/content/dam/oppo/product-asset-library/a/a93/v1/sec-4-img-3.jpg"
            // src="https://image.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg"
            className="w-80 h-72 object-fill"
            alt="img"
          />
          <div className=" bottom_text px-4 pt-1 w-auto ">
            <div className="text-left text-md">
              <ul className="">
                <div className="alumni_batch text-sm font-normal pb-2 text-gray-200">
                  {person.batch}
                </div>
                <li className="uppercase text-white font-bold">
                  {person.name}
                </li>
                <li className="uppercase font-normal text-xs text-gray-200">
                  {person.company}
                </li>
                <a
                  className="alumni_icon"
                  href={person.linkedin_id}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default spec;

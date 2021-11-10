import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function spec({ person }) {
  return (<div style={{margin:'10px'}}>
    <div className="">
      <div className="card rounded overflow-hidden shadow-lg w-64 h-72 border border-indigo-600">

        <img
          //  src={person.profile_pic_url}
          src="https://i.redd.it/aewgzghlaiq71.png"
          className="w-64 h-48 sm:h-48 object-fill"
          alt="img"
        />
        <div className=" text px-4 pt-1 w-auto ">
          <div className="name font-bold text-left text-md mt-1 mb-0">
          <ul className="pb-0">
          <li className="uppercase mb-1">{person.name}
          </li>
          <li className="uppercase font-normal text-xs">{person.company}</li>
          <div className="alumni_batch text-xs font-normal">{person.batch}
          </div>
          <a className="alumni_icon"
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

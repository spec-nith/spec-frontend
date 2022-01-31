import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faUserFriends,
  faUsers,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
function TeamCard(props) {
  return (
    <>
      <div className="font-monty  overflow-hidden flex flex-col justify-center w-72 lg:w-64  sticky  transition duration-500 transform hover:scale-105 mb-20">
        <div className="col-md-4 col-sm-6 col-xs-12 ">
          <article className="team-card Red relative h-0 mb-14 text-lg m-0 leading-6  ">
            <h2 className="absolute left-0 w-full pt-2 pb-1">
              <span className="text-base text-white px-4 block">
                {props.data.name}
              </span>
              <strong className=" text-gray-400 font-normal  team_post px-4 block pt-1 pb-3">
                {props.data.title == "Coordinator" ? (
                  <a className="text-white">
                    {" "}
                    <FontAwesomeIcon icon={faUsers} size="1x" />
                  </a>
                ) : props.data.title == "Executive" ? (
                  <a className="text-white">
                    {" "}
                    <FontAwesomeIcon icon={faUserFriends} size="1x" />
                  </a>
                ) : (
                  <a className="text-white">
                    {" "}
                    <FontAwesomeIcon icon={faUserTie} size="1x" />
                  </a>
                )}{" "}
                {props.data.title}
              </strong>
              <div className="team_socials">
                <div className="team_icons relative -top-20 pt-3 ">
                  <div>
                    {" "}
                    {props.data.github_id && (
                      <a
                        href={props.data.github_id}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {" "}
                        <div className="text-white hover:text-black hover:opacity-50 pb-3">
                          {" "}
                          <FontAwesomeIcon icon={faGithub} size="1x" />
                        </div>
                      </a>
                    )}
                  </div>
                  {props.data.linkedin_id && (
                    <a
                      href={props.data.linkedin_id}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div className="text-white hover:text-black hover:opacity-50">
                        {" "}
                        <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </h2>
            <div className="absolute top-0 right-0 bottom-4 left-4">
              <div className="overflow-hidden absolute top-0 left-0 w-full h-full">
                <img src={props.data.profile_pic_webp_url} alt={props.data.name} />
              </div>
            </div>
            <div>
              <a className="block relative float-left w-20 h-20"></a>
              <a className="block relative float-left w-20 h-20"></a>
              <a className="block relative float-left w-20 h-20"></a>
              <a className="block relative float-left w-20 h-20"></a>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
export default TeamCard;
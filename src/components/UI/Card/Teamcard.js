import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function TeamCard(props) {
  return (
    <>
      <div className="team_card 1 ">
        <div className="team_card_image">
          {" "}
          <img
            className="team_img"
            src={props.data.profile_pic_url}
            alt={props.data.name}
          />{" "}
        </div>
        <div className="team_card_title team_title-white">
          <p>{props.data.name}</p>
          {props.data.github_id && (
            <a
              href={props.data.github_id}
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              <FontAwesomeIcon icon={faGithub} size="1x" />
            </a>
          )}
          {props.data.linkedin_id && (
            <a
              href={props.data.linkedin_id}
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </a>
          )}
          <p className="team_post">{props.data.title}</p>
        </div>
      </div>
    </>
  );
}

export default TeamCard;

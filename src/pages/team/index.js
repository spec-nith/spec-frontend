// Components

import React, { Component } from "react";
import Layout from "components/Layout/Layout";
import axios from "axios";
import Loader from "react-loader-spinner";
import Head from "utils/helmet";

// Icons and Styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faUserFriends, faUsers, faUserTie, faFilter } from "@fortawesome/free-solid-svg-icons";
import "./teampage.css";

// Constants, JSONs and Assets
import { teamURL } from "utils/Routes";
const FinalYear = [
  "President",
  "Vice President",
  "Technical Lead",
  "Web Development Head",
  "Public Relation Head",
  "Finance Head",
];
const team_posts = ["Final Year", "Coordinator", "Executive", "Volunteer"];
const juniorPosts = ["Coordinator", "Executive", "Volunteer"];

const TeamCard = (props) =>{
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
                <img
                  src={props.data.profile_pic_webp_url}
                  alt={props.data.name}
                />
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

class TeamPage extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      wait: true,
      data: [],
      selected_post: 0,
    };
  }
  componentDidMount() {
    axios
      .get(teamURL)
      .then((response) => {
        this.setState({
          data: response.data.sort((a, b) => a.name.localeCompare(b.name)),
          wait: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: true });
      });
  }
  Selected_Post = (e) => {
    this.setState({ selected_post: e.target.value });
  };

  render() {
    if (this.state.wait) {
      return (
        <>
          <Head title="Team" />
          <Layout>
            <div className="flex h-90v justify-center items-center">
              <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={100000} // 10 secs wait until error message shows
              />
            </div>
          </Layout>
        </>
      );
    } else {
      return (
        <>
          <Head title="Team" />
          <Layout>
            <div className="flex m-4  md:mt-20 justify-end px-auto  z-10 ">
              <span className="mt-14 ml-2 mr-2 ">
                <FontAwesomeIcon icon={faFilter} size="1x" />
              </span>
              <select
                className="h-10 text-white bg-zinc-800  rounded-lg p-2 font-monty "
                onChange={this.Selected_Post}
              >
                <option value={0}>Team SPEC</option>
                {team_posts.map((obj) => (
                  <option value={obj}>{obj}</option>
                ))}
              </select>
            </div>
            <>
              <div
                className={
                  this.state.selected_post == 0 ||
                  this.state.selected_post == "Final Year"
                    ? "block"
                    : "hidden"
                }
              >
                {this.state.data.find((e) => FinalYear.includes(e.title)) ? (
                  <h1 className="font-monty text-white text-4xl text-center m-3 mb-16">
                    Final Year Members
                  </h1>
                ) : null}
                <section className=" pb-12 flex justify-center">
                  <div className="flex flex-row flex-wrap justify-center gap-4 ">
                    {FinalYear.map((obj) => (
                      <>
                        {this.state.data.map(
                          (element, index) =>
                            element.title === obj && (
                              <TeamCard data={element} key={element.id} />
                            )
                        )}
                      </>
                    ))}
                  </div>
                </section>
              </div>
              <div
                className={this.state.selected_post == 0 ? "block" : "hidden"}
              >
                {juniorPosts.map((obj) => (
                  <div>
                    {this.state.data.find((e) => e.title === obj) ? (
                      <h1 className="font-monty text-white text-4xl text-center m-3 mb-16">
                        {obj + "s"}
                      </h1>
                    ) : null}
                    <h1 className="font-monty text-white text-4xl text-center m-3 mb-16"></h1>
                    <section className="pb-12 flex justify-center">
                      <div className="flex flex-row flex-wrap justify-center gap-4 ">
                        {this.state.data.map(
                          (element, index) =>
                            element.title === obj && (
                              <TeamCard data={element} key={element.id} />
                            )
                        )}
                      </div>
                    </section>
                  </div>
                ))}
              </div>

              <div
                className={
                  this.state.selected_post == "Coordinator" ||
                  this.state.selected_post == "Executive" ||
                  this.state.selected_post == "Volunteer"
                    ? "block"
                    : "hidden"
                }
              >
                <div>
                  {this.state.data.find(
                    (e) => e.title === this.state.selected_post
                  ) ? (
                    <h1 className="font-monty text-white text-4xl text-center m-3 mb-16">
                      {this.state.selected_post + "s"}
                    </h1>
                  ) : null}
                  <h1 className="font-monty text-white text-4xl text-center m-3 mb-16"></h1>
                  <section className="pb-12 flex justify-center">
                    <div className="flex flex-row flex-wrap justify-center gap-4 ">
                      {this.state.data.map(
                        (element, index) =>
                          element.title === this.state.selected_post && (
                            <TeamCard data={element} key={element.id} />
                          )
                      )}
                    </div>
                  </section>
                </div>
              </div>
            </>{" "}
          </Layout>
        </>
      );
    }
  }
}
export default TeamPage;

// Import Components
import TeamCard from "components/UI/Card/Teamcard";
import React, { Component, useState } from "react";
import { teamURL } from "components/Routes";
import Layout from "components/UI/Layout/Layout";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loader-spinner";

// Import Styles
import "assets/styles/teampage.css";

// Import/Define Constants
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

class TeamPage extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      wait: true,
      data: [],
    };
  }
  componentDidMount() {
    axios
      .get(teamURL)
      .then((response) => {
        this.setState({
          data: response.data.sort((a, b) => a.name.localeCompare(b.name)),
          wait: false
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({error: true})
      });
  }
  Selected_Post = (e) => {
    this.setState({ selected_post: e.target.value });
  };
  render() {
    if (this.state.wait){
      return(
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

      )
    }
    else{
      return (
          <Layout>
            <div className="min-h-90v">
            <div className="flex justify-end mt-5">
              <span className="mt-16 p-3 rounded-lg ">
                {" "}
                <FontAwesomeIcon icon={faFilter} size="1x" />
              </span>
              <select
                onChange={this.Selected_Post}
                className="mt-16 mr-10 h-10 rounded-lg posts"
              >
                <option value={" "} className="team_post_option p-10">
                  Team Spec
                </option>
                {team_posts.map((obj) => (
                  <option value={obj} className="team_post_option p-10">
                    {obj}
                  </option>
                ))}
              </select>
            </div>
            {this.state.selected_post === "Final Year" ? (
              <>
                {" "}
                <div>
                  {this.state.data.find((e) => FinalYear.includes(e.title)) ? (
                    <h1 className="team_years text-white text-3xl text-center m-3">
                      {this.state.selected_post + " Members"}
                    </h1>
                  ) : null}
                  <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 pb-12 flex justify-evenly">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              </>
            ) : juniorPosts.includes(this.state.selected_post) ? (
              <>
                <div>
                  <h1 className="team_years text-white text-center text-3xl m-3">
                    {this.state.selected_post + "s"}
                  </h1>
                  <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 pb-12 flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {this.state.data.map(
                        (element, index) =>
                          element.title === this.state.selected_post && (
                            <TeamCard data={element} key={element.id} />
                          )
                      )}
                    </div>
                  </section>
                </div>
              </>
            ) : (
              <>
                <div>
                  {this.state.data.find((e) => FinalYear.includes(e.title)) ? (
                    <h1 className="team_years text-white text-3xl text-center m-3">
                      Final Year Members
                    </h1>
                  ) : null}
                  <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 pb-12 flex justify-evenly">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div>
                  {juniorPosts.map((obj) => (
                    <div>
                      {this.state.data.find((e) => e.title === obj) ? (
                        <h1 className="team_years text-white text-center text-3xl m-3">
                          {obj + "s"}
                        </h1>
                      ) : null}
                      <h1 className="team_years"></h1>
                      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 pb-12 flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              </>
            )}{" "}
            </div>
          </Layout>
      );
    }
  }
}
export default TeamPage;

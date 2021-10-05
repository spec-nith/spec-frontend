import TeamCard from "components/UI/Card/Teamcard";
import "assets/styles/teampage.css";
import React, { Component } from "react";
import { teamURL } from "components/Routes";
import Layout from "components/UI/Layout/Layout";
import axios from "axios";

class TeamPage extends Component {
  state = {
    dummy: [],
  };
  componentDidMount() {
    axios
      .get(teamURL)
      .then((response) => {
        this.setState({
          dummy: response.data.sort((a, b) => a.name.localeCompare(b.name)),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const finalYearPosts = [
      "President",
      "Vice President",
      "Web Development Head",
      "Public Relation Head",
      "Technical Lead",
      "Finance Head",
    ];
    const juniorPosts = ["Coordinator", "Executive"];
    return (
      <Layout>
        <h1>Final Year Members</h1>
        <div className="content">
          {finalYearPosts.map((obj) => (
            <>
              {this.state.dummy.map(
                (element, index) =>
                  element.title === obj && (
                    <TeamCard data={element} key={element.id} />
                  )
              )}
            </>
          ))}
        </div>

        {juniorPosts.map((obj) => (
          <div>
            <h1>{obj + "s"}</h1>
            <div className="content">
              {this.state.dummy.map(
                (element, index) =>
                  element.title === obj && (
                    <TeamCard data={element} key={element.id} />
                  )
              )}
            </div>
          </div>
        ))}
      </Layout>
    );
  }
}

export default TeamPage;

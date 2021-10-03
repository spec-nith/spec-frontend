import React, { Component } from "react";
import Workshopnavbar from "./Workshopnavbar";
import { worskhopURL } from "components/Routes";
import Layout from "components/UI/Layout/Layout";
import axios from "axios";

class Workshop extends Component {
  state = {
    dummy: [""],
  };
  componentDidMount() {
    axios
      .get(worskhopURL)
      .then((response) => {
        console.log(response.data);
        this.setState({ dummy: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Layout>
        <div className="bg-black">
          <div className="text-center font-serif ... text-7xl text-white">
            WORKSHOP
          </div>
          <Workshopnavbar dummy={this.state.dummy} color="grey" />
        </div>
      </Layout>
    );
  }
}

export default Workshop;

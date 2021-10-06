import React, { Component } from "react";
import Cards from "components/UI/Card/AlumniCards";
import axios from "axios";
import "assets/styles/alumni.css";
import Layout from "components/UI/Layout/Layout";
import { alumniURL } from "components/Routes";

class Alumni extends Component {
  state = {
    dummy: [],
  };
  componentDidMount() {
    axios
      .get(alumniURL)
      .then((response) => {
        this.setState({ dummy: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  

  render() {
    const year_of_grad =[...new Set(this.state.dummy.map(item => item.batch))].sort((a,b)=>a<b);
    return (
      <Layout>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-6xl font-bold text-gray-900 text-center">
              OUR ALUMNI
            </h1>
          </div>
        </header>

          {year_of_grad.map(obj => (
          <React.Fragment key={obj}>
            <div className="batch">{"Batch "+ obj}</div>
            <div className="grid md:grid-cols-2 gap-y-2 sm:grid-cols-1">
              {this.state.dummy.map(test => 
              test.batch === obj &&  <Cards
              person={test}
              key={test.id}
              
              />)}
            </div>
          </React.Fragment>
        ))}

      </Layout>
    );
  }
}

export default Alumni;

import React, { Component } from "react";
import { worskhopURL } from "components/Routes";
import Layout from "components/UI/Layout/Layout";
import axios from "axios";
import WorkshopCard from "../../components/UI/Card/WorkshopCard";

class Workshop extends Component {
  state = {
    dummy: [""],
  };
  componentDidMount() {
    axios
      .get(worskhopURL)
      .then((response) => {
        this.setState({ dummy: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Layout>
        <div>
          <div className="text-center font-serif text-7xl">WORKSHOP</div>
          <div>
            {this.state.dummy.map((element) => (
              <WorkshopCard key={element.id} shop={element} />
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Workshop;

// datTimeHandler=(dat)=>{
//   return new Date(dat).getFullYear();
//  }

// filtering function
// {this.props.dummy.filter(e=> this.datTimeHandler(e.event_date)==2021).map((element) => (

//   <WorkshopCompo
//        number={element.id}
//        workshopname={element.title}
//        content={element.description}
//        backgroundImage={element.cover_url}
//      />

// ))}

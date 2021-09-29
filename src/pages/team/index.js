import TeamCard from 'components/UI/Card/Teamcard';
import 'assets/styles/teampage.css';
import React,{ Component } from 'react';
import axInstance from 'components/axiosInstance';
import Layout from 'components/UI/Layout/Layout';

class TeamPage extends Component {
  state = {
    dummy: []
  }
  componentDidMount() {
    axInstance.get('team/')
      .then(response => {
        console.log(response.data)
        this.setState({ dummy: response.data });
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <Layout >
        <h1>Final Year Members</h1>
        <div className="content">
          {this.state.dummy.map(element => (<TeamCard
            name={element.name}
            post={element.title}
          />))}

        </div>
        <h1>Coordinators</h1>
        <div className="content">
          {this.state.dummy.map(element => (<TeamCard
            name={element.name}
            post={element.title} />))}
        </div>
        <h1>Executive Members</h1>
        <div className="content">
          {this.state.dummy.map(element => (<TeamCard
            name={element.name}
            post={element.title} />))}
        </div>
      </Layout>
    )
  }
}

export default TeamPage;

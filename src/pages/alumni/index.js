import React, { Component } from 'react';
import Cards from 'components/UI/Card/AlumniCards'
import axInstance from 'components/axiosInstance';
import 'assets/styles/alumni.css';
import Layout from 'components/UI/Layout/Layout';


class Alumni extends Component {
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
      <Layout>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-6xl font-bold text-gray-900 text-center">OUR ALUMNI</h1>
          </div>
        </header>
        <div className="batch">Batch 2020</div>
        <div className="grid md:grid-cols-2 gap-y-2 sm:grid-cols-1">
          {this.state.dummy.map(test => (<Cards
            name={test.name}
            key={test.name}
            imgsrc={test.profile_pic}
            company={test.company}
            batch={test.batch}
            link={test.link}
          />))}
        </div>
        <div className="batch">Batch 2019</div>
        <div className="grid md:grid-cols-2 gap-y-2 sm:grid-cols-1">
          {this.state.dummy.map(test => (<Cards
            name={test.name}
            key={test.name}
            imgsrc={test.profile_pic}
            company={test.company}
            batch={test.batch}
            link={test.link}
          />))}
        </div>
        <div className="batch">Batch 2018</div>
        <div className="grid md:grid-cols-2 gap-y-2 sm:grid-cols-1">
          {this.state.dummy.map(test => (<Cards
            name={test.name}
            key={test.name}
            imgsrc={test.profile_pic}
            company={test.company}
            batch={test.batch}
            link={test.link}
          />))}
        </div>
        <div className="batch">Batch Before 2018</div>
        <div className="grid md:grid-cols-2 gap-y-2 sm:grid-cols-1">
          {this.state.dummy.map(test => (<Cards
            name={test.name}
            key={test.name}
            imgsrc={test.profile_pic}
            company={test.company}
            batch={test.batch}
            link={test.link}
          />))}
        </div>
      </Layout>
    );
  }
}

export default Alumni;
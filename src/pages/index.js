import * as React from "react";
import Layout from "components/UI/Layout/Layout";
import ProjectCard from "components/UI/Card/ProjectCard";
import Contain from "components/UI/Container/Container";
import VisionCard from "components/UI/Card/VisionCard";
import { projectURL } from "components/Routes";
import axios from "axios";
import { data } from "assets/data/VisionData";

class Home extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    axios
      .get(projectURL)
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <Layout>
        <div className="relative">
          <Contain title="Dashboard" />
          <Contain
            title="WHO WE ARE?"
            text="SPEC is being run under the aegis of the Electronics and Communication Department, NIT Hamirpur. We at SPEC, organize various events, workshops, and competitions to pique the scientific temperament of the students. The society is reputed for conducting a national level hackathon: ELECTROTHON, one of the most ingenious and diverse hackathon. ELECTROTHON has been a budding ground to many mind-boggling ideas and inventions, a platform for the upcoming innovators and bold entrepreneurs. The event is majorly manifested by guest-talks, project exhibitions and a 48 hour grinding hackathon. It also conducts its yearly technical fest, SPEC FEST covering advancements and marvels of the tech world, along with a display of year-long projects. Comprising events, workshops and exhibitions that provide diverse opportunities for students to enlighten their inquisitive minds. Students work all year long in building projects, organising workshops and thriving to create a change. SPEC believes in giving a platform to the young, dynamic, eager to learn engineers to convert their theoretical knowledge into useful innovative projects."
          />
          <Contain title="WHAT WE DO?" />
          <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <div className="px-4 py-6 sm:px-0">
                <div className="rounded-lg h-auto grid lg:grid-cols-3 gap-x-3 gap-y-8 sm:grid-cols-1 md:grid-cols-2 justify-center">
                  {this.state.data.map((element) => (
                    <ProjectCard key={element.id} project={element} />
                  ))}
                </div>
              </div>
            </div>
          </main>
          <Contain title="OUR VISION" />
          <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <div className="px-4 py-6 sm:px-0">
                <div className="rounded-lg h-auto grid gap-x-10 sm:grid-cols-1 md:grid-cols-2 justify-center">
                  {data.map((element) => (
                    <VisionCard key={element.id} vision={element} />
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </Layout>
    );
  }
}
export default Home;

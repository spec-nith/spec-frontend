import * as React from "react";
import Layout from "components/UI/Layout/Layout";
import ProjectCard from "components/UI/Card/ProjectCard";
import Contain from "components/UI/Container/Container";
import About from "components/Home/About";
import { projectURL } from "components/Routes";
import axios from "axios";
import { data3 } from "assets/data/VisionData";
import { projects } from "assets/data/ProjectData";
import VisionCard from "components/UI/Card/VisionCard";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "assets/styles/CarouselStyle.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);


class Home extends React.Component {
  state = {
    data: [],
    pathName: this.props.location.pathname.split("/").pop(),
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
    const slider2 = (
      <AutoplaySlider
        play={true}
        cancelOnInteraction={true}
        interval={5000}
        organicArrows={false}
      >
        {data3.map((element) => (
          <div className="bg-black h-auto">
            <VisionCard key={element.id} vision={element} />
          </div>
        ))}
      </AutoplaySlider>
    );
    return (
      <Layout curLocation={this.state.pathName}>
        <div className="relative">
          <Contain title="SOCIETY FOR PROMOTION OF ELECTRONICS CULTURE" />
          <div className="max-w-7xl mx-auto pt-6 pb-20 sm:px-6 lg:px-8">
            <About />
          </div>
          <Contain title="WHAT WE DO?" />
          <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex justify-center">
              <div className="px-4 py-6 sm:px-0">
                <div className="rounded-lg h-auto grid lg:grid-cols-3 gap-x-14 gap-y-20 sm:grid-cols-1 md:grid-cols-2 justify-center">
                  {projects.map((element) => (
                    <ProjectCard key={element.id} project={element} />
                  ))}
                </div>
              </div>
            </div>
          </main>
          <main>
            <div className="max-w-5xl mx-auto py-6 pb-24 sm:px-6 lg:px-8">
              {slider2}
            </div>
          </main>
        </div>
      </Layout>
    );
  }
}
export default Home;

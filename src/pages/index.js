import * as React from "react";
import Layout from "components/UI/Layout/Layout";
import ProjectCard from "components/UI/Card/ProjectCard";
import About from "components/Home/About";
import { projectURL } from "components/Routes";
import axios from "axios";
import { visionData } from "assets/data/VisionData";
import { projects } from "assets/data/ProjectData";
import VisionCard from "components/UI/Card/VisionCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";



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
      <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{delay: 4000}}
            spaceBetween={0}
            slidesPerView={1}
          >
            {visionData.map((element, index) => {
              return (
                <SwiperSlide>
                  <VisionCard key={element.id} vision={element} />
                </SwiperSlide>
              );
            })}
          </Swiper>
    );
    return (
      <Layout curLocation={this.state.pathName}>
        <div className="relative">
          <div className="max-w-7xl mx-auto pt-6 sm:px-6 lg:px-8">
            <About />
          </div>
          <div className="mt-24">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-6xl font-outfit text-center">What <span className="text-rose-500">WE</span> do?</h1>
            </div>
              <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex justify-center">
                  <div className="px-4 py-6 sm:px-0 rounded-lg h-auto grid gap-x-12 lg:gap-x-36 gap-y-24 sm:grid-cols-1 md:grid-cols-2 justify-center">
                    {projects.map((element) => (
                      <ProjectCard key={element.id} project={element} />
                    ))}
                  </div>
              </div>
          </div>
          <div className="mt-24">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-6xl font-outfit text-center"><span className="text-rose-500">Our</span> Vision</h1>
            </div>
              <div className="max-w-5xl mx-auto py-6 sm:px-6 lg:px-8">
                {slider2}
              </div>
          </div>
        </div>
      </Layout>
    );
  }
}
export default Home;

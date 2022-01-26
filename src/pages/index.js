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
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";


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
            autoplay={{delay: 2500}}
            spaceBetween={0}
            slidesPerView={1}
          >
            {data3.map((element, index) => {
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
          <Contain title="SOCIETY FOR PROMOTION OF ELECTRONICS CULTURE" />
          <div className="max-w-7xl mx-auto pt-6 pb-20 sm:px-6 lg:px-8">
            <About />
          </div>
          <Contain title="What WE do?" >
          <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex justify-center">
              <div className="px-4 py-6 sm:px-0">
                <div className="rounded-lg h-auto grid gap-x-36 gap-y-24 sm:grid-cols-1 md:grid-cols-2 justify-center">
                  {projects.map((element) => (
                    <ProjectCard key={element.id} project={element} />
                  ))}
                </div>
              </div>
            </div>
          </main>
          </Contain>
          <Contain title="Our Vision?">
          <main>
            <div className="max-w-5xl mx-auto py-6 pb-24 sm:px-6 lg:px-8">
              {slider2}
            </div>
          </main>
          </Contain>
        </div>
      </Layout>
    );
  }
}
export default Home;

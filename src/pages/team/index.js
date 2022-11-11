// Components
import React, { useState } from "react";
import Layout from "components/Layout/Layout";
import Head from "utils/helmet";
import Filter from "utils/filters";

// Icons and Styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./teampage.css";
import GenericPage from "../../pageBoiler";

// Constants, JSONs and Assets
import { teamURL } from "utils/routes";

const TeamCard = ({ data }) => {
  return (
    // <div className="px-4 w-full">
    //   <div className="w-full h-full profile-backdrop md:bg-slate-900 relative flex items-center justify-center md:justify-start flex-col md:flex-row">
    //     <div className="max-h-56 w-3/5 md:max-w-2/5 overflow-hidden border-2 shadow-lg shadow-indigo-500/50 rounded-full md:rounded-none profile-pic relative bg-gray-300 mt-8 md:my-0">
    //       <picture>
    //         <source srcSet={data.profile_pic_webp_url} type="image/webp" />
    //         <img
    //           src={data.profile_pic_url}
    //           alt={data.name + "_pic"}
    //           className="h-[12rem] w-[12rem] object-cover"
    //         />
    //       </picture>
    //     </div>
    //     <div className="h-full w-full md:w-3/5 md:pt-4 md:pb-2 md:pt-0 bg-white md:bg-inherit text-black md:text-white flex flex-col justify-center items-center">
    //       <span className="text-xl block">{data.name}</span>
    //       <span className="text-lg block">{data.title}</span>
    //     </div>
    //   </div>
    //   <div className="w-full bg-white text-black px-4 flex justify-end text-2xl">
    //     <span className="px-2 py-2">
    //       <a href={data.linkedin_id} rel="noopener noreferrer" target="_blank">
    //         <FontAwesomeIcon
    //           icon={faLinkedinIn}
    //           className="text-blue-400 hover:text-blue-700 transition-all"
    //         />
    //       </a>
    //     </span>
    //     <span className="px-2 py-2">
    //       <a href={data.github_id} rel="noopener noreferrer" target="_blank">
    //         <FontAwesomeIcon
    //           icon={faGithub}
    //           className="text-gray-500 hover:text-black transition-all"
    //         />
    //       </a>
    //     </span>
    //   </div>
    // </div>
    <div className="flex flex-col card-back rounded-lg mx-2">
          <div className="card-header mx-4 -mt-6">
          
              <img
                className="w-auto rounded-lg  object-cover w-[16rem] h-[16rem] xs:w-[20rem] xs:h-[20rem] lg-[18rem] lg:h-[18rem]"
                           src={data.profile_pic_url}
              alt={data.name + "_pic"}
              />
          
          </div>
          <div className="card-body mt-4">
          
              <h4 className="font-semibold text-xl">{data.name}</h4>
            <p className="text-lg">{data.title}</p>
           
            <div className=" mt-2 w-full rounded-b-lg bg-white text-black px-4 flex justify-end text-2xl">
       <span className="px-2 py-2">
         <a href={data.linkedin_id} rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon
              icon={faLinkedinIn}
              className="text-blue-400 hover:text-blue-700 transition-all"
            />
          </a>
        </span>
        <span className="px-2 py-2">
          <a href={data.github_id} rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-gray-500 hover:text-black transition-all"
            />
          </a>
        </span>
      </div>
          </div>
        </div>
  );
};

const MainBody = ({ data }) => {
  const [s_post, setPost] = useState("Team SPEC");
  const post_mapping = {
    "Team SPEC": [],
    "Final Year": [
      "President",
      "Vice President",
      "Web Development Head",
      "Developer Relations Head",
      "External Affairs Secretary",
      "Marketing And Strategy Analyst",
      "Treasurer",
    ],
    Coordinators: ["Coordinator"],
    Executives: ["Executive"],
    Volunteers: ["Volunteer"],
  };

  return (
    <>
      <div className="lg:m-12 lg:p-8">
        <Filter
          filter_keys={Object.keys(post_mapping)}
          displayChoice={s_post}
          setDisplayChoice={setPost}
          visibleChoices={5}
        />
        <div className="shade top-[63rem] left-[68rem] w-[80rem] h-[80rem]"></div>
        <div className="shade top-[123rem] left-[-56rem] w-[80rem] h-[80rem]"></div>
        <div className="shade top-[183rem] left-[68rem] w-[80rem] h-[80rem]"></div>
        <div className="shade top-[243rem] left-[-56rem] w-[80rem] h-[80rem]"></div>
        <div className="shade top-[303rem] left-[68rem] w-[80rem] h-[80rem]"></div>
        <div className="shade top-[363rem] left-[-56rem] w-[80rem] h-[80rem]"></div>
        <div className="shade top-[423rem] left-[68rem] w-[80rem] h-[80rem]"></div>
        <div className="px-2 xs:px-8">
          {Object.keys(post_mapping)
            .slice(1)
            .map((post) => (
              <div
                className={
                  "text-white text-4xl font-monty text-center transition-all duration-500 overflow-hidden h-fit " +
                  (post === s_post || s_post === "Team SPEC"
                    ? "h-auto"
                    : "max-h-0")
                }
                key={post}
              >
                <span className="HeroText">{post}</span>
                <div className="my-10 flex justify-center flex-wrap">
                  {post_mapping[post].map((post_name) => {
        
                    if(data.filter((person) => person.title === post_name).length===0) return <div className="text-white text-2xl"> Coming Soon </div>
                    else return data
                      .filter((person) => person.title === post_name)
                      .map((person) => (
                        <div
                          className="w-full md:w-1/2 lg:w-1/3 flex justify-center py-14"
                          key={person.name + "_pic"}
                        >
                          <TeamCard data={person} />
                        </div>
                      ));
                  })}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

class TeamPage extends GenericPage {
  constructor() {
    super();
    this.state.url = teamURL;
  }
  com;
  render() {
    this.state.data.sort((a, b) => a.name.localeCompare(b.name));
    return (
      <Layout>
        <Head title="Team" />
        {this.renderLoader()}
        {this.renderError()}
        {this.state.wait || this.state.error ? (
          ""
        ) : (
          <MainBody data={this.state.data} />
        )}
      </Layout>
    );
  }
}

export default TeamPage;

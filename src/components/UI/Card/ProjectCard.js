import React from "react";
const ProjectCard2 = ({ project }) => {
  return (
    <div className="text-gray-200 text-center max-w-sm px-4 bg-zinc-800 pb-6 px-3 rounded-3xl shadow-lg">
          <h4 className="pt-4 px-4 text-xl font-semibold uppercase leading-tight truncate">
            {project.title}
          </h4>
          <div className="mx-auto pt-3 border-b-2 w-4/5 border-yellow-500 opacity-25"></div>
          <div className="mt-4 pb-2 relative">
            <span className="text-md px-2 md:px-4 mb-8 block font-semibold">
              {project.content}
            </span>
            <span className="p-2 px-4 border-2 border-gray-500 rounded-md text-base hover:bg-gray-200 hover:border-black cursor-pointer hover:text-black">
              Explore
            </span>
            <img className={"h-36 absolute "+(project.class)} src={project.image} alt="project-vector"/>          
          </div>
    </div>
  );
};
export default ProjectCard2;

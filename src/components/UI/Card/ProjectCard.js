import React from "react";
const ProjectCard2 = ({ project }) => {
  return (
    <div className="text-gray-200 text-center max-w-sm px-4 bg-zinc-800 pb-6 px-3 rounded-3xl shadow-lg">
          <h4 className="pt-4 px-4 text-xl font-semibold uppercase leading-tight truncate">
            {project.title}
          </h4>
          <div className="mt-4 pb-2">
            <span className="text-md px-2 md:px-4 mb-8 block font-semibold">
              {project.content}
            </span>
            <span className="p-2 px-4 border-2 border-gray-500 rounded-md text-base hover:bg-black hover:border-gray-200 cursor-pointer hover:text-white">
              Explore
            </span>
          </div>
    </div>
  );
};
export default ProjectCard2;

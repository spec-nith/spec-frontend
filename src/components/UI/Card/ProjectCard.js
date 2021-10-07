import React from "react";

const card = ({ project }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg text-center">
    <img className="w-full" src={project.cover_url} alt="Project1" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{project.name}</div>
      <p className="text-gray-700 text-base">{project.description}</p>
      <div className="pt-12">
        <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
          PROJECTS
        </button>
      </div>
    </div>
  </div>
);
export default card;

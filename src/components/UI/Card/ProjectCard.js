import React from "react";
const ProjectCard2 = ({ project }) => {
    return (
            <div className="text-gray-900 relative max-w-sm">
                <div className="row-span-2 col-span-2 w-full">
                    <img src={project.image} alt=" random imgee" className="h-96 w-full object-cover object-center rounded-lg shadow-md" /></div>
                <div className="absolute top-2/4 px-4 row-span-2 col-span-2">
                    <div className="bg-white pb-6 px-3 rounded-lg shadow-lg">
                        <h4 className="pt-4 px-4 text-xl font-semibold uppercase leading-tight truncate">{project.title}</h4>
                        <div className="mt-4 pb-2">
                            <span className="text-md px-2 md:px-4 mb-8 block font-semibold">{project.content}</span>
                            <span className="p-2 px-4 border-2 border-gray-500 rounded-md text-base hover:bg-black hover:border-gray-200 cursor-pointer hover:text-white">Explore</span>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default ProjectCard2;
import React, { useState } from "react";
import { projects } from "@/assets/assets";
import Services from "./Services";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Recent Works</h4>
      <h2 className="text-center text-5xl font-Ovo">Projects</h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {visibleProjects.map(
          ({ title, description, link, image }) => (
            <div
              key={title}
              className="border border-gray-400 rounded-lg overflow-hidden hover:shadow-[4px_4px_0_#000] cursor-pointer transform transition-all duration-500 hover:-translate-y-1"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600 my-2">{description}</p>
                <a
                  href={link}
                  className="text-sm text-blue-600 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          )
        )}
      </div>

      {showAll && <Services />}

      {projects.length > 3 && (
        <div className="flex justify-center mt-8 sticky bottom-8 z-50">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-6 py-2 border border-gray-400 rounded-lg hover:shadow-[4px_4px_0_#000] hover:bg-amber-200 duration-300 bg-white shadow-md"
          >
            {showAll ? (
              <>
                Show Less <span className="text-xl">↑</span>
              </>
            ) : (
              <>
                Show More <span className="text-xl">↓</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
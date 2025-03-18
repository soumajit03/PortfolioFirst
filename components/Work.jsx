import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Work = () => {
  const [visibleProjects, setVisibleProjects] = useState(4); // State to control the number of visible projects

  // Function to handle "Show More" button click
  const showMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 4);
  };

  // Calculate how many projects remain hidden
  const hiddenProjects = workData.length - visibleProjects;

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My Latest Projects</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I thrive on creating scalable, efficient web applications and innovative
        solutions using cutting-edge technologies. With a solid foundation in
        software development and a keen interest in emerging tech trends, I
        enjoy building impactful projects in web development, AI/ML, and SaaS.
      </p>

      {/* Display only the visible projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 my-10">
  {workData.slice(0, visibleProjects).map((project, index) => (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      key={index}
    >
      <div
        className="relative group aspect-square bg-no-repeat bg-cover bg-center rounded-lg cursor-pointer"
        style={{ backgroundImage: `url(${project.bgImage})` }}
      >
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-11/12 sm:w-10/12 bg-white rounded-md py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
          <div>
            <h2 className="font-semibold">{project.title}</h2>
            <p className="text-sm text-gray-700">{project.description}</p>
          </div>
          <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
            <Image
              src={assets.send_icon}
              alt="send icon"
              className="w-5"
            />
          </div>
        </div>
      </div>
    </a>
  ))}
</div>


      {/* Show "Show More" button only if there are more projects to display */}
      {visibleProjects < workData.length && (
        <button
          onClick={showMoreProjects}
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-amber-400 duration-500"
        >
          Show More ({hiddenProjects} more projects)
          <Image
            src={assets.right_arrow_bold}
            alt="Right Arrow"
            className="w-4"
          />
        </button>
      )}
    </div>
  );
};

export default Work;

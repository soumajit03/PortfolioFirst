import { serviceData } from "@/assets/assets";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What are my Skills</h4>
      <h2 className="text-center text-5xl font-Ovo">My Skills</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I am Soumajit Choudhury, a passionate 3rd-year undergraduate skilled in
        JavaScript, HTML, CSS, Tailwind, Next.js, Node.js, DevOps,
        AI/ML,C++,C,Python, and creating scalable, efficient web applications
        with cutting-edge technologies.
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10">
        {serviceData.map(({ title, description, link }) => (
          <div
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-amber-200 hover:-translate-y-1 duration-500 relative h-[320px]"
            key={title} // Using title as unique key since titles should be unique
          >
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

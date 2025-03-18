import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "213a35de-c10a-4448-b8bc-661f90e0ad78");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Feel free to reach out if you'd like to collaborate on impactful
        projects or discuss innovative ideas. Whether it's about web
        development, AI/ML, SaaS solutions, or any exciting tech trend, I'm
        always open to connecting. . Let's create something amazing together!
      </p>

      <form onSubmit={onSubmit} className="max-w-3xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            className="w-full p-4 outline-none border border-gray-400 rounded-md bg-white"
            type="text"
            placeholder="Enter your name"
            required
            name="name"
          />
          <input
            className="w-full p-4 outline-none border border-gray-400 rounded-md bg-white"
            type="email"
            placeholder="Enter your email"
            required
            name="email"
          />
        </div>
        <textarea
          rows={6}
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border border-gray-400 rounded-md bg-white mb-6"
          name="message"
        ></textarea>
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
        >
          Submit now <Image src={assets.right_arrow_white} alt="" className="w-4"/>
        </button>

        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;

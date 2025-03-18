import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo} alt="" className="w-36 mx-auto mb-2" />

        <div className="flex w-max items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="" className="w-6" />
          soumajitchoudhury18@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>©️ 2025 Soumajit Choudhury. All rights reserved.</p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/soumajit03">
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/soumajit-choudhury-b68b08257?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8XBia6dYT1ykCwIBAU9fHg%3D%3D"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

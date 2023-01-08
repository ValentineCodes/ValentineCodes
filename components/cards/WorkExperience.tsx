import React from "react";
import { motion } from "framer-motion";

type Props = {
  companyName: string;
  companyLogo: string;
  role: string;
  skill_logos: string[];
  duration: string;
  accomplishments: string[];
};

function WorkExperience({
  companyName,
  companyLogo,
  role,
  skill_logos,
  duration,
  accomplishments,
}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src={companyLogo}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-2xl md:text-3xl font-light">{role}</h4>
        <p className="font-bold text-1xl md:text-2xl mt-1">{companyName}</p>
        <div className="flex space-x-2 my-2">
          {skill_logos.map((logo) => (
            <img
              key={logo}
              className="h-10 w-10 rounded-full"
              src={logo}
              alt=""
            />
          ))}
        </div>

        <p className="uppercase py-5 text-gray-300">{duration}</p>

        <ul className="list-disc space-y-4 ml-5 text-md md:text-lg">
          {accomplishments.map((accomplishment) => (
            <li key={accomplishment}>{accomplishment}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default WorkExperience;

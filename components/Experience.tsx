import React from "react";
import { motion } from "framer-motion";
import WorkExperience from "./cards/WorkExperience";
import WorkBackground from "../public/data/work-background.json";

type Props = {};

function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col justify-evenly items-center relative h-screen overflow-hidden text-left max-w-full px-10 mx-auto"
    >
      {/* <h3 className="mt-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3> */}

      <div className="w-screen flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#93e718]/80">
        {WorkBackground.map((background) => (
          <WorkExperience key={background.companyName} {...background} />
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;

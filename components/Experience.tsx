import React from "react";
import { motion } from "framer-motion";
import WorkExperience from "./cards/WorkExperience";

type Props = {};

function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col md:flex-row justify-evenly items-center relative h-screen overflow-hidden text-left max-w-full px-10 mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <WorkExperience />
        <WorkExperience />
        <WorkExperience />
      </div>
    </motion.div>
  );
}

export default Experience;

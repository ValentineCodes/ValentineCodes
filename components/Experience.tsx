import React from "react";
import { motion } from "framer-motion";

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
    </motion.div>
  );
}

export default Experience;

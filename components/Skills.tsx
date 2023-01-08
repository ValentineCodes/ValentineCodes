import React from "react";
import { motion } from "framer-motion";

import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col xl:flex-row relative text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Skills
      </h3>

      <div className="grid grid-cols-3 gap-10">
        <Skill img="/images/html_logo.png" title="HTML" />
        <Skill img="/images/css_logo.png" title="CSS" />
        <Skill img="/images/ts-js_logo.png" title="Typescript / Javascript" />
        <Skill img="/images/react_logo.png" title="React / React Native" />
        <Skill img="/images/firebase_logo.png" title="Firebase" />
        <Skill img="/images/github_logo.png" title="Git / Github" />
      </div>
    </motion.div>
  );
}

export default Skills;

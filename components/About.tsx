import React from "react";
import { motion } from "framer-motion";
type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About Me
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ uration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/images/wallpaper_1.jpeg"
        alt="Valentine Orga's handsome face"
        className="-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-32 md:h-45 xl:w-[300px] xl:h-[400px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">A little background</h4>
        <p className="text-base">
          What started out as a passion over 3 years ago has succeeded in being
          my career. The more I learn, the more I am able to do and the more
          exciting it gets and it is this very excitement that makes me get
          through the difficult times. Below you’ll find my experience and
          projects I’ve completed that showcase my skills and general background
          in software development.
        </p>
      </div>
    </motion.div>
  );
}

export default About;

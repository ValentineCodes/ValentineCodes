import React from "react";
import { motion } from "framer-motion";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/images/wallpaper_1.jpeg"
        alt="Valentine Orga's handsome face"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-2xl md:text-3xl font-light">
          Mobile App Developer
        </h4>
        <p className="font-bold text-1xl md:text-2xl mt-1">WhatIDo</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="/images/wallpaper_1.jpeg"
            alt="Valentine Orga's handsome face"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="/images/wallpaper_1.jpeg"
            alt="Valentine Orga's handsome face"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="/images/wallpaper_1.jpeg"
            alt="Valentine Orga's handsome face"
          />
        </div>

        <p className="uppercase py-5 text-gray-300">6/10/2022 - present</p>

        <ul className="list-disc space-y-4 ml-5 text-md md:text-lg">
          <li>Did some shii</li>
          <li>Did some shii</li>
          <li>Did some shii</li>
          <li>Did some shii</li>
          <li>Did some shii</li>
        </ul>
      </div>
    </article>
  );
}

export default WorkExperience;

import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        src="/images/wallpaper_1.jpeg"
        alt="Valentine Orga's handsome face"
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 xl:w-32 xl:h-32 filter"
      />
    </div>
  );
}

export default Skill;

import React from "react";

type Props = {
  img: string;
  title: string;
};

function Skill({ img, title }: Props) {
  return (
    <div className="group relative flex">
      <img
        src={img}
        className="rounded-full border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 filter"
        title={title}
      />
    </div>
  );
}

export default Skill;

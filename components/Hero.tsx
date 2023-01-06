import React from "react";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["I'm Valentine Orga", "Let's build together"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="/images/wallpaper_1.jpeg"
        alt="Valentine Orga's handsome face"
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 tracking-[15px]">
          Software Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10 py-5">
          <span>{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>

        <div>
          <Link href="#about">
            <button className="heroBtn">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroBtn">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroBtn">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroBtn">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;

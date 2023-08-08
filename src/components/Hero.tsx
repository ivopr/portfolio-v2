import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "@/../tailwind.config.js";
import BackgroundCircles from "@/components/BackgroundCircles";

import { urlForImage } from "../../sanity/lib/image";

const { theme } = resolveConfig(tailwindConfig);

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: [
      `Hi, the name's ${pageInfo?.name}`,
      "I make websites",
      "Mobile apps too",
      "At least, that's what I think",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen pt-14 w-full flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles
        image={
          pageInfo?.heroImage ? urlForImage(pageInfo?.heroImage).url() : ""
        }
      />
      <div className="z-20 w-full px-4">
        <h2 className="text-xs font-mono uppercase text-gray-500 pb-2 tracking-[10px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor={theme?.colors?.primary as string} />
        </h1>
        <div className="pt-5 grid grid-flow-row grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl mx-auto">
          <Link className="heroButton" href="#about">
            About
          </Link>
          <Link className="heroButton" href="#experience">
            Experience
          </Link>
          <Link className="heroButton" href="#skills">
            Skills
          </Link>
          <Link className="heroButton" href="#projects">
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;

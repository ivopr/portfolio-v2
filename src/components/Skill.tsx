import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { urlForImage } from "../../sanity/lib/image";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <motion.div
      initial={{
        x: directionLeft ? -50 : 50,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="relative group flex cursor-pointer h-12 w-12 xl:h-24 xl:w-24"
    >
      <Image
        alt=""
        className="rounded-full border border-primary border-opacity-50 p-1 h-10 w-10 xl:h-20 xl:w-20 filter group-hover:grayscale transition object-contain duration-300 ease-in-out"
        height={80}
        src={urlForImage(skill?.image).url()}
        width={80}
      />
      <div className="absolute flex justify-center items-center opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-primary h-10 w-10 xl:h-20 xl:w-20 rounded-full z-0">
        <p className="text-base xl:text-2xl font-bold text-white opacity-100">
          {skill?.progress}%
        </p>
      </div>
    </motion.div>
  );
}

export default Skill;

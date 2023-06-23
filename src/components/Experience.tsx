import React from "react";
import { motion } from "framer-motion";

import ExperienceCard from "@/components/ExperienceCard";

type Props = {
  experiences: Experience[];
};

function Experience({ experiences }: Props) {
  return (
    <motion.div
      className="h-screen pt-14 flex flex-col items-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <h3 className="uppercase tracking-[0.25em] text-center w-full text-gray-500 text-xl">
        Experience
      </h3>
      <div className="pt-4 h-[calc(100%-5rem)] md:h-[calc(100%-3rem)] w-full max-w-5xl flex overflow-x-scroll snap-x snap-mandatory px-4 md:px-0 pb-0 md:pb-2 gap-4">
        {experiences.map((experience) => (
          <ExperienceCard key={experience?._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;

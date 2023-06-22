import React from "react";
import { motion } from "framer-motion";

import Skill from "@/components/Skill";

type Props = {
  skills: Skill[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      className="relative h-[calc(100vh-3rem)] flex flex-col items-center overflow-hidden"
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
        Skills
      </h3>

      <h3 className="my-12 uppercase tracking-widest text-center text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-flow-row grid-cols-4 gap-5 px-4">
        {skills.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { urlForImage } from "../../sanity/lib/image";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      className="relative h-[calc(100vh-3rem)] flex w-full flex-col items-center overflow-hidden"
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
        Projects
      </h3>
      <div className="h-[calc(100%-5rem)] md:h-[calc(100%-3rem)] p-2 w-full max-w-5xl flex overflow-x-scroll snap-x snap-mandatory gap-4 z-20">
        {projects.map((project, index) => (
          <div
            className="w-full flex-shrink-0 snap-center overflow-y-hidden flex flex-col space-y-5 items-center justify-center p-4 xl:p-20"
            key={project?._id}
          >
            {project?.image ? (
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="h-fit w-2/3"
              >
                <Image
                  alt=""
                  className="h-fit w-2/3"
                  height={768}
                  src={urlForImage(project?.image).url()}
                  width={1024}
                />
              </motion.div>
            ) : null}

            <div className="space-y-4 xl:space-y-10 px-0 md:px-10">
              <h4 className="text-xl xl:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case study {index + 1} of {projects?.length}:
                </span>{" "}
                {project?.title}
              </h4>

              <p className="text-base xl:text-lg text-center md:text-left ">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[25%] bg-[#F7AB0A]/10 left-0 h-96 -skew-y-6" />
    </motion.div>
  );
}

export default Projects;

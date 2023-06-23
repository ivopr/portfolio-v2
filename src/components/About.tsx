import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { urlForImage } from "../../sanity/lib/image";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      className="h-screen pt-14 flex flex-col items-center space-y-4 xl:space-y-10"
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
        About
      </h3>
      <div className="h-full px-4 md:px-0 flex flex-col md:flex-row gap-4 items-center max-w-5xl w-full">
        {pageInfo?.profilePic ? (
          <motion.div
            className="flex-shrink-0 h-32 w-32 md:h-96 md:w-64 xl:w-80 xl:h-80"
            initial={{
              x: -200,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{ duration: 1.2 }}
          >
            <Image
              alt=""
              className="rounded-full md:rounded-lg object-cover h-32 w-32 md:h-96 md:w-64 xl:w-80 xl:h-80"
              height={320}
              src={urlForImage(pageInfo?.profilePic).url()}
              width={320}
            />
          </motion.div>
        ) : null}

        <div className="space-y-4 px-0 md:px-4">
          <h4 className="text-4xl font-semibold text-center md:text-left">
            Here is a{" "}
            <span className="underline decoration-[#F7A80A]/50">little</span>{" "}
            background
          </h4>
          <p className="text-base text-justify">
            {pageInfo?.backgroundInformation}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;

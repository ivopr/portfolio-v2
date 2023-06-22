import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { urlForImage } from "../../sanity/lib/image";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="bg-[#292929] p-4 flex snap-center flex-col rounded-lg text-left space-y-2 flex-shrink-0 w-9/12 md:w-1/3 h-full opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-24 w-24 mx-auto"
      >
        <Image
          alt=""
          className="h-24 w-24 rounded-full object-cover object-center"
          height={96}
          src={urlForImage(experience?.companyImage).url()}
          width={96}
        />
      </motion.div>

      <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
      <p className="font-bold text-2xl mt-1">{experience?.company}</p>
      <div className="flex space-x-2 my-2">
        {experience.technologies.map((tech) => (
          <Image
            alt=""
            className="h-10 w-10 rounded-full object-cover object-center"
            height={40}
            key={tech._id}
            src={urlForImage(tech?.image).url()}
            width={40}
          />
        ))}
      </div>
      <p className="uppercase py-5 text-gray-300">
        {Intl.DateTimeFormat("en-US", {
          dateStyle: "long",
        }).format(new Date(experience?.dateStarted))}{" "}
        -{" "}
        {experience?.isCurrentlyWorkingHere
          ? "Present"
          : Intl.DateTimeFormat("en-US", {
              dateStyle: "long",
            }).format(new Date(experience?.dateEnded))}
      </p>
      <div className="h-full overflow-y-scroll">
        <ul className="list-disc space-y-1 ml-5 text-lg">
          {experience?.points?.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;

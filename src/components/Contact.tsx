import React from "react";
import { useForm } from "react-hook-form";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

interface ContactFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Props = {
  pageInfo: PageInfo;
};

function Contact({ pageInfo }: Props) {
  const { handleSubmit, register } = useForm<ContactFormInput>();

  function onSubmit({ email, message, name, subject }: ContactFormInput) {
    window.location.href = `mailto:${pageInfo?.email}?subject=${subject}&body=Hi, my name is ${name}. ${message} (${email})`;
  }

  return (
    <motion.div
      className="h-screen pt-14 flex flex-col space-y-4 xl:space-y-10 items-center"
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
        Contact Me
      </h3>

      <div className="flex flex-col space-y-4 xl:space-y-10 px-5">
        <h4 className="text-4xl font-semibold text-center">
          Yes, you can{" "}
          <span className="decoration-primary/50 underline">talk</span> to me
        </h4>

        <div className="space-y-2">
          <div className="flex items-center space-x-5 justify-left2">
            <EnvelopeIcon className="text-primary h-7 w-7 animate-pulse" />
            <p className="text-xl">{pageInfo?.email}</p>
          </div>
        </div>

        <form
          className="flex flex-col space-y-2 w-full mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2 w-full">
            <input
              className="contactInput"
              placeholder="Name"
              type="text"
              {...register("name")}
            />
            <input
              className="contactInput"
              placeholder="Email"
              type="email"
              {...register("email")}
            />
          </div>

          <input
            placeholder="Subject"
            className="contactInput"
            type="text"
            {...register("subject")}
          />
          <textarea
            placeholder="Message"
            className="contactInput"
            {...register("message")}
          />

          <button
            type="submit"
            className="bg-primary/80 hover:bg-primary transition-colors duration-150 py-5 px-10 rounded-md text-white font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;

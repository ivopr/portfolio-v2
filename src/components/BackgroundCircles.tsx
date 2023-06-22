import React from "react";
import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <motion.div
      className="relative flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
    >
      <div className="absolute border border-[#333333] rounded-full h-40 w-40 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-60 w-60 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-72 w-72 animate-ping" />
      <div className="absolute border border-[#F7A80A]/20 rounded-full h-80 w-80 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-96 w-96 animate-ping" />
    </motion.div>
  );
}

export default BackgroundCircles;

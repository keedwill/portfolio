import React from "react";

import { HEAD_CONTENT } from "../utils";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childrenVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
             
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              src={"https://i.imgur.com/lKwYhGk.jpeg"}
              alt="Princewill Owoh"
              className="border md:w-[400px] w-[650px] border-stone-900 rounded-3xl"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center  lg:items-start mt-10"
          >
            <motion.h2
              variants={childrenVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-8xl"
            >
              Princewill Owoh
            </motion.h2>
            <motion.span
              variants={childrenVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Frontend Developer
            </motion.span>
            <motion.p
              variants={childrenVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              {HEAD_CONTENT}
            </motion.p>
            <motion.a
              variants={childrenVariants}
              href="/resume.pdf"
              rel="noreferrer nopener"
              download
              className="rounded-full bg-white p-4 text-sm text-stone-800 mb-10"
              target="_blank"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

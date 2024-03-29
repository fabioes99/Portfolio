"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

const HeroContent = () => {

  const handleDownload = () => {
    const pdfUrl = '/cv/Profile.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Profile.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row  items-center justify-center px-12 mt-40 w-full z-50 padding-mobile"

    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div className="text-white text-2xl font-bold">
          <TypeAnimation
            sequence={[
              "Fabio Simoes",
              2000,
              "Web Developer",
              2000,
              "Mobile Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project exprience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        <motion.div>
          
        </motion.div>
        <motion.div className="flex justify-evenly ">
          <motion.a
            href="#contact"
            variants={slideInFromLeft(1)}
            className="py-2 w-32 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Hire me!
          </motion.a>
          <motion.button
            onClick={handleDownload}
            variants={slideInFromLeft(1)}
            className="py-2 w-32 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Download CV
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
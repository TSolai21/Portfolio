"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Skill = ({ image, skill }) => {
  return (
    <>
      <motion.div className="flex group  flex-col justify-center items-center w-[calc(calc(100%/2)-1.25rem)]  md:w-[calc(calc(100%/4)-1.25rem)] lg:w-[calc(calc(100%/6)-1.25rem)] xl:lg:w-[calc(calc(100%/7)-1.25rem)] bg-secondary px-5 py-10 rounded-md ">
        <div className="">
          <Image
            src={image}
            height={50}
            width={50}
            alt="skill image"
            className=" rounded-xl  transition  "
          />
        </div>
        <p className="text-xl text-center transition text-grey whitespace-nowrap group-hover:scale-110 ">
          {skill}
        </p>
      </motion.div>
    </>
  );
};

export default Skill;

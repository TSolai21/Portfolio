"use client";
import Particle from "@/components/Particle";
import Skill from "@/components/Skill";
import { skills } from "@/helpers/skillsData";
import React from "react";
import { motion } from "framer-motion";
const page = () => {
  return (
    <>
      <main className="h-full w-full sm:p-20 p-12  overflow-hidden  z-10 relative">
        <div className="relative w-max ">
          <h1 className="text-white text-5xl uppercase text-center after:h-1 after:w-4/5  hover:after:w-full after:transition-all after:absolute after:bg-accent after:-bottom-1 after:left-0 content-['']">
            My Skills
          </h1>
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 1.5, staggerChildren: 0.04 }}
          className="flex justify-start  h-full  mt-5 gap-5 flex-wrap overflow-auto pb-8"
        >
          {skills.length &&
            skills.map((res, i) => {
              return <Skill key={i} image={res.image} skill={res.skill} />;
            })}
        </motion.div>
      </main>
    </>
  );
};

export default page;

"use client";
import Particle from "@/components/Particle";
import Skill from "@/components/Skill";
import { skills } from "@/helpers/skillsData";
import React from "react";
import { motion } from "framer-motion";
import SkillsTag from "@/components/SkillsTag";
const Page = () => {
  return (
    <>
      <main className="h-full w-full sm:p-20 p-12 max-md:overflow-scroll flex flex-col  overflow-hidden  z-10 relative">
        <div className="relative w-max ">
          <h1 className="text-white text-5xl uppercase text-center after:h-1 after:w-4/5  hover:after:w-full after:transition-all after:absolute after:bg-accent after:-bottom-1 after:left-0 content-['']">
            Expertise
          </h1>
        </div>

        <div className="flex max-md:flex-col items-center flex-grow">
          <div className="w-1/2 max-md:w-full">
            <SkillsTag skills={skills} />
          </div>

          <div className="w-1/2 max-md:w-full max-sm:flex-col  flex">
            <ul className="w-1/2 max-md:w-full">
              <li className="text-white my-3">
                <strong className="text-accent text-2xl  border-b pb-1">
                  Core Web Technologies
                </strong>

                <ul>
                  <li className="text-white my-3 text-xl">HTML</li>
                  <li className="text-white my-3 text-xl">CSS</li>
                </ul>
              </li>
              <li className="text-white my-3 text-xl">
                <strong className="text-accent text-2xl border-b pb-1">
                  Preprocessors and Frameworks
                </strong>
                <ul>
                  <li className="text-white my-3 text-xl">Sass</li>
                  <li className="text-white my-3 text-xl">Bootstrap</li>
                  <li className="text-white my-3 text-xl">Tailwind</li>
                </ul>
              </li>
              <li className="text-white my-3 text-xl">
                <strong className="text-accent text-2xl border-b pb-1">
                  Responsive Design
                </strong>
                <ul>
                  <li className="text-white my-3 text-xl">Responsiveness</li>
                </ul>
              </li>
              <li className="text-white my-3 text-xl">
                <strong className="text-accent text-2xl border-b pb-1">
                  Programming Languages
                </strong>
                <ul>
                  <li className="text-white my-3 text-xl">JavaScript</li>
                  <li className="text-white my-3 text-xl">TypeScript</li>
                </ul>
              </li>
            </ul>
            <ul className="w-1/2 max-md:w-full">
              <li className="text-white my-3 text-xl">
                <strong className="text-accent text-2xl border-b pb-1">
                  Libraries and Frameworks
                </strong>
                <ul>
                  <li className="text-white my-3 text-xl">JQuery</li>
                  <li className="text-white my-3 text-xl">React</li>
                  <li className="text-white my-3 text-xl">Next.js</li>
                  <li className="text-white my-3 text-xl">Angular</li>
                </ul>
              </li>
              <li className="text-white my-3 text-xl">
                <strong className="text-accent text-2xl border-b pb-1">
                  Animations and Motion
                </strong>
                <ul>
                  <li className="text-white my-3 text-xl">Framer Motion</li>
                </ul>
              </li>
              <li className="text-white my-3 text-xl">
                <strong className="text-accent text-2xl border-b pb-1">
                  State Management
                </strong>
                <ul>
                  <li className="text-white my-3 text-xl">Redux</li>
                </ul>
              </li>
              <li className="text-white my-3 text-xl">
                <strong className="text-accent text-2xl border-b pb-1">
                  Testing
                </strong>
                <ul>
                  <li className="text-white my-3 text-xl">Cypress</li>
                </ul>
              </li>
              <li className="text-white my-3 text-xl">
                <strong className="text-accent text-2xl border-b pb-1">
                  Version Control and Collaboration
                </strong>
                <ul>
                  <li className="text-white my-3 text-xl">Git</li>
                  <li className="text-white my-3 text-xl">GitHub</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;

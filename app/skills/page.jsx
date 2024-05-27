import Particle from "@/components/Particle";
import Skill from "@/components/Skill";
import { skills } from "@/helpers/skillsData";
import React from "react";
const page = () => {
  return (
    <>
      <main className="h-full w-full sm:p-20 p-12  overflow-hidden  z-10 relative">
        <div className="relative w-max ">
          <h1 className="text-white text-5xl uppercase text-center after:h-1 after:w-4/5  hover:after:w-full after:transition-all after:absolute after:bg-accent after:-bottom-1 after:left-0 content-['']">
            My Skills
          </h1>
        </div>
        <div className="flex items-center h-full  mt-5 gap-5 flex-wrap overflow-auto pb-8">
          {skills.length &&
            skills.map((res, i) => {
              return <Skill key={i} image={res.image} skill={res.skill} />;
            })}
        </div>
      </main>
    </>
  );
};

export default page;

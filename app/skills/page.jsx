import Particle from "@/components/Particle";
import Skill from "@/components/Skill";
import { skills } from "@/helpers/skillsData";
import React from "react";
const page = () => {
  return (
    <>
      <main className="h-full w-full p-[9vw] z-10 relative">
        <div className="relative w-max ">
          <h1 className="text-white text-4xl after:h-1 after:w-4/5  hover:after:w-full after:transition-all after:absolute after:bg-accent after:-bottom-1 after:left-0 content-['']">
            Expertise
          </h1>
        </div>
        <div className="flex items-center  mt-5 gap-5 flex-wrap">
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

import Particle from "@/components/Particle";
import Skill from "@/components/Skill";
import { skills } from "@/helpers/skillsData";
import React from "react";
const page = () => {
  console.log(skills);
  return (
    <>
      <main className="h-full w-full p-[9vw] z-10 relative">
        <h1 className="text-accent  text-4xl">Expertise</h1>
        <div className="flex items-center  mt-5 gap-5 flex-wrap">
          {skills.length &&
            skills.map((res) => {
              return <Skill image={res.image} skill={res.skill} />;
            })}
        </div>
      </main>
    </>
  );
};

export default page;

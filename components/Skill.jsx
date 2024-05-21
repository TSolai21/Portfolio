import Image from "next/image";
import React from "react";

const Skill = ({ image, skill }) => {
  return (
    <>
      <div className="flex flex-col justify-start items-center gap-3 w-[calc(100%/8)]">
        <div className="">
          <Image
            src={image}
            height={50}
            width={50}
            alt="skill image"
            className=" rounded-xl"
          />
        </div>
        <p className="text-xl text-grey">{skill}</p>
      </div>
    </>
  );
};

export default Skill;

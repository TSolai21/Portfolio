import Image from "next/image";
import React from "react";

const Skill = ({ image, skill }) => {
  return (
    <>
      <div className="flex group  flex-col justify-start items-center w-[calc(calc(100%/2)-1.25rem)] gap-3 md:w-[calc(calc(100%/4)-1.25rem)] lg:w-[calc(calc(100%/6)-1.25rem)] xl:lg:w-[calc(calc(100%/7)-1.25rem)] bg-secondary px-5 py-10 rounded-md ">
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
      </div>
    </>
  );
};

export default Skill;

import React from "react";

const page = () => {
  return (
    <>
      <main className="h-full w-full p-[9vw] z-10 relative">
        <div className="relative w-max ">
          <h1 className="text-white text-4xl after:h-1 after:w-4/5  hover:after:w-full after:transition-all after:absolute after:bg-accent after:-bottom-1 after:left-0 content-['']">
            Contact
          </h1>
        </div>
        <div className="flex items-center  mt-5 gap-5 flex-wrap"></div>
      </main>
    </>
  );
};

export default page;

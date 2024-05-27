import React from "react";
import { portfolio } from "@/helpers/Portfolio";
import PortfolioCard from "@/components/PortfolioCard";
const page = () => {
  return (
    <>
      <main className="h-full w-full sm:p-20 p-12  overflow-hidden  z-10 relative">
        <div className="relative w-max ">
          <h1 className="text-white uppercase text-5xl after:h-1 after:w-4/5  hover:after:w-full after:transition-all after:absolute after:bg-accent after:-bottom-1 after:left-0 content-['']">
            Portfolio
          </h1>
        </div>
        <div className="flex  h-full  mt-5 gap-5 flex-wrap overflow-auto pb-8">
          {portfolio.map(({ name, link, image }) => {
            return <PortfolioCard image={image} link={link} />;
          })}
        </div>
      </main>
    </>
  );
};

export default page;

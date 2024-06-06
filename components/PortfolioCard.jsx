import React from "react";
import Button from "./Button";
import { FaCode, FaEye } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
const PortfolioCard = ({ image, link }) => {
  return (
    <>
      <div className="w-[calc(calc(100%/2)-1.5vw)] group sm:w-[calc(calc(100%/3)-1.5vw)] md:w-[calc(calc(100%/4)-1.5vw)]  flex flex-col  overflow-hidden rounded-xl">
        <div className=" relative   h-[20em] ">
          <div className="h-full  absolute inset-0   bg-black opacity-0 bg-opacity-50 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-8">
            <Link
              target="_blank"
              href={link}
              className="  flex items-center justify-center translate-y-10 group-hover:translate-y-0 transition"
            >
              <FaEye className=" size-10 text-accent" />
            </Link>
            <Link
              target="_blank"
              href={"/"}
              className="   translate-y-10 group-hover:translate-y-0 transition flex items-center justify-center"
            >
              <FaCode className=" size-10 text-accent" />
            </Link>
          </div>
          <div className="h-full overflow-hidden">
            <Image
              src={image}
              width={"auto"}
              height={"auto"}
              alt="portfolio image"
              className=" object-contain"
            />
          </div>
        </div>
        <div className=" text-white p-4 sm:p-4  bg-black py-3 rounded-xl rounded-t-none">
          <h3 className="text-xl uppercase font-bold text-accent">
            Tech Stack
          </h3>
          <ul className="flex my-2  flex-wrap gap-5">
            <li className=" text-lg">Html</li>
            <li className=" text-lg">Css</li>
            <li className=" text-lg">Tailwind</li>
            <li className=" text-lg">React</li>
            <li className=" text-lg">Firebase</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;

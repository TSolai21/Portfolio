"use client";

import Button from "@/components/Button";
import Particle from "@/components/Particle";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="home p-8 flex justify-between items-center h-full w-full z-10 relative">
        <div className="flex flex-col h-full">
          <div className="">
            <p className=" text-grey font-cursive text-3xl sm:text-2xl">
              &lt;html&gt;
            </p>
            <p className=" text-grey font-cursive ml-2 text-3xl sm:text-2xl">
              &lt;body&gt;
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              delay: 1,
            }}
            className="content ml-10 flex-grow flex flex-col  justify-center"
          >
            <p className=" text-grey font-cursive ml-2 text-3xl sm:text-2xl mb-4">
              &lt;main&gt;
            </p>
            <h1 className="text-white sm:text-8xl text-6xl">
              Hi, <br />
              I&apos;m Solaikumar, <br /> web developer.
            </h1>
            <p className=" text-grey sm:text-2xl text-xl">
              Front End Developer{" "}
            </p>
            <Link
              className=" border rounded-md text-accent md:w-40 text-xl p-1 px-4 w-max mt-8 border-accent hover:bg-accent hover:text-primary transition text-center"
              href={"/projects"}
            >
              Projects
            </Link>

            <p className=" text-grey font-cursive ml-2 text-3xl sm:text-2xl mt-4">
              &lt;/main&gt;
            </p>
          </motion.div>

          <div className="">
            <p className=" text-grey font-cursive ml-2 text-3xl sm:text-2xl">
              &lt;/body&gt;
            </p>
            <p className=" text-grey font-cursive text-3xl sm:text-2xl">
              {" "}
              &lt;/html&gt;
            </p>
          </div>
        </div>
        <div className="hero">{/* <img src={hero} alt="hero image" /> */}</div>
      </div>
      <Particle />
    </>
  );
};

export default Home;

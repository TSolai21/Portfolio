import React from "react";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";

const page = () => {
  return (
    <>
      <main className="h-full w-full sm:p-20 p-12  overflow-hidden  z-10 relative">
        <div className="relative w-max ">
          <h1 className="text-white text-5xl uppercase after:h-1 after:w-4/5  hover:after:w-full after:transition-all after:absolute after:bg-accent after:-bottom-1 after:left-0 content-['']">
            Contact me
          </h1>
        </div>
        <div className="flex h-full flex-col-reverse sm:flex-row  mt-5 gap-5 overflow-auto pb-8">
          <form className=" flex flex-col gap-5 sm:w-1/2 w-full h-full">
            <input
              type="text"
              placeholder="Name"
              className="p-3 text-xl bg-secondary outline-none text-accent"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 text-xl bg-secondary outline-none text-accent"
            />
            <textarea
              placeholder="Message"
              className="p-3 text-xl bg-secondary outline-none text-accent flex-grow"
            ></textarea>
            <div className="w-full flex justify-end mt-5">
              <button
                type="submit"
                className=" border   rounded-md text-accent  text-xl p-2 px-4 w-max  border-accent hover:bg-accent hover:text-primary transition text-center"
              >
                Send Message
              </button>
            </div>
          </form>
          <div className=" sm:w-1/2 w-full">
            <Link
              href="tel:+919629192376"
              className="flex items-center text-accent gap-3 text-xl"
            >
              <IoCall className=" size-8 text-white" />
              <span>+919629192376</span>
            </Link>
            <Link
              href="mailTo:solaikumar.t@mgail.com"
              className="flex  text-accent items-center gap-3 text-xl mt-5 "
            >
              <IoIosMail className=" size-8 text-white" />
              <span>Solaikumar.t@gmail.com</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;

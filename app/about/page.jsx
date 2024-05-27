import Image from "next/image";
import solai from "@/public/images/solai.png";
import Link from "next/link";
import Particle from "@/components/Particle";
const page = () => {
  return (
    <>
      <main className="h-full w-full sm:p-20  p-10  z-10  overflow-auto">
        <div className="relative w-max  ">
          <h1 className="text-white uppercase text-5xl after:h-1 after:w-4/5  hover:after:w-full after:transition-all after:absolute after:bg-accent after:-bottom-1 after:left-0 content-['']">
            About Me
          </h1>
        </div>
        <div className="flex  mt-5  w-[100%] sm:w-[90%] justify-between items-center   flex-col-reverse md:flex-row relative  sm:gap-16 bg-secondary sm:p-10 p-7 rounded-xl ">
          <div className="flex flex-col h-full justify-center  sm:items-start items-center sm:text-left text-center w-full  md:w-3/5">
            <p className="text-white font-mono text-xl mt-3 ">
              I&apos;m Solaikumar, a Front-End Developer who loves making
              websites that people enjoy using. With 2 years of experience,
              I&apos;m really good with HTML, CSS, and JavaScript the building
              blocks of the web. I also know my way around React, Angular, and
              Next.js, which are like special tools for making websites even
              cooler. My goal is to create websites that are easy to use and
              look great, so everyone has a great time surfing the web.
            </p>
            <Link
              href={"/"}
              download
              className=" border rounded-md text-accent text-xl p-1 min-w-[8em] w-[8vw] mt-8 border-accent hover:bg-accent hover:text-primary transition text-center"
            >
              Download CV
            </Link>
          </div>
          <div className=" w-[15vw]  min-w-40 !max-h-90  relative   border-[15px] border-l-0 border-t-0  border-accent  rounded-full  overflow-hidden ">
            <Image
              src={solai}
              height={"auto"}
              width={"auto"}
              alt="solai image"
              className=" rounded-xl block object-contain grayscale pointer-events-none	"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default page;

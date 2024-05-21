import Image from "next/image";
import solai from "@/public/images/solai.jpg";
import Link from "next/link";
import Particle from "@/components/Particle";
const page = () => {
  return (
    <>
      <main className="h-full w-full p-[9vw] relative z-10">
        <div className="flex justify-start  gap-16 ">
          <div className="  relative after:rounded-xl after:bg-accent  after:content-[''] after:absolute after:block  after:h-full after:w-full after:top-[5%] after:-z-10 z-[20] after:right-[-10%] ">
            <Image
              src={solai}
              height={250}
              width={250}
              alt="solai image"
              className=" rounded-xl"
            />
          </div>
          <div className="flex flex-col h-full  w-1/2">
            <h1 className="text-accent text-4xl">About Me</h1>
            <p className="text-white font-mono text-xl mt-2 ">
              I'm Solaikumar, a Front-End Developer who loves making websites
              that people enjoy using. With 2 years of experience, I'm really
              good with HTML, CSS, and JavaScript – the building blocks of the
              web. I also know my way around React, Angular, and Next.js, which
              are like special tools for making websites even cooler. My goal is
              to create websites that are easy to use and look great, so
              everyone has a great time surfing the web.
            </p>
            <Link
              href={"/"}
              download
              className=" border rounded-md text-accent text-xl p-1 w-[8vw] mt-8 border-accent hover:bg-accent hover:text-primary transition text-center"
            >
              Download CV
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;

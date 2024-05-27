import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageAnimation from "@/components/PageAnimation";
import Reveal from "@/components/Reveal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Solaikumar",
  description:
    "I'm Solaikumar, a Front-End Developer with 2 years of experience, skilled in HTML, CSS, JavaScript, and proficient with React, Angular, and Next.js, dedicated to creating visually appealing and user-friendly websites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/public/images/logo.png"
      />

      <body className={inter.className}>
        <div className="app bg-primary h-[100vh] w-full flex">
          {/* <input id="toggler" type="checkbox" className="peer hidden" />
          <label
            htmlFor="toggler"
            className="sm:hidden  text-red-500 text-5xl p-2   fixed top-8 right-8 z-[99999]  flex flex-col gap-2"
          >
            <span className="h-1 w-14 bg-accent"></span>
            <span className="h-1 w-10 bg-accent"></span>
            <span className="h-1 w-14 bg-accent"></span>
          </label> */}

          <div className="  sm:z-1 w-50  h-full relative  peer-checked:translate-x-0 transition-all">
            <Header />
          </div>
          <Reveal />
          <PageAnimation>{children}</PageAnimation>
        </div>
      </body>
    </html>
  );
}

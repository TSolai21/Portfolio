"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
// import logo from "../assets/Images/logo.png";
import {
  FaCode,
  FaGithub,
  FaHome,
  FaLinkedinIn,
  FaRegUser,
} from "react-icons/fa";

const Header = () => {
  const navigations = [
    {
      name: "Home",
      icon: <FaHome size={"1.7vw"} />,
      to: "/",
    },
    {
      name: "about",
      icon: <FaRegUser size={"1.7vw"} />,
      to: "/about",
    },
    {
      name: "Home",
      icon: <FaCode size={"1.7vw"} />,
      to: "/skills",
    },
    {
      name: "Home",
      icon: <FaHome size={"1.7vw"} />,
      to: "/projects",
    },
    {
      name: "Home",
      icon: <FaHome size={"1.7vw"} />,
      to: "/contact",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn size={"1.3vw"} />,
      to: "/",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={"1.3vw"} />,
      to: "/",
    },
  ];
  const pathName = usePathname();
  return (
    <>
      <header className=" bg-secondary w-[4vw] flex flex-col justify-between items-center pb-5 h-full z-10 relative">
        <div className="logo size-10">
          {/* <img src={logo} alt="logo" /> */}
        </div>

        <nav>
          <ul className="flex flex-col gap-10">
            {navigations.map(({ to, icon }, i) => {
              const isActive = pathName === to;
              return (
                <li className="" key={i}>
                  <Link
                    href={to}
                    className={` hover:text-accent ${
                      isActive ? "text-accent" : "text-gray-500"
                    }`}
                  >
                    {icon}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <ul className="flex flex-col gap-6">
          {socialLinks.map((res, i) => {
            return (
              <li key={i}>
                <Link href={""} className=" text-gray-500 hover:text-accent">
                  {res.icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </header>
    </>
  );
};

export default Header;

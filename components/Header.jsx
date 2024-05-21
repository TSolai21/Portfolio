"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import logo from "@/public/images/logo.png";
import {
  FaCode,
  FaGithub,
  FaHome,
  FaLinkedinIn,
  FaRegUser,
} from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { MdContacts } from "react-icons/md";
import Image from "next/image";

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
      name: "Skills",
      icon: <FaCode size={"1.7vw"} />,
      to: "/skills",
    },
    {
      name: "Projects",
      icon: <CgWebsite size={"1.7vw"} />,
      to: "/projects",
    },
    {
      name: "Home",
      icon: <MdContacts size={"1.7vw"} />,
      to: "/contact",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn size={"1.3vw"} />,
      to: "https://www.linkedin.com/in/solaikumart21/",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={"1.3vw"} />,
      to: "https://github.com/TSolai21",
    },
  ];
  const pathName = usePathname();

  const [accent, setAccent] = useState("#08fdd8");
  const handleColor = (e) => {
    const { value } = e.target;
    setAccent(value);
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--accent-color", accent);
  }, [accent]);
  return (
    <>
      <header className=" bg-secondary w-[4vw] flex flex-col justify-between items-center pb-5 h-full z-10 relative">
        <Link href={"/"}>
          <div className=" size-20">
            <Image
              className="image"
              src={logo}
              width={"auto"}
              height={"auto"}
              alt="logo"
            />
          </div>
        </Link>

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
        <input
          onInput={handleColor}
          className="size-10 rounded-full  border-none cursor-pointer overflow-hidden appearance-none"
          type="color"
          value={accent}
        />
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

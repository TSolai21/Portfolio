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
import { IoColorPaletteOutline } from "react-icons/io5";

const Header = () => {
  const navigations = [
    {
      name: "Home",
      icon: <FaHome className=" size-8" />,
      to: "/",
    },
    {
      name: "about",
      icon: <FaRegUser className=" size-8" />,
      to: "/about",
    },
    {
      name: "Skills",
      icon: <FaCode className=" size-8" />,
      to: "/skills",
    },
    {
      name: "Projects",
      icon: <CgWebsite className=" size-8" />,
      to: "/projects",
    },
    {
      name: "Contact",
      icon: <MdContacts className=" size-8" />,
      to: "/contact",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn className=" size-6" />,
      to: "https://www.linkedin.com/in/solaikumart21/",
    },
    {
      name: "GitHub",
      icon: <FaGithub className=" size-6" />,
      to: "https://github.com/TSolai21",
    },
  ];
  const pathName = usePathname();

  const [accent, setAccent] = useState("#08fdd8");
  const handleColor = (e) => {
    setAccent(getRandomColor());
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
      randomColor += letters[Math.floor(Math.random() * 16)];
    }
    return randomColor;
  };
  useEffect(() => {
    document.documentElement.style.setProperty("--accent-color", accent);
  }, [accent]);
  return (
    <>
      <header className=" bg-secondary w-full flex flex-col justify-between items-center pb-5 h-full z-10 relative">
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

        <button className=" text-grey" onClick={handleColor}>
          <IoColorPaletteOutline className=" size-8" />
        </button>
        <ul className="flex flex-col gap-6">
          {socialLinks.map((res, i) => {
            return (
              <li key={i}>
                <Link
                  target="_blank"
                  href={res.to}
                  className=" text-gray-500 hover:text-accent"
                >
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

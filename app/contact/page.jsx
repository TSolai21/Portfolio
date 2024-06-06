"use client";
import React, { useEffect, useState } from "react";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Page = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Please enter your email"),
    message: yup.string().required("Please enter your message"),
  });
  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const [isMailSend, setIsMailSend] = useState(false);

  const sendMail = async (data) => {
    try {
      setIsMailSend(true);
      const res = await fetch("api/sendMail", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const msg = await res.json();
      if (res.ok) {
        setIsMailSend(false);
        toast.success(msg.message);
      }
      setTimeout(() => {
        reset();
      }, 1000);
    } catch (e) {
      console.log(e.message);
    }
  };

  const onSubmit = (data) => {
    sendMail(data);
  };
  return (
    <>
      <main className="h-full w-full sm:p-20 p-12  overflow-hidden  z-10 relative">
        <div className="relative w-max ">
          <h1 className="text-white text-5xl uppercase after:h-1 after:w-4/5  hover:after:w-full after:transition-all after:absolute after:bg-accent after:-bottom-1 after:left-0 content-['']">
            Contact me
          </h1>
        </div>
        <div className="flex h-full w-full flex-col sm:flex-row  mt-5 gap-5 overflow-auto pb-8">
          <div className=" sm:w-1/2 w-full">
            <p className="text-xl text-white mb-3 sm:w-4/5">
              Feel free to reach out to me for any inquiries, collaborations, or
              project discussions. I am always open to exploring new
              opportunities and connecting with like-minded professionals.
              Whether you have a question or just want to say hello, I'd love to
              hear from you. Let's work together to create something amazing!
            </p>
            <Link
              href="tel:+919629192376"
              className="flex items-center text-accent gap-3 text-xl"
            >
              <IoCall className=" size-8 text-white" />
              <span>+919629192376</span>
            </Link>
            <Link
              href="mailTo:solaikumar.t@gmail.com"
              className="flex  text-accent items-center gap-3 text-xl mt-5 "
            >
              <IoIosMail className=" size-8 text-white" />
              <span>Solaikumar.t@gmail.com</span>
            </Link>
          </div>
          <form
            className=" flex flex-col gap-5 sm:w-1/2 w-full h-full"
            onSubmit={handleSubmit((data) => onSubmit(data))}
          >
            <input
              {...register("name")}
              type="text"
              placeholder="Name"
              className={`p-3 text-xl bg-secondary outline-none text-accent border-b ${
                formState?.errors?.name?.message
                  ? " border-red-500"
                  : "border-transparent"
              }`}
            />
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className={`p-3 text-xl bg-secondary outline-none text-accent border-b ${
                formState?.errors?.email?.message
                  ? " border-red-500"
                  : "border-transparent"
              }`}
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className={`p-3 text-xl bg-secondary outline-none text-accent  flex-grow border-b ${
                formState?.errors?.message?.message
                  ? " border-red-500"
                  : "border-transparent"
              }`}
            ></textarea>

            <div className="w-full flex justify-end mt-5">
              <button
                disabled={isMailSend}
                type="submit"
                className=" border   rounded-md text-accent  text-xl p-2 px-4 w-max  border-accent hover:bg-accent hover:text-primary transition text-center"
              >
                {isMailSend ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
        <Toaster />
      </main>
    </>
  );
};

export default Page;

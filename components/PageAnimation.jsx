"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const PageAnimation = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="">
      <div key={pathname} className="w-full h-full flex-grow">
        <motion.div
          className=" h-screen w-screen fixed inset-0  z-20   bg-primary pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.8, ease: "easeInOut", duration: 0.4 },
          }}
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageAnimation;

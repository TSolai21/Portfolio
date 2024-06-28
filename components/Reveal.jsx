"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Reveal() {
  const pathname = usePathname();

  const animation = {
    initial: {
      top: "0%",
    },
    animate: {
      top: "100%",
    },
    exit: {
      top: ["100%", "0%"],
    },
  };

  const reverseIndex = (index) => {
    return 6 - index - 1;
  };

  const name = ["✦", "K", "U", "M", "A", "R", "✦"];
  // const name = ["L", "O", "A", "D", "I", "N", "G"];
  // const name = ["W", "E", "L", "C", "O", "M", "E"];
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div
          key={pathname}
          className=" h-screen  w-screen z-40 flex fixed pointer-events-none  left-0 top-0 right-0"
        >
          {Array.from({ length: 7 }).map((_, i) => {
            return (
              <motion.div
                variants={animation}
                className="h-full w-full relative bg-white flex items-center justify-center"
                key={i}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  duration: 0.4,
                  delay: reverseIndex(i) * 0.1,
                  ease: "easeInOut",
                }}
              >
                <span className="text-8xl text-black">{name[i]}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatePresence>
  );
}

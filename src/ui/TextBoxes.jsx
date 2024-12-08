import { motion } from "motion/react";

export default function TextBoxes({ children }) {
  const scrollPop = {
    initial: {
      opacity: 0,
    },
    inView: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1,
        delay: 1,
        ease: [0, 0.25, 0.5, 1],
      },
    },
  };

  return (
    <motion.div
      variants={scrollPop}
      initial="initial"
      whileInView="inView"
      viewport={{ once: true, amount: 0.3 }}
      className="font-serif z-10 bg-gray-50 dark:bg-slate-800 border border-blue-400 dark:border-blue-200 flex flex-col items-center mt-32 p-10 drop-shadow-sm shadow-black md:w-2/3 md:mx-auto"
    >
      {children}
    </motion.div>
  );
}

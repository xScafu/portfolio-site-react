import { motion } from "motion/react";
import { NavLink } from "react-router";
import TextBoxes from "../../ui/TextBoxes";
import PresentationText from "./PresentationText";

const popUpContainer = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animation: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren", staggerChildren: 1, delay: 1.5 },
  },
};

const popUp = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animation: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 2, ease: [0.17, 0.67, 0.83, 0.9] },
  },
};

export default function Presentation() {
  return (
    <div className="mt-28 p-2 select-auto">
      <motion.div
        variants={popUpContainer}
        initial="initial"
        animate="animation"
      >
        <motion.h3 variants={popUp} className="text-lg font-normal md:text-2xl">
          <span>Welcome</span>, my name is
        </motion.h3>
        <motion.h1
          variants={popUp}
          className="text-6xl font-semibold md:text-8xl"
        >
          Alessio Scarlata
        </motion.h1>
        <motion.h2
          variants={popUp}
          className="text-xl mt-1 font-medium md:text-4xl"
        >
          I build things for the web.
        </motion.h2>
      </motion.div>

      <div className="flex flex-col gap-5 relative z-0">
        <TextBoxes>
          <PresentationText />
        </TextBoxes>
        <NavLink
          to={"/contact"}
          className="bg-blue-400 dark:bg-slate-600 text-gray-50 font-sans text-xl mx-auto my-12 px-10 py-4 transition ease-in-out hover:bg-blue-500 hover:text-gray-50 active:bg-blue-600 active:scale-95"
        >
          Contact me
        </NavLink>
      </div>
    </div>
  );
}

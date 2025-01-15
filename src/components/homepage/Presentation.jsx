import { motion, useScroll } from "motion/react";
import { NavLink } from "react-router";
import TextBoxes from "../../ui/TextBoxes";
import PresentationText from "./PresentationText";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsVisited } from "../../features/visited/visitedSlice";
import { useRef } from "react";

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
  visited: {
    opacity: 1,
    y: 0,
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
    transition: { type: "ease", duration: 2, ease: [0.17, 0.67, 0.83, 0.9] },
  },
};

export default function Presentation() {
  let isVisited = useSelector((state) => state.visited.isVisited);
  const dispatch = useDispatch();

  return (
    <div className="mt-28 p-2 select-auto">
      <motion.div
        variants={popUpContainer}
        initial={isVisited ? "visited" : "initial"}
        animate="animation"
        className="ml-10 xl:ml-20 xl:mt-20"
      >
        <motion.h3
          variants={popUp}
          className="text-lg font-normal md:text-2xl xl:text-4xl"
        >
          <span>Welcome</span>, my name is
        </motion.h3>
        <motion.h1
          variants={popUp}
          className="text-6xl font-semibold md:text-8xl xl:text-9xl"
        >
          Alessio Scarlata
        </motion.h1>
        <motion.h2
          variants={popUp}
          onAnimationComplete={() => dispatch(toggleIsVisited())}
          className="text-xl mt-1 font-medium md:text-4xl xl:text-6xl"
        >
          I build things for the web.
        </motion.h2>
      </motion.div>

      <div className="flex flex-col gap-5 relative z-0 mt-32 mx-auto xl:mt-60">
        <TextBoxes>
          <PresentationText />
        </TextBoxes>
        <NavLink
          to={"/contact"}
          className="bg-blue-400  dark:bg-slate-600 text-gray-50 font-sans text-xl mx-auto my-12 px-10 py-4 transition ease-in-out hover:bg-blue-500 hover:text-gray-50 active:bg-blue-600 active:scale-95"
        >
          Contact me
        </NavLink>
      </div>
    </div>
  );
}

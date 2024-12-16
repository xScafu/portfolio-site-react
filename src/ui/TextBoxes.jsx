import { motion } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import {
  addBoxesAnimation,
  toggleBoxesVisited,
} from "../features/visited/visitedSlice";

export default function TextBoxes({ children }) {
  let isVisited = useSelector((state) => state.visited.isBoxesVisited);
  let counted = useSelector((state) => state.visited.boxesAnimations);
  const dispatch = useDispatch();

  function onAnimationCompleted() {
    dispatch(toggleBoxesVisited());
    dispatch(addBoxesAnimation());
  }

  const scrollPop = {
    initial: {
      opacity: 0,
    },
    visited: {
      opacity: 1,
    },
    inView: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1,
        delay: 5,
        ease: [0, 0.25, 0.5, 1],
      },
    },
  };

  counted == 1 ? (scrollPop.inView.transition.delay = 0) : "";

  return (
    <motion.div
      variants={scrollPop}
      initial={isVisited && counted === 2 ? "visited" : "initial"}
      whileInView="inView"
      viewport={{ once: true, amount: 0.3 }}
      onAnimationComplete={() =>
        counted < 2 ? dispatch(onAnimationCompleted()) : ""
      }
      className="font-serif z-10 bg-gray-50 dark:bg-slate-800 border border-blue-400 dark:border-blue-200 flex flex-col items-center max-w-[24rem] p-10 drop-shadow-sm shadow-black md:w-2/3 mx-auto xl:w-1/3"
    >
      {children}
    </motion.div>
  );
}

import { motion } from "motion/react";
import { useSelector } from "react-redux";

export default function BackgroundText() {
  let isVisited = useSelector((state) => state.visited.isVisited);

  return (
    <motion.div
      initial={isVisited ? { opacity: 1 } : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "tween",
        duration: 1,
        delay: 0.5,
        ease: [0, 0.25, 0.5, 1],
      }}
    >
      <div className="absolute top-20 xl:top-44 left-1/2 transform -translate-x-1/2 z-0 pointer-events-none opacity-70 dark:opacity-85">
        <h1 className="text-[5rem] xl:text-[10rem] font-sans font-extrabold text-gray-50 text-nowrap text-center drop-shadow-xl select-none sm:text-9xl leading-tight dark:text-slate-800">
          GRAPHICS <br />
          WEB DEVELOPMENT <br />
          RESPONSIVE
        </h1>
      </div>
    </motion.div>
  );
}

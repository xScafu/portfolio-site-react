import { motion } from "motion/react";

export default function BackgroundText() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "tween",
        duration: 1,
        delay: 0.5,
        ease: [0, 0.25, 0.5, 1],
      }}
    >
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-0 pointer-events-none opacity-70">
        <h1 className="text-[5rem] font-sans font-extrabold text-slate-400 text-nowrap text-center drop-shadow-xl select-none sm:text-9xl">
          Front End
        </h1>
      </div>
    </motion.div>
  );
}
import { motion } from "motion/react";
import PresentationImage from "./PresentationImage";

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

const scrollPop = {
  initial: {
    opacity: 0,
  },
  inView: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
      delay: 0.5,
      ease: [0, 0.25, 0.5, 1],
    },
  },
};

export default function Presentation() {
  return (
    <div className="mt-40 p-2 select-auto">
      <motion.div
        variants={popUpContainer}
        initial="initial"
        animate="animation"
      >
        <motion.h3 variants={popUp} className="text-lg font-normal">
          <span>Hi</span>, my name is
        </motion.h3>
        <motion.h1 variants={popUp} className="text-7xl font-semibold">
          Alessio Scarlata
        </motion.h1>
        <motion.h2 variants={popUp} className="text-5xl mt-5 font-medium">
          I build things for the web.
        </motion.h2>
      </motion.div>
      <motion.div
        variants={scrollPop}
        initial="initial"
        whileInView="inView"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="mt-20">
          <PresentationImage />
        </div>
      </motion.div>
      <motion.div
        variants={scrollPop}
        initial="initial"
        whileInView="inView"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="font-serif bg-slate-200 p-5 rounded-md">
          I'm an emerging <span className="font-bold">Front-End Developer</span>{" "}
          with a passion for creating dynamic and responsive web applications.{" "}
          <br />I am currently honing my skills in{" "}
          <span className="font-bold">React.js</span> to enhance my ability to
          build intuitive and visually appealing interfaces. <br />
          <span className="font-bold">Explore</span> my projects and see how I'm{" "}
          <span className="font-bold">leveraging</span> the latest{" "}
          <span className="font-bold">technologies</span> to bring{" "}
          <span className="font-bold">creative ideas to life.</span>
        </p>
      </motion.div>
    </div>
  );
}

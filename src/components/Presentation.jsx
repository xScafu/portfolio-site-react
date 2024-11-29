import { motion } from "motion/react";
import PresentationImage from "./PresentationImage";
import { Divider } from "@mui/material";

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
    <div className="mt-32 p-2 select-auto">
      <motion.div
        variants={popUpContainer}
        initial="initial"
        animate="animation"
      >
        <motion.h3 variants={popUp} className="text-lg font-normal">
          <span>Hi</span>, my name is
        </motion.h3>
        <motion.h1 variants={popUp} className="text-4xl font-semibold">
          Alessio Scarlata
        </motion.h1>
        <motion.h2 variants={popUp} className="text-xl mt-1 font-medium">
          I build things for the web.
        </motion.h2>
      </motion.div>

      <motion.div
        variants={scrollPop}
        initial="initial"
        whileInView="inView"
        viewport={{ once: true, amount: 0.5 }}
        className="font-serif bg-gray-50 border border-blue-400 p-5 rounded-md mt-32 drop-shadow-sm shadow-black"
      >
        <h2 className="font-bold text-3xl text-center mb-5">Why hiring me?</h2>
        <Divider></Divider>
        <p className="my-5">
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
        <button
          type="button"
          className="bg-blue-400 text-gray-50 font-sans p-2 absolute left-1/3 rounded-t-md"
        >
          Contact me
        </button>
      </motion.div>
    </div>
  );
}

import { delay, motion } from "motion/react";
import Divider from "@mui/material/Divider";
import { NavLink } from "react-router";

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
      delay: 5.5,
      ease: [0, 0.25, 0.5, 1],
    },
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
        <motion.div
          variants={scrollPop}
          initial="initial"
          whileInView="inView"
          viewport={{ once: true, amount: 0.3 }}
          className="font-serif z-10 bg-gray-50 dark:bg-slate-800 border border-blue-400 dark:border-blue-200 flex flex-col items-center mt-32 p-10 drop-shadow-sm shadow-black md:w-2/3 md:mx-auto"
        >
          <h2 className="font-bold text-3xl text-center my-5">Who am I?</h2>
          <Divider
            sx={{ backgroundColor: "white" }}
            className="w-11/12"
          ></Divider>
          <p className="m-5 md:leading-7">
            Hi! My name is <span className="font-bold">Alessio Scarlata</span>,
            I’m a 31-year-old guy, and I live in a small town in the province of
            Turin, Italy. <br />
            I'm an emerging{" "}
            <span className="font-bold">Front-End Developer</span> with a
            passion for creating dynamic and responsive web applications. <br />
            I am currently honing my skills in{" "}
            <span className="font-bold">React.js</span> to enhance my ability to
            build intuitive and visually appealing interfaces. <br />
            <span className="font-bold">Explore</span> my projects and see how
            I'm <span className="font-bold">leveraging</span> the latest{" "}
            <span className="font-bold">technologies</span> to bring{" "}
            <span className="font-bold">creative ideas to life.</span>
          </p>
        </motion.div>
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

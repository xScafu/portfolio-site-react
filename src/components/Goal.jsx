import { motion } from "motion/react";
import { Divider } from "@mui/material";

export default function Goal() {
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

  return (
    <div>
      <motion.div
        variants={scrollPop}
        initial="initial"
        whileInView="inView"
        viewport={{ once: true, amount: 0.5 }}
        className="font-serif bg-gray-50 dark:bg-slate-800 border border-blue-400 dark:border-blue-200 flex flex-col items-center rounded-md mt-32 drop-shadow-sm shadow-black md:w-2/3 md:mx-auto"
      >
        <h2 className="font-bold text-3xl text-center my-5">
          What is my goal?
        </h2>
        <Divider className="w-4/5"></Divider>
        <p className="m-5 md:leading-7">
          I have always been <span className="font-bold">passionate</span> about
          the structure behind a{" "}
          <span className="font-bold">well-developed website</span>, one that is
          also pleasing from a purely {""}
          <span className="font-bold">aesthetic perspective</span>. <br />
          This passion has led me to set a{" "}
          <span className="font-bold">significant goal</span> for myself:{" "}
          <span className="font-bold">
            to turn my passion into my profession
          </span>
          . <br />
          With <span className="font-bold">sacrifice</span> and{" "}
          <span className="font-bold">dedication</span>, this milestone is
          getting <span className="font-bold">closer every day</span>, and I
          can't wait to share my feelings and experience through websites that
          meet current{""}
          <span className="font-bold">market demands</span> in terms of both{" "}
          <span className="font-bold">functionality</span> and{" "}
          <span className="font-bold">aesthetics</span>.
        </p>
      </motion.div>
    </div>
  );
}

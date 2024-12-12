import { useTransform, motion, useTime } from "motion/react";
import CircleShape from "../../ui/CircleShape";

export default function PortfolioPresentation() {
  const time = useTime();
  const rotate = useTransform(time, [0, 60000], [0, 360], {
    clamp: false,
  });
  const rotateHalf = useTransform(time, [0, 30000], [360, 0], {
    clamp: false,
  });
  return (
    <div className="text-center bg-blue-400 dark:bg-slate-600 text-gray-50 p-10 md:p-20 lg:p-40 -mx-5 relative z-0 overflow-hidden">
      <div className="border border-gray-50 p-1 relative z-10">
        <h1 className="font-bold text-start px-5 text-4xl mt-32">
          Welcome to my portfolio
        </h1>
        <p className="font-serif dark:font-light text-start text-lg mt-10 mb-32 px-5">
          Here you can find my most{" "}
          <span className="font-bold">significant works</span> and my journey in
          creating <span className="font-bold">modern and responsive</span> web
          applications and websites. <br /> I want to{" "}
          <span className="font-bold">thank everyone</span> who trusted me and
          gave me the opportunity{" "}
          <span className="font-bold">to bring their dreams to life</span>.
        </p>
      </div>
      <motion.div
        style={{ rotate: rotate }}
        className="absolute top-[60px] right-[-270px] w-[40rem] md:w-[60rem] z-0 opacity-15 fill-none stroke-2 stroke-white "
      >
        <CircleShape />
      </motion.div>
      <motion.div
        style={{ rotate: rotateHalf }}
        className="absolute top-[217px] right-[-110px] w-[20rem] md:w-[40rem] z-0 opacity-15 fill-none stroke-2 stroke-white"
      >
        <CircleShape />
      </motion.div>
    </div>
  );
}

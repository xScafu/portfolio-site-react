import { useDispatch, useSelector } from "react-redux";
import CircleShape from "../ui/CircleShape";
import { motion, useTime, useTransform } from "motion/react";
import { Link } from "react-router";

export default function MobileMenu() {
  const isVisibile = useSelector((state) => state.mobileMenu.isOpen);
  const dispatch = useDispatch();
  const handleOpenClose = {
    open: {
      x: 0,
      y: [-800, 0],
      opacity: [1, 1, 1, 1, 1, 1],
      transition: { duration: 1, times: [0, 0.3, 0.4, 0.6, 0.8, 1] },
    },
    close: {
      x: 0,
      y: [0, -800],
      transition: { duration: 1, times: [0, 0.3, 0.4, 0.6, 0.8, 1] },
    },
  };

  const time = useTime();
  const rotate = useTransform(time, [0, 60000], [0, 360], {
    clamp: false,
  });
  const rotateHalf = useTransform(time, [0, 30000], [360, 0], {
    clamp: false,
  });

  return (
    <motion.div
      variants={handleOpenClose}
      initial={{ opacity: 0 }}
      animate={isVisibile ? "open" : "close"}
      className="bg-blue-500 dark:bg-slate-700 h-screen"
    >
      <ul className="p-5 relative w-screen text-start font-serif text-gray-50 z-10">
        <li className="mt-20 text-5xl">
          <Link onClick={dispatch} to={"/"}>
            {" "}
            Home
          </Link>
        </li>
        <motion.li className="mt-20 text-5xl">About</motion.li>
        <li className="mt-20 text-5xl">
          <Link onClick={dispatch} to={"/portfolio"}>
            {" "}
            Portfolio
          </Link>{" "}
        </li>
        <li className="my-20 text-5xl">Contact</li>
      </ul>
      <motion.div
        style={{ rotate: rotate }}
        className="absolute top-[60px] right-[-270px] w-[40rem] md:w-[60rem] z-0 opacity-15 fill-none stroke-2 stroke-white"
      >
        <CircleShape />
      </motion.div>
      <motion.div
        style={{ rotate: rotateHalf }}
        className="absolute top-[217px] right-[-110px] w-[20rem] md:w-[40rem] z-0 opacity-15 fill-none stroke-2 stroke-white"
      >
        <CircleShape />
      </motion.div>
    </motion.div>
  );
}

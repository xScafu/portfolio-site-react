import { useDispatch, useSelector } from "react-redux";
import CircleShape from "../ui/CircleShape";
import { motion, useTime, useTransform } from "motion/react";
import { NavLink } from "react-router";
import {
  toggleIsMobile,
  toggleMobileMenu,
} from "../features/mobileMenu/mobileMenuSlice";

export default function MobileMenu() {
  const { isOpen, isMobile } = useSelector((state) => state.mobileMenu);
  const dispatch = useDispatch();

  const handleOpenClose = {
    open: {
      x: [-500, 0, 0, 0],
      y: [-800, -800, 0],
      opacity: [0, 1, 1, 1, 1, 1],
      transition: { duration: 1, times: [0, 0.3, 0.4, 0.6, 0.8, 1] },
    },
    close: {
      x: [0, 0, 0, 500],
      y: [0, -800, -800],
      opacity: [1, 1, 1, 1, 1, 0],
      transition: { duration: 1, times: [0, 0.3, 0.4, 0.6, 0.8, 1] },
    },
    hidden: {
      opacity: 0,
    },
  };

  const time = useTime();
  const rotate = useTransform(time, [0, 60000], [0, 360], {
    clamp: false,
  });
  const rotateHalf = useTransform(time, [0, 30000], [360, 0], {
    clamp: false,
  });

  function animate() {
    if (isOpen && isMobile) {
      return "open";
    } else if (!isOpen && isMobile) {
      return "close";
    } else if (!isOpen && !isMobile) {
      return "hidden";
    }
  }

  return (
    <motion.div
      variants={handleOpenClose}
      initial={{ opacity: 0 }}
      animate={animate()}
      onAnimationComplete={(latest) =>
        latest == "close" ? dispatch(toggleIsMobile()) : ""
      }
      className={`bg-blue-500 dark:bg-slate-700 h-screen relative `}
    >
      <ul className="p-5 relative w-screen text-start font-serif text-gray-50 z-10">
        <li className="mt-20 text-5xl">
          <NavLink onClick={() => dispatch(toggleMobileMenu())} to={"/"}>
            {" "}
            Home
          </NavLink>
        </li>
        <li className="mt-20 text-5xl">
          <NavLink onClick={() => dispatch(toggleMobileMenu())} to={"/about"}>
            About
          </NavLink>
        </li>
        <li className="mt-20 text-5xl">
          <NavLink
            onClick={() => dispatch(toggleMobileMenu())}
            to={"/portfolio"}
          >
            {" "}
            Portfolio
          </NavLink>{" "}
        </li>
        <li className="my-20 text-5xl">
          <NavLink onClick={() => dispatch(toggleMobileMenu())} to={"/contact"}>
            Contact
          </NavLink>
        </li>
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

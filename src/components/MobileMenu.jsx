import { useSelector } from "react-redux";
import CircleShape from "../ui/CircleShape";
import { motion, useTime, useTransform } from "motion/react";

export default function MobileMenu() {
  const isVisibile = useSelector((state) => state.mobileMenu.isOpen);

  const time = useTime();
  const rotate = useTransform(time, [0, 60000], [0, 360], {
    clamp: false,
  });
  const rotateHalf = useTransform(time, [0, 30000], [360, 0], {
    clamp: false,
  });

  if (isVisibile) {
    return (
      <div className="bg-blue-950 h-screen">
        <ul className="p-5 relative w-screen text-start text-gray-50 z-10">
          <li className="mt-10 text-3xl">Home</li>
          <li className="mt-10 text-3xl">About</li>
          <li className="mt-10 text-3xl">Portfolio</li>
          <li className="my-10 text-3xl">Contact</li>
        </ul>
        <motion.div
          style={{ rotate: rotate }}
          className="absolute top-[60px] right-[-270px] w-[40rem] z-0 opacity-15 fill-none stroke-2 stroke-white"
        >
          <CircleShape />
        </motion.div>
        <motion.div
          style={{ rotate: rotateHalf }}
          className="absolute top-[217px] right-[-110px] w-[20rem] z-0 opacity-15 fill-none stroke-2 stroke-white"
        >
          <CircleShape />
        </motion.div>
      </div>
    );
  } else {
    return <div className="hidden"></div>;
  }
}

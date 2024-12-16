import { Divider } from "@mui/material";
import Socials from "./Socials";
import LogoVector from "../ui/LogoVector";
import { NavLink } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { toggleIsMobile } from "../features/mobileMenu/mobileMenuSlice";

export default function Footer() {
  useSelector((state) => state.mobileMenu);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col -mx-5 -mb-5 bg-blue-400 dark:bg-slate-700 text-gray-50 dark:text-gray-50">
      <div className=" flex gap-5 align-middle items-center justify-center content-between mt-5 ">
        <span className="fill-white w-16 xl:w-20">
          <LogoVector />
        </span>
        <h3 className="text-2xl xl:text-3xl font-normal">Alessio Scarlata</h3>
      </div>
      <div className="flex justify-around my-10">
        <Socials />
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ opacity: 0.6, borderColor: "#f9fafb" }}
          className=""
        />
        <div className="flex flex-col items-end justify-center mr-8 mt-5 text-xl xl:text-3xl xl:gap-6 gap-2">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-4 decoration-2 decoration-blue-50 hover:text-blue-950 dark:hover:text-slate-800"
                : "hover:text-blue-950 dark:hover:text-slate-800"
            }
            onClick={() => dispatch(toggleIsMobile())}
            to={"/"}
          >
            Home
          </NavLink>
          {/* <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-4 decoration-2 decoration-blue-50 hover:text-blue-950 dark:hover:text-slate-800"
                : " hover:text-blue-950 dark:hover:text-slate-800"
            }
            onClick={() => dispatch(toggleIsMobile())}
            to={"/about"}
          >
            About
          </NavLink> */}
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-4 decoration-2 decoration-blue-50 hover:text-blue-950 dark:hover:text-slate-800"
                : "hover:text-blue-950 dark:hover:text-slate-800"
            }
            onClick={() => dispatch(toggleIsMobile())}
            to={"/portfolio"}
          >
            Portfolio
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-4 decoration-2 decoration-blue-50 hover:text-blue-950 dark:hover:text-slate-800"
                : "hover:text-blue-950 dark:hover:text-slate-800"
            }
            onClick={() => dispatch(toggleIsMobile())}
            to={"/contact"}
          >
            Contact
          </NavLink>
        </div>
      </div>
      <p className="font-serif font-normal text-sm text-end mb-5 mr-8 content-end">
        Designed & Produced by:{" "}
        <span className="font-medium">Alessio Scarlata</span>
      </p>
    </div>
  );
}

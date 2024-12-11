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
    <div className="grid grid-cols-4 grid-rows-3 -mx-5 -mb-5 mt-32 bg-blue-400 dark:bg-slate-700 text-gray-50 dark:text-gray-50">
      <div className="col-start-1 col-end-5 flex gap-5 align-middle items-center justify-center content-between mt-5 ">
        <span className="fill-white w-16">
          <LogoVector />
        </span>
        <h3 className="text-2xl font-normal">Alessio Scarlata</h3>
      </div>
      <Socials />
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ opacity: 0.6, marginY: 2, borderColor: "#f9fafb" }}
        className="col-start-2 col-end-3 row-start-2 row-end-4"
      />
      <div className="flex flex-col items-end justify-center col-start-3 col-end-5 mr-8 mt-5 text-xl gap-2">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "underline underline-offset-4 decoration-2 decoration-blue-50"
              : ""
          }
          onClick={() => dispatch(toggleIsMobile())}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            isActive
              ? "underline underline-offset-4 decoration-2 decoration-blue-50"
              : "";
          }}
          onClick={() => dispatch(toggleIsMobile())}
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "underline underline-offset-4 decoration-2 decoration-blue-50"
              : ""
          }
          onClick={() => dispatch(toggleIsMobile())}
          to={"/portfolio"}
        >
          Portfolio
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "underline underline-offset-4 decoration-2 decoration-blue-900"
              : ""
          }
          onClick={() => dispatch(toggleIsMobile())}
          to={"/contact"}
        >
          Contact
        </NavLink>
      </div>
      <p className="font-serif font-normal text-sm text-end mb-5 col-start-3 col-end-5 row-start-3 row-end-4 mr-8 content-end">
        Designed & Produced by:{" "}
        <span className="font-medium">Alessio Scarlata</span>
      </p>
    </div>
  );
}

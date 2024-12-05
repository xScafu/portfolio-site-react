import Logo from "../ui/Logo";

import HamburgerButton from "../ui/HamburgerButton";
import LightDarkMode from "../ui/LightDarkMode";
import { NavLink } from "react-router";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <div className="relative z-20 bg-gray-50 dark:bg-slate-800 px-5 py-5 -mx-5 -mt-3">
      <div className="flex justify-between content-center ">
        <div className="flex items-center gap-3">
          <NavLink to={"/"}>
            <Logo />
          </NavLink>
          <h3 className="text-base font-normal">Alessio Scarlata</h3>
        </div>
        <div className="flex justify-between items-center content-center">
          <div className="hidden mx-5 md:inline">
            <Menu />
          </div>
          <LightDarkMode />
          <div className="md:hidden">
            <HamburgerButton />
          </div>
        </div>
      </div>
    </div>
  );
}

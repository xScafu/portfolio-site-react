import HamburgerButton from "../ui/HamburgerButton";
import LightDarkMode from "../ui/LightDarkMode";

import Menu from "./Menu";
import LogoTitle from "../ui/LogoTitle";

export default function Navbar() {
  return (
    <div className="relative z-20 bg-gray-50 dark:bg-slate-800 p-5 xl:px-20 xl:py-10 -mx-5 -mt-3">
      <div className="flex justify-between content-center ">
        <LogoTitle />
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

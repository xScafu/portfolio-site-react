import Logo from "../ui/Logo";

import HamburgerButton from "../ui/HamburgerButton";
import LightDarkMode from "../ui/LightDarkMode";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="flex justify-between content-center">
      <div className="flex items-center gap-3">
        <Link to={"/"}>
          <Logo />
        </Link>
        <h3 className="text-base font-normal">Alessio Scarlata</h3>
      </div>

      <div className="flex justify-between items-center content-center">
        <LightDarkMode />
        <HamburgerButton />
      </div>
      {/* <NavMenu /> */}
    </div>
  );
}

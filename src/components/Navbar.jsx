import Logo from "../ui/Logo";

import HamburgerButton from "../ui/HamburgerButton";
import LightDarkMode from "../ui/LightDarkMode";

export default function Navbar() {
  return (
    <div className="flex justify-between content-center">
      <div className="flex items-center gap-3">
        <Logo />
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

import Logo from "../ui/Logo";

import HamburgerButton from "../ui/HamburgerButton";

export default function Navbar() {
  return (
    <div className="flex justify-between content-center">
      <div className="flex items-center gap-3">
        <Logo />
        <h3 className="text-lg font-normal">Alessio Scarlata</h3>
      </div>
      <div>
        <HamburgerButton />
      </div>
      {/* <NavMenu /> */}
    </div>
  );
}

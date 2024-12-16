import { NavLink } from "react-router";
import Logo from "./Logo";

export default function LogoTitle() {
  return (
    <div className="flex items-center gap-3">
      <NavLink to={"/"}>
        <Logo />
      </NavLink>
      <h3 className="text-base font-normal xl:text-xl">Alessio Scarlata</h3>
    </div>
  );
}

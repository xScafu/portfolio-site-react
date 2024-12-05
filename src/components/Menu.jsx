import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
import { toggleIsMobile } from "../features/mobileMenu/mobileMenuSlice";

export default function Menu() {
  useSelector((state) => state.mobileMenu);
  const dispatch = useDispatch();

  return (
    <div className="flex gap-5">
      <NavLink onClick={() => dispatch(toggleIsMobile())} to={"/"}>
        Home
      </NavLink>
      <NavLink>About</NavLink>
      <NavLink onClick={() => dispatch(toggleIsMobile())} to={"/portfolio"}>
        Portfolio
      </NavLink>
      <NavLink>Contact</NavLink>
    </div>
  );
}

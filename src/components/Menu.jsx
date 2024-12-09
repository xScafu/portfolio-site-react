import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
import { toggleIsMobile } from "../features/mobileMenu/mobileMenuSlice";

export default function Menu() {
  useSelector((state) => state.mobileMenu);
  const dispatch = useDispatch();

  return (
    <div className="flex gap-5">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "underline underline-offset-2 decoration-2 decoration-blue-500"
            : ""
        }
        onClick={() => dispatch(toggleIsMobile())}
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "underline underline-offset-2 decoration-2 decoration-blue-500"
            : ""
        }
        onClick={() => dispatch(toggleIsMobile())}
        to={"/about"}
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "underline underline-offset-2 decoration-2 decoration-blue-500"
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
            ? "underline underline-offset-2 decoration-2 decoration-blue-500"
            : ""
        }
        onClick={() => dispatch(toggleIsMobile())}
        to={"/contact"}
      >
        Contact
      </NavLink>
    </div>
  );
}

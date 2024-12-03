import { Divide as Hamburger } from "hamburger-react";
import { toggleMobileMenu } from "../features/mobileMenu/mobileMenuSlice";
import { useDispatch } from "react-redux";

export default function HamburgerButton() {
  const dispatch = useDispatch();

  return (
    <div>
      <Hamburger onToggle={() => dispatch(toggleMobileMenu())} />
    </div>
  );
}

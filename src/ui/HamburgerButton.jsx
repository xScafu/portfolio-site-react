import { Divide as Hamburger } from "hamburger-react";
import { toggleMobileMenu } from "../features/mobileMenu/mobileMenuSlice";
import { useDispatch, useSelector } from "react-redux";

export default function HamburgerButton() {
  const { isOpen, setOpen } = useSelector((state) => state.mobileMenu);
  const dispatch = useDispatch();

  return (
    <div>
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        onToggle={() => dispatch(toggleMobileMenu())}
      />
    </div>
  );
}

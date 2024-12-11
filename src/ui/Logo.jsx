import { useSelector } from "react-redux";
import LogoVector from "./LogoVector";

export default function Logo() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  if (!darkMode) {
    return (
      <div className="w-12 fill-black">
        <LogoVector />
      </div>
    );
  } else {
    return (
      <div className="w-12 fill-gray-50">
        <LogoVector />
      </div>
    );
  }
}

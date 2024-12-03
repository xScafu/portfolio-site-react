import { useSelector } from "react-redux";

export default function Logo() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  if (!darkMode) {
    return <img src="../ASG LOGO.svg" alt="logo" className="w-12" />;
  } else {
    return <img src="../ASG LOGO WHITE.svg" alt="logo" className="w-12" />;
  }
}

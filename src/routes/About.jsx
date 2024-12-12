import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

export default function About() {
  const checkIsClosed = useSelector((state) => state.mobileMenu);
  let isClosed =
    !checkIsClosed.isOpen && !checkIsClosed.isMobile ? "hidden" : "";

  return (
    <div>
      <Navbar />
      <div
        className={`${isClosed} absolute z-10 top-20 right-0 w-screen overflow-hidden`}
      >
        <MobileMenu />
      </div>
      <h1 className="my-40 text-center text-3xl">
        SORRY, this page is under construction 🚧
      </h1>
      <Footer />
    </div>
  );
}

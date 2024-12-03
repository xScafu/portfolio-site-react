import BackgroundText from "../components/BackgroundText";
import Navbar from "../components/Navbar";
import Presentation from "../components/Presentation";
import Footer from "../components/Footer";
import Works from "../components/Works";
import Goal from "../components/Goal";
import MobileMenu from "../components/MobileMenu";

export default function Home() {
  return (
    <div className="relative">
      <BackgroundText />
      <div className="relative z-10">
        <Navbar />
        <div className={`absolute z-10 top-20 right-[-12px] overflow-hidden`}>
          <MobileMenu />
        </div>
        <Presentation />
        <Works />
        <Goal />
        <Footer />
      </div>
    </div>
  );
}

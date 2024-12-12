import BackgroundText from "../components/homepage/BackgroundText";
import Navbar from "../components/Navbar";
import Presentation from "../components/homepage/Presentation";
import Footer from "../components/Footer";
import Works from "../components/homepage/Works";
import Goal from "../components/homepage/Goal";
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
        <div className="my-36">
          <Goal />
        </div>
        <Footer />
      </div>
    </div>
  );
}

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import CardContainer from "../components/portfolio/CardContainer";
import PortfolioPresentation from "../components/portfolio/PortfolioPresentation";

export default function Portfolio() {
  return (
    <div className="relative z-10">
      <Navbar />
      <div className={`absolute z-10 top-20 right-[-12px] overflow-hidden`}>
        <MobileMenu />
      </div>
      <PortfolioPresentation />
      <CardContainer />
      <Footer />
    </div>
  );
}

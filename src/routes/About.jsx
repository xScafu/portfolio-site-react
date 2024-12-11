import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className={`absolute z-10 top-20 right-0 overflow-hidden`}>
        <MobileMenu />
      </div>
      <h1 className="my-40 text-center text-3xl">
        SORRY, this page is under construction 🚧
      </h1>
      <Footer />
    </div>
  );
}

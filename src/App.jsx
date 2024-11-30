import BackgroundText from "./components/BackgroundText";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Footer from "./components/Footer";
import Works from "./components/Works";
import Goal from "./components/Goal";

function App() {
  return (
    <div className="relative">
      <BackgroundText />

      <div className="relative z-10">
        <Navbar />
        <Presentation />
        <Works />
        <Goal />
        <Footer />
      </div>
    </div>
  );
}

export default App;

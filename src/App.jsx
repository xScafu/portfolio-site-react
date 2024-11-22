import BackgroundText from "./components/BackgroundText";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Footer from "./components/Footer";
import { Divider } from "@mui/material";

function App() {
  return (
    <div className="relative">
      <BackgroundText />

      <div className="relative z-10">
        <Navbar />
        <Presentation />
        <div className="mt-5">
          <Divider>
            <h3>Check my socials</h3>
          </Divider>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

import BackgroundText from "./components/BackgroundText";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Footer from "./components/Footer";
import { Divider } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

function App() {
  return (
    <>
      <Navbar />
      <Presentation />
      <BackgroundText />
      <div className="mt-5">
        <Divider>
          <h3>Check my socials</h3>
        </Divider>
      </div>
      <Footer />
    </>
  );
}

export default App;

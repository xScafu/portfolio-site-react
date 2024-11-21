import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Footer from "./components/Footer";
import { Divider } from "@mui/material";

function App() {
  return (
    <>
      <Navbar />
      <Presentation />
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

import { Routes, Route } from "react-router";
import Home from "../routes/Home";
import Portfolio from "../routes/Portfolio";
import About from "../routes/About";
import Contact from "../routes/Contact";
import { TransitionProvider } from "../context/TransitionContext";
import TransitionComponent from "../components/TransitionComponent";

export default function AppRouter() {
  return (
    <TransitionProvider>
      <Routes>
        <Route
          path="/"
          element={
            <TransitionComponent>
              <Home />
            </TransitionComponent>
          }
        />

        <Route
          path="about"
          element={
            <TransitionComponent>
              <About />
            </TransitionComponent>
          }
        />
        <Route
          path="portfolio"
          element={
            <TransitionComponent>
              <Portfolio />
            </TransitionComponent>
          }
        />
        <Route
          path="contact"
          element={
            <TransitionComponent>
              <Contact />
            </TransitionComponent>
          }
        />
      </Routes>
    </TransitionProvider>
  );
}

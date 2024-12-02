import { Routes, Route } from "react-router";
import Home from "../routes/Home";
import Portfolio from "../routes/Portfolio";

export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

import { Routes, Route } from "react-router";

export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </div>
  );
}

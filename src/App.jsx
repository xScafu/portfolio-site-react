import AppRouter from "./router/AppRouter";
import { useSelector } from "react-redux";

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-gray-50 text-black p-3 dark:bg-slate-800 dark:text-gray-50 overflow-hidden">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;

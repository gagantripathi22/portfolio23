import "./App.css";
import HomePage from "./pages/Home";
import useLocalStorage from "use-local-storage";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };
  return (
    <div className="App" data-theme={theme}>
      <HomePage theme={theme} switchTheme={switchTheme} />
    </div>
  );
}

export default App;

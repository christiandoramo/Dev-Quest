import AppRoutes from "./components/blog/routes";
import { ThemeProvider } from "./contexts/theme-context";

function App() {
  return (
    <>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;

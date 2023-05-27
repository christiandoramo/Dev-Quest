import AppRoutes from "./components/blog/routes";

function App() {
  return (
    <>
      <ThemeContext.Provider>
        <AppRoutes />
      </ThemeContext.Provider>
    </>
  );
}

export default App;

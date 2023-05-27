import { createContext, useState, useEffect } from "react";

export const themes = {
  light: {
    color: "black",
    backgroundColor: "white",
  },
  dark: {
    color: "white",
    backgroundColor: "black",
  },
};
export const ThemeContext = createContext({});
// {} - valor do contexto inicial = objeto vazio

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.dark);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(JSON.parse(savedTheme));
    }
  }, []);

  const changeTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    localStorage.setItem("theme", JSON.stringify(selectedTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

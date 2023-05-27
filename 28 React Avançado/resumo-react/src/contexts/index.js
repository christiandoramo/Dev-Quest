import { createContext } from "react";

export const themes = {
  light: {
    color: "black",
    bgColor: "white",
  },
  dark: {
    color: "white",
    bgColor: "black",
  },
};
export const ThemeContext = createContext({});
// {} - valor do contexto inicial = objeto vazio

export const ThemeProvider = (props) => {
  return (
    <ThemeContext.Provider value={{ themes }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

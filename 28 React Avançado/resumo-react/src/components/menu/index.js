import React, { useContext } from "react";
import { ThemeContext, themes } from "../../contexts/theme-context";
import { Button } from "../buttons";

export const Menu = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log("Card", theme);
  return (
    <div>
      <Button
        onClick={() =>
          setTheme(theme === themes.light ? themes.dark : themes.light)
        }
      >
        Mudar Tema
      </Button>
    </div>
  );
};

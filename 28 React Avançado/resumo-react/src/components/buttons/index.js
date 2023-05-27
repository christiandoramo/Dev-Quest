import React, { useContext } from "react";
import { ThemeContext, themes } from "../../contexts/theme-context";
import styled from "styled-components";

export const Button = (props) => {
  return <button {...props}>{props.children}</button>;
};

export const ButtonSemMenu = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <DivColorida theme={theme}>
      <button
        onClick={() =>
          setTheme(theme === themes.light ? themes.dark : themes.light)
        }
      >
        Mudar Tema
      </button>
    </DivColorida>
  );
};

const DivColorida = styled.div`
  margin: 0 auto;
  background-color: ${(props) => props.theme.color};
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

import React from "react";
import { getPokemons } from "../../services";

export const Button = (props) => {
  return <button onClick={alert("Oi")}>Oi</button>;
};
export const BtnVerMais = (props) => {
  return <button onClick={props.addPokemons}>Ver mais 10 pokemons</button>;
};

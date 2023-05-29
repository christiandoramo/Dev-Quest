import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPokemonById } from "../../services";

const Info = (props) => {
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getPokemonById(id).then((pokemon) => setPokemon(pokemon));
  });

  return (
    <div>
      <Link to="/">Voltar</Link>
      <img src={pokemon.image} />
      <h1>{pokemon.name}</h1>
      <ul>
        <h3>Movies</h3>
        <li></li>
      </ul>
      <ul>
        <h3>Abilities</h3>
        <li>
          <div>
            <h4>Nome</h4>
            <p>Descrição</p>
          </div>
        </li>
      </ul>
      <ul>
        <h3>Type</h3>
        <li></li>
      </ul>
    </div>
  );
};

export default Info;

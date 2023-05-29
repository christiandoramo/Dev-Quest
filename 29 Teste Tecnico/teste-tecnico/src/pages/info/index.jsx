import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemon } from "../../services";

const Info = (props) => {
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getPokemon(id).then((data) => setPokemon(pokemon));
  });

  return (
    <div>
      {/* Imagem do pokemon
            Nome
            Lista de movimentos do pokemon (moves)
            Lista de habilidades do pokemon (abilities)
            a lista de habilidades deve apresentar o nome e o textodescritivo da habilidade
            Tipo do pokemon (type) */}

      <img src={pokemon.sprites.official_artwork.front_default} />
      <h1>{pokemon.name}</h1>
      <ul></ul>
      <p>id</p>
    </div>
  );
};

export default Info;

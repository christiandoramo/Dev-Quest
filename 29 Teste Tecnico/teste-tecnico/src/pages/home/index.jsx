import React, { useEffect, useState } from "react";
import { getPokemons, getPokemon } from "../../services";
import { Link } from "react-router-dom";

//pokemon.sprites.official_artwork.front_default
const pokemonsAchados = [
  {
    url: "",
    id: "",
    nome: "",
    imagem: "",
  },
];

const Home = (props) => {
  const [pokemons, setPokemon] = useState([]);
  useEffect(() => {
    getPokemons().then(async (data) => {
      setPokemon(...pokemons, ...data);
    });
  }, []);

  return (
    <>
      <h1>Os Pikomon</h1>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <Link to={`/info/${pokemon.id}`}>
              <h2>{pokemon.name}</h2>
              <img
                src={sprites.other["official-artwork"].front_default}
                alt="Sprite do Pokémon"
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;

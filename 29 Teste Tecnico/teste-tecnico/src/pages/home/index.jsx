import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMorePokemons } from "../../services";
import { BtnVerMais } from "../../components/buttons";

const Home = (props) => {
  const range = 10;
  const [pokemons, setPokemon] = useState([]);
  useEffect(() => {
    getMorePokemons(range, offset).then((pokemons) => setPokemon(pokemons));
  }, []);

  const addPokemons = async () => {
    const pokemonsCurrent = await getMorePokemons(range, offset);
    offset += 10;
    setPokemon([...pokemons, ...pokemonsCurrent]);
  };

  return (
    <>
      <h1>Lista de Pokémons</h1>
      <BtnVerMais addPokemons={addPokemons} />
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <Link to={`/info/${pokemon.id}`}>
              <h2>{pokemon.name}</h2>
              <img src={pokemon.image} alt="Sprite do Pokémon" />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;

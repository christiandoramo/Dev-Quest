import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMorePokemons, getPokemons } from "../../services";
import { BtnVerMais } from "../../components/buttons";

const Home = (props) => {
  const [pokemons, setPokemon] = useState([]);
  useEffect(() => {
    // missao futura - salvar a lista de pokemons adicionados no cookies com json
    getPokemons(10).then((data) => {
      setPokemon(data);
    });
  }, []);

  const addPokemons = async () => {
    const more = await getMorePokemons(10);
    setPokemon([...pokemons, ...more]);
  };

  return (
    <>
      <h1>Os Pikomon</h1>
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

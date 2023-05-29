import Pokemon from "../models/pokemon.js";

let offset = 10;
export async function getPokemons(range) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`
  );
  let indexsPokemons = await response.json();
  let pokemonsData = [];
  for (const indexPokemon of indexsPokemons.results) {
    const pokemonData = await getPokemon(indexPokemon.url);
    pokemonsData = [...pokemonsData, pokemonData];
  }
  return pokemonsData;
}

export async function getMorePokemons(range) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${range}&offset=${offset}`
  );
  let indexsPokemons = await response.json();
  let pokemonsData = [];
  for (const indexPokemon of indexsPokemons.results) {
    const pokemonData = await getPokemon(indexPokemon.url);
    pokemonsData = [...pokemonsData, pokemonData];
    offset++;
  }
  return pokemonsData;
}

export async function getPokemon(url) {
  const response = await fetch(url);
  const data = await response.json();
  const newPokemon = Pokemon.create(
    data.id, // number
    data.name, // string
    data.sprites.other["official-artwork"].front_default, // string
    data.moves, // []
    data.abilities, // []
    data.types // []
  );
  return newPokemon;
}

export async function getPokemonById(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await response.json();
  const newPokemon = Pokemon.create(
    data.id, // number
    data.name, // string
    data.sprites.other["official-artwork"].front_default, // string
    data.moves, // []
    data.abilities, // []
    data.types // []
  );
  return newPokemon;
}

getPokemons(3).then((x) => x.forEach((y) => console.log(y.name)));

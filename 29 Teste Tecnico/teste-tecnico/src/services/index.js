import Pokemon from "../models/pokemon.js";

const urlPokemons = "https://pokeapi.co/api/v2/pokemon";
export async function getMorePokemons(range, offset) {
  const response = await fetch(
    `${urlPokemons}?limit=${range}&offset=${offset}`
  );
  const indexPokemons = await response.json();
  // pegando todos json pokemons
  const pokeDataArray = await Promise.all(
    indexPokemons.results.map((poke) => getPokemonData(poke.url))
    // buscando os dados de abilidades, typos, e os gerais do json padrão
  );
  // offset += 10; // GRAVAR O OFFSET EM COOKIES, PARA DEIXAR SALVO A POSIÇÃO ATUAL
  return pokeDataArray;
}

// agora fazer o codigo em getPokemon que adicione as habilidades, types e moves
export async function getPokemonAbilities(pokemonData) {
  const pokeAbilitiesData = await Promise.all(
    pokemonData.abilities.map(async (index) => {
      const response = await fetch(index.ability.url);
      const abilityData = await response.json();
      return {
        name: index.ability.name,
        effect: abilityData.effect_entries[1].effect,
      };
    })
  );
  return pokeAbilitiesData;
}
export async function getPokemonData(PokemonUrl) {
  const responseInfo = await fetch(PokemonUrl);
  const pokeData = await responseInfo.json();
  const abilities = await getPokemonAbilities(pokeData);

  const data = {
    image: pokeData.sprites.other["official-artwork"].front_default,
    id: pokeData.id,
    name: pokeData.name,
    abilities: abilities, // basta os atributos terem os mesmos nomes que vai se tornar objeto pokemon
    types: [], //type
  };

  return data;
}

export async function getPokemonById(id) {
  const data = await getPokemonData(`${urlPokemons}/${id}/`);
  console.log(data);
  return data;
}

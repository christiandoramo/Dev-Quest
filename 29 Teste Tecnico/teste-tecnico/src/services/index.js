export async function getPokemons() {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`
  );
  const data = await response.json();
  return data.results;
}

export async function getPokemon(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

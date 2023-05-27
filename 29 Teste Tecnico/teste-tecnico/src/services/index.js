export async function getPokemons(){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`);
    return await response.json();
}

export async function getPokemon(id){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    return await response.json();
}
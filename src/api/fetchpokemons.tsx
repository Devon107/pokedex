// https://unpkg.com/pokemons@1.1.0/pokemons.json
import { formatPokemonName } from "../lib/utils";
export const fetchPokemons = async () => {
    const response = await fetch('https://unpkg.com/pokemons@1.1.0/pokemons.json');
    if(!response.ok) {
        throw new Error('Failed to fetch pokemons');
    }
    const data = await response.json();

    const pokemons = data.results.map((pokemon: any) => ({
        name: pokemon.name,
        id: pokemon.national_number,
        imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatPokemonName(pokemon.name)}.gif`,
    }))

    const uniquePokemons = pokemons.filter((pokemon: any, index: number) => pokemons.findIndex((p:any) => p.name === pokemon.name) === index);

    return uniquePokemons;
}
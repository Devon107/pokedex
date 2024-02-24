// https://pokeapi.co/api/v2/pokemon/bulbasaur
import { formatPokemonName } from "../lib/utils";
export const fetchPokemonByName = async (name : string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${formatPokemonName(name)}`);
    if(!response.ok) {
        throw new Error('Failed to fetch pokemons');
    }
    const data = await response.json();

    const pokemondata = {
        name: data.name,
        id: data.national_number,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defensa: data.stats[2].base_stat,
        imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${data.name.toLowerCase()}.gif`,
    }

    return pokemondata;
}
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PokeballImage from '../assets/pokeball.png';
import Footer from '../components/Footer';
import styles from './pokemon.module.css';
import Loading from "../components/Loading";
import { waitFor } from '../lib/utils';
import { fetchPokemonByName } from '../api/fetchpokemon';

const initialState = {
    name: '',
    id: 0,
    hp: 0,
    attack: 0,
    defensa: 0,
    imgSrc: '',
}

const Pokemon = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(initialState);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPokemon = async () => {
            setIsLoading(true);
            await waitFor(1000);
            const data = await fetchPokemonByName(name as string);
            setPokemon(data);
            setIsLoading(false);
        }
        fetchPokemon();
    }, [name]);

    if(isLoading) {
        return <Loading />
    }

    return (
        <>
        <button className={styles.pokemonButton} onClick={() => navigate(-1)}>
            <img className={styles.pokeballImage} src={PokeballImage} alt="Pokeball" /> Go back
        </button>
        <main className={styles.pokemon}>
            <article className={styles.pokemonCard}>
                <h1 className={styles.pokemonName}>{name}</h1>
                <h2 className={styles.pokemonId}>No <span>{pokemon?.id}</span></h2>
                <img className={styles.pokemonImg} src={pokemon?.imgSrc} alt={name}/>
                <h3 className={styles.pokemonStats}>HP: <span>{pokemon?.hp}</span></h3>
                <h3 className={styles.pokemonStats}>Attack: <span>{pokemon?.attack}</span></h3>
                <h3 className={styles.pokemonStats}>Defense: <span>{pokemon?.defensa}</span></h3>
            </article>
        </main>
        <Footer />
        </>
    )
}

export default Pokemon;
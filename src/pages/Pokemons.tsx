import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import styles from './pokemons.module.css';
import { fetchPokemons } from '../api/fetchpokemons';
import Loading from '../components/Loading';
import { waitFor } from '../lib/utils';


const Pokemons = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchAllPokemons = async () => {
            setIsLoading(true);
            await waitFor(1000);
            const data = await fetchPokemons();
            setPokemons(data);
            setIsLoading(false);
        }
        fetchAllPokemons();
    }, []);

    if(isLoading) {
        return <Loading />
    }

    const filteredPokemons = pokemons?.slice(0, 151).filter((pokemon: any) => {return pokemon.name.toLowerCase().match(query.toLowerCase())});
    return (
        <>
            <Header query={query} setQuery={setQuery}/>
            <main>
                <nav className={styles.list}>
                    {
                        filteredPokemons?.slice(0, 151).map((pokemon: any) => (
                            <Link className={styles.listItem} to={`/pokemons/${pokemon.name}`}>
                                <img className={styles.listItemIcon} src={pokemon.imgSrc} alt={pokemon.name}/>
                                <div className={styles.listItemText}>
                                    <span>
                                        {pokemon.name}
                                    </span>
                                    <span>
                                        {pokemon.id}
                                    </span>
                                </div>
                            </Link>
                        ))
                    }
                </nav>
            </main>
            <Footer />
        </>
    )
}

export default Pokemons;
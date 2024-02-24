import React from 'react';
import { Link } from 'react-router-dom';
import PokemonPic from '../assets/pikachu.png';
import MarkerPic from '../assets/pointer.png';
import PokeballPic from '../assets/pokeball.png';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link className={styles.footerLink} to="/pokemons">
                <img className={styles.footerIcon} src={PokemonPic} alt="pikachu face" />
                Pokémons
            </Link>
            <Link className={styles.footerLink} to="/pokemons">
                <img className={styles.footerIcon} src={PokeballPic} alt="pokeball" />
                Items
            </Link>
            <Link className={styles.footerLink} to="/pokemons">
                <img className={styles.footerIcon} src={MarkerPic} alt="marker pointer" />
                Map
            </Link>
        </footer>
    )
}

export default Footer;
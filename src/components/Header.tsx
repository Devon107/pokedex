import React from 'react';
import styles from './header.module.css';

type Props = {
    query: string
    setQuery: (query: string) => void
}

const Header = ({query, setQuery} : Props) => {
    return (
        <header className={styles.header}>
            <input placeholder="Search a Pokémon" type="text" value={query} onChange={e => setQuery(e.target.value)}/>
        </header>
    )
}

export default Header;
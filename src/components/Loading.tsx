import Pokedex from "../assets/pokedex.png";
import styles from './loading.module.css';

export default function Loading() {
    return (
        <div className={styles.loading}>
            <img className={styles.loadingIcon} src={Pokedex} alt="loading" />
        </div>
    );
}
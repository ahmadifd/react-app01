import Header from "./header";
import SearchInput from "./SearchInput";
import styles from './home.module.css';
import CocktailList from './CocktailList';
import SingleCocktail from "./SingleCocktail";

const Home  = () => {
    return (
        <div className={styles.home}>
            <Header />
            <SearchInput />
            
            <CocktailList />
        </div>
    )
}

export default Home;
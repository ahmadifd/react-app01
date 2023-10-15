import Header from "./header";
import SearchInput from "./SearchInput";
import styles from "./home.module.css";
import CocktailList from "./CocktailList";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className="container mt-3">
        <Header />
        <SearchInput />
        <CocktailList />
      </div>
    </div>
  );
};

export default Home;

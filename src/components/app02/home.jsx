import styles from './header.module.css';
import Header from "./header";

const Home  = () => {
  return (
      <div className={styles.home}>
          <Header />
          <h2>Home</h2>
      </div>
  )
}

export default Home;

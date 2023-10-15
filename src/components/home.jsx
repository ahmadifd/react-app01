import styles from "../components/home.module.css";
import { Provider } from "react-redux";
import { Login2 } from "./login2";
import { Contact } from "./contact";
import { store } from "../Store";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 className={styles.img}>Home - Hello </h1>
      <h1>Farshid Ahmadi</h1>
    </>
  );
};

export default Home;

import Home from "./components/app02/home";
import { BrowserRouter } from "react-router-dom";
import { Route, Router, Routes } from "react-router-dom";
import SingleCocktail from "./components/app02/SingleCocktail";
import Navbar from "./components/app02/navbar";
import { store } from "./components/app02/redux/store";
import { Provider } from "react-redux";

const App02 = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <div className="container mt-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cocktail/:id?" element={<SingleCocktail />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App02;

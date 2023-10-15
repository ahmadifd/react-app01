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
             
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>

      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/cocktail/:id?" element={<SingleCocktail />} />
             <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App02;

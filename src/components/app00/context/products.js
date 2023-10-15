import { createContext } from "react";

const productContext = createContext({
  allproducts: [],
  handleIncrement: () => {},
  handleDeccrement: () => {},
  handleDelete: () => {},
  resetProducts: () => {},
});

export default productContext;

import Navbar from "./components/functional/navbar";
import Products from "./components/functional/products";
import { useState } from "react";

function App() {
  const [allproducts, setallProducts] = useState([
    { id: 1, productCount: 2, productName: "laptop" },
    { id: 2, productCount: 3, productName: "phone" },
    { id: 3, productCount: 4, productName: "airpods" },
  ]);

  return (
    <>
      <Navbar allproducts={allproducts} />
      <Products
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleDelete={handleDelete}
        resetProducts={resetProducts}
        allproducts={allproducts}
      />
    </>
  );
  function handleIncrement(id) {
    const ps = [...allproducts];
    let p = ps.find((u) => u.id === id);
    let cp = { ...p };
    p.productCount++;
    setallProducts(ps);
  }
  function handleDecrement(id) {
    const updatedproducts = allproducts.map((x) => {
      x.productCount = x.id === id ? x.productCount - 1 : x.productCount;
      return x;
    });
    setallProducts(updatedproducts);
  }

  function handleDelete(id) {
    const updatedproducts = allproducts.filter((x) => x.id !== id);
    setallProducts(updatedproducts);
  }

  function resetProducts() {
    const updatedproducts = allproducts.map((x) => {
      x.productCount = 0;
      return x;
    });
    setallProducts(updatedproducts);
  }
}

export default App;

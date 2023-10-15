import Navbar from "./components/ap00/navbar";
import Products from "./components/ap00/products";
import { useContext, useState, useEffect } from "react";
import productContext from "./components/ap00/context/products";

function App00() {
  const [allproducts, setallProducts] = useState([
    { id: 1, productCount: 2, productName: "laptop" },
    { id: 2, productCount: 3, productName: "phone" },
    { id: 3, productCount: 4, productName: "airpods" },
  ]);

  useEffect(() => {
    console.log("app - mount");
  }, []);
  useEffect(() => {
    console.log("app - mount | update");
  });
  useEffect(() => {
    return () => {
      console.log("app - unmount");
    };
  }, []);
  return (
    <>
      <productContext.Provider
        value={{
          handleIncrement: handleIncrement,
          handleDecrement: handleDecrement,
          handleDelete: handleDelete,
          resetProducts: resetProducts,
          allproducts: allproducts,
        }}
      >
        <Navbar />
        <Products />
      </productContext.Provider>
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

export default App00;

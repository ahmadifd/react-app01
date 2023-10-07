import Product from "./product";
import "../product.css";
import { useState } from "react";

function Products() {
  const [allproducts, setallProducts] = useState([
    { id: 1, productCount: 2, productName: "laptop" },
    { id: 2, productCount: 3, productName: "phone" },
    { id: 3, productCount: 4, productName: "airpods" },
  ]);

  return (
    <>
      {allproducts.map((x, index) => {
        return (
          <Product key={index} productCount={x.productCount} productName={x.productName}>
            <p>Hello Farshid</p>
          </Product>
        );
      })}
    </>
  );
}

export default Products;

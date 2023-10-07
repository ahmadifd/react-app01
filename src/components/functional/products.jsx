import Product from "./product";
import "../product.css";
import { useContext } from "react";
import productContext from "../../context/products";

function Products() {
  const pc = useContext(productContext);
  return (
    <>
      <button className="btn btn-primary" onClick={pc.resetProducts}>
        Reset
      </button>
      {pc.allproducts.map((x, index) => {
        return (
          <Product
            key={index}
            productCount={x.productCount}
            productName={x.productName}
            id={x.id}
          >
            <p>Hello Farshid</p>
          </Product>
        );
      })}
    </>
  );
}

export default Products;

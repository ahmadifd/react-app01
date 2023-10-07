import { useState } from "react";
import "../product.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import productContext from "../../context/products";

const Product = ({ productName, productCount, children, id }) => {
  const pc = useContext(productContext);
  return (
    <div>
      <span className="m-2 text-info">{productName}</span>
      <span className="m-2 badge bg-primary">{format()}</span>

      <button
        onClick={() => {
          pc.handleIncrement(id);
        }}
        className="m-2 btn btn-sm btn-success"
      >
        +
      </button>
      <button
        onClick={() => {
          pc.handleDecrement(id);
        }}
        className="m-2 btn btn-sm btn-warning "
      >
        -
      </button>
      <button
        onClick={() => {
          pc.handleDelete(id);
        }}
        className="m-2 btn btn-sm btn-danger"
      >
        delete
      </button>
      {children}
    </div>
  );

  function format() {
    if (productCount === 0) return "zero";
    else return productCount;
  }
};

export default Product;

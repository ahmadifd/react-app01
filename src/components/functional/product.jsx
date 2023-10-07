import { useState } from "react";
import "../product.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = ({ productName, productCount ,children}) => {
  const [count, setCount] = useState(productCount);
  return (
    <div>
      <span className="m-2 text-info">{productName}</span>
      <span className="m-2 badge bg-primary">{format()}</span>
      <button
        onClick={() => {
          handleIncrement();
        }}
        className="m-2 btn btn-sm btn-success"
      >
        +
      </button>
      <button
        onClick={() => {
          handleDecrement();
        }}
        className="m-2 btn btn-sm btn-warning "
      >
        -
      </button>
      <button
        onClick={() => {
          handleDelete(count, setCount);
        }}
        className="m-2 btn btn-sm btn-danger"
      >
        delete
      </button>
      {children}
    </div>
  );

  function handleIncrement(itemnumber) {
    setCount(count + 1);
    window.setTimeout(handleIncrement0, 1, itemnumber);
  }
  function handleIncrement0(itemnumber) {
    //console.log(this.state);
  }

  function handleDecrement(itemnumber) {
    setCount(count - 1);
    //console.log(this.state);
  }

  function format() {
    return count === 0 ? "zero" : count;
  }
};

function handleDelete(count, setCount) {
  setCount(0);
  //console.log(this.state);
}

export default Product;

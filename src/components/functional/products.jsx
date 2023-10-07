import Product from "./product";
import "../product.css";

function Products({
  handleIncrement,
  handleDecrement,
  handleDelete,
  resetProducts,
  allproducts,
}) {
  return (
    <>
      <button className="btn btn-primary" onClick={resetProducts}>
        Reset
      </button>
      {allproducts.map((x, index) => {
        return (
          <Product
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleDelete={handleDelete}
            resetProducts={resetProducts}
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

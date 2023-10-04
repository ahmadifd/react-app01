import { Component } from "react";
class Product extends Component {
  state = {};
  count = 5;

  render() {
    return (
      <>
        {this.count !== 0 ? (
          <>
            <span className="m-2 text-info">product name</span>
            <span className="m-2 badge bg-primary">{this.count}</span>
            <button className="m-2 btn btn-sm btn-success">+</button>
            <button className="m-2 btn btn-sm btn-warning ">-</button>
            <button className="m-2 btn btn-sm btn-danger">delete</button>
          </>
        ) : (
          <>
            <h1>there is no product</h1>
          </>
        )}
      </>
    );
  }
}

export default Product;

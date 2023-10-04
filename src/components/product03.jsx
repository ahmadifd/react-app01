import { Component } from "react";
class Product extends Component {
  state = {};
  count = 0;

  render() {
    return (
      <>
        <span className="m-2 text-info">product name</span>
        <span className="m-2 badge bg-primary">{this.format()}</span>
        <button className="m-2 btn btn-sm btn-success">+</button>
        <button className="m-2 btn btn-sm btn-warning ">-</button>
        <button className="m-2 btn btn-sm btn-danger">delete</button>
      </>
    );
  }
  format(count) {
    return this.count === 0 ? "zero" : this.count;
  }
}

export default Product;

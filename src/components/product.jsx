import { Component } from "react";
import "./product.css";

class Product extends Component {
  state = {
    count: 5,
  };
  render() {
    return (
      <>
        <span className="m-2 text-info">laptop</span>
        <span className="m-2 badge bg-primary">{this.format()}</span>
        <button
          onClick={() => {
            this.handleIncrement();
          }}
          className="m-2 btn btn-sm btn-success"
        >
          +
        </button>
        <button
          onClick={() => {
            this.handleDecrement();
          }}
          className="m-2 btn btn-sm btn-warning "
        >
          -
        </button>
        <button
          onClick={() => {
            this.handleDelete();
          }}
          className="m-2 btn btn-sm btn-danger"
        >
          delete
        </button>
      </>
    );
  }
  handleIncrement = (itemnumber) => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
    window.setTimeout(this.handleIncrement0, 1, itemnumber);
  };
  handleIncrement0 = (itemnumber) => {
    console.log(this.state);
  };

  handleDecrement = (itemnumber) => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
    console.log(this.state);
  };
  handleDelete = (itemnumber) => {
    this.setState({ count: 0 });
    console.log(this.state);
  };
  format() {
    return this.state.count === 0 ? "zero" : this.state.count;
  }
}

export default Product;

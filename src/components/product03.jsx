import { Component } from "react";
class Product extends Component {
  state = {};

  render() {
     const count = 5;
    //  const list=[<li>item one</li>,< li>item two</li>,<li>item three</li>]
    // const list = ["item one", "item two", "item three"];
    // const mapedlist = list.map((item) => {
    //   return <li>item</li>;
    // });
    return (
      <>
        <span className="m-2 text-info">product name</span>
        {/* <span className='m-2 badge bg-primary'>{count}</span> */}
        {/* <span className="m-2 badge bg-primary">{this.format()}</span> */}
        <span className="m-2 badge bg-primary">{this.format(count)}</span>

        <button className="m-2 btn btn-sm btn-success">+</button>
        <button className="m-2 btn btn-sm btn-warning ">-</button>
        <button className="m-2 btn btn-sm btn-danger">delete</button>
        {/* <ul>{list}</ul> */}
        {/* <ul>{mapedlist}</ul> */}
        {/* <ul>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul> */}
      </>
    );
  }
  //   format() {
  //     // return 0;
  //     return <a href="">zero</a>;
  //   }
  format(count) {
    if (count == 0) return "zero";
    else return count;
  }
}

export default Product;

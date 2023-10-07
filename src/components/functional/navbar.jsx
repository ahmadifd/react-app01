//function Navbar(props) {
function Navbar({ allproducts }) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
          Navbar(
          {productCounts()})
        </a>
      </div>
    </nav>
  );
  function productCounts() {
    let sum = 0;
    allproducts.forEach((element) => {
      sum = sum + element.productCount;
    });
    return sum;
  }
}

export default Navbar;

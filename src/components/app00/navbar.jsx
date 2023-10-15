import productContext from "./context/products";
import { useContext ,useEffect} from "react";


function Navbar() {
  const pc = useContext(productContext);
  useEffect(() => {
    console.log("navbar - mount");
  }, []);
  useEffect(() => {
    console.log("navbar - mount | update");
  });
  useEffect(() => {
    return () => {
      console.log("navbar - unmount");
    };
  }, []);

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
    pc.allproducts.forEach((element) => {
      sum = sum + element.productCount;
    });
    return sum;
  }
}

export default Navbar;

import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Navbar = (props) => {
  const routeParams = useParams();
  useEffect(() => {});

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Home
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to={`/cocktail${routeParams.id ? "/" + routeParams.id : ""}`}
                >
                  SingleCocktail
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to={`/form`}>
                  Form
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

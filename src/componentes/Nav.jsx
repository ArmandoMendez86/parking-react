import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to={"/"} className="navbar-brand">
            <img src="logo.jpg" alt="" width={100} className="rounded-circle" />
          </Link>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to={"/estacionamiento"}
                className="nav-link active"
                aria-current="page"
              >
                Estacionamiento
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/pension"} className="nav-link">
                Pensión
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/servicio"} className="nav-link">
                Servicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/gasto"} className="nav-link">
                Gasto
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

    /*    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/about">Sobre Nosotros</Link>
    </nav> */
  );
}

export default Navbar;

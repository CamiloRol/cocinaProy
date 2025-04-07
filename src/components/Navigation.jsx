import React from "react";

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-nav">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"> </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 justify-content-between">
            <li className="nav-item">
              <a className="nav-link" href="#">
                {" "}
                INICIO{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {" "}
                CATEGORIAS{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {" "}
                RECETAS PARA FREIDORAS{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {" "}
                BLOG{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {" "}
                VIDEO RECETAS{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {" "}
                RECETAS TEMPORADAS{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-search"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

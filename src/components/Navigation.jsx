import React from "react";
import { Link } from "react-router-dom"

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
              <Link className="nav-link" to="/">
                INICIO
              </Link>
            </li>
           {/*  <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                CATEGORIAS
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    FREIDORA DE AIRE
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    ENSALADAS Y ALIÑOS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    ENTRADAS Y TAPAS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    MASAS Y PANES
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    ARROCES
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    PASTAS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    HUEVOS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    SOPAS Y CREMAS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    VERDURAS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    LEGUMBRES Y COCIDOS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    PESCADOS Y MARISCOS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    CARNE
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    POLLO Y AVES
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    SALSAS Y GUARNICIONES
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    POSTRES
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BEBIDAS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    DESAYUNOS
                  </a>
                </li>
              </ul>
            </li> */}
           {/*  <li className="nav-item">
              <a className="nav-link" href="#">
                RECETAS PARA FREIDORAS
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                BLOG
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    CUADERNO DE COCINA
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    IDEAS Y MENU
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    TRUCOS Y TECNICAS DE COCINA
                  </a>
                </li>
              </ul>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/Recipes">
                RECETAS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                CONTACTO
              </Link>
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

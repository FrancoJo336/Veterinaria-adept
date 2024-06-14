import React from "react";
import './Style.css';
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navegador">
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#ead2a2' }}>
        <div className="container-fluid">
          <img src="../public/lgo.png" alt="Logo"/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/personal'>Personal</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Servicios
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/personal">Atención médica</Link></li>
                  <li><Link className="dropdown-item" to="#">Peluquería</Link></li>
                  <li><Link className="dropdown-item" to="#">Inyecciones</Link></li>
                  <li><Link className="dropdown-item" to="#">Comida</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Adopciones</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="---------" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Buscar</button>
              <Link to="" target="_blank">Agendar una cita</Link>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;


import React from "react";
import './Style.css';

function Navbar() {
  return (
    <div className="Navegador">
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#ead2a2'}}>
      <div className="container-fluid">
        <img src="../public/lgo.png"/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Personal</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Servicios
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Atención medica</a></li>
                <li><a className="dropdown-item" href="#">Peluqueria</a></li>
                <li><a className="dropdown-item" href="#">Inyecciones</a></li>
                <li><a className="dropdown-item" href="#">Comida</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Adopciones</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="---------" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Buscar</button>
            <a href="" target="_blank">Agendar una cita</a>
          </form>
        </div>
      </div>
    </nav>
  </div>
  
  );
}

export default Navbar;

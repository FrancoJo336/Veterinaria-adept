import React from 'react';
import "./StyleA.css"

function Adopcion(props) {
  return (
    <div className='tamano'>
      <h1>{props.Titulo}</h1>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={props.ad1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Nombre: {props.nombre1}</h5>
              <p>Edad: {props.edad1}</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={props.ad2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Nombre: {props.nombre2}</h5>
              <p>Edad: {props.edad2}</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={props.ad3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Nombre: {props.nombre3}</h5>
              <p>Edad: {props.edad3}</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={props.ad4} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Nombre: {props.nombre4}</h5>
              <p>Edad: {props.edad4}</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={props.ad5} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Nombre: {props.nombre5}</h5>
              <p>Edad: {props.edad5}</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}


export default Adopcion;

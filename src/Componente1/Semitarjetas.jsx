import React from "react";
import './StyleS.css';

function Semitarjetas(props) {
  return (
    <div className="container">
    <div className="box-container">
        <div className="box">
            <img src={props.Imagen} alt="" />
            <h3>{props.Servicio}</h3>
            <p>{props.Descripcion}</p>
            <a href="#" className="btn">Ver más</a>
        </div>
    </div>
    </div>
    );
}

export default Semitarjetas;
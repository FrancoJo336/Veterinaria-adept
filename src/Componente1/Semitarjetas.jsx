import React from "react";
import './StyleS.css';
import { Link } from "react-router-dom";

function Semitarjetas(props) {
  return (
    <div className="container">
    <div className="box-container">
        <div className="box">
            <img src={props.Imagen} alt="" />
            <h3>{props.Servicio}</h3>
            <p>{props.Descripcion}</p>
            <Link href="#" className="btn">Ver más</Link>
        </div>
    </div>
    </div>
    );
}

export default Semitarjetas;
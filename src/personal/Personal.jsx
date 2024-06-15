import React from "react";
import "./StyleP.css";

function Personal(props) {
  return (
    <div className="cabeza">
      <h1>{props.Ocupacion}</h1>
      <div className="card-group">
        <div className="card">
          <img src={props.foto} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Nombre: {props.Nombre}</h5>
            <p className="card-text">{props.Describir}</p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">Tiempo de residencia: {props.Tiempo}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;

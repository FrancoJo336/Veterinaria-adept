import React from "react";
import './Styleb.css';

function Body() {
  return (
    <div>
        <div className="clearfix"></div>
    <section className="content">
    <h1>Bienvenid@s</h1> 
    <div className="container text-center">
        <div className="row align-items-start">
            <div className="col">
                <img src="../public/perroygato.jpg" alt="perro y gato" />
            </div>
            <div className="col">
                <img src="../public/perros.jpg" alt="Imagen 2" />
            </div>
            <div className="col">
                <img src="../public/granja.jpg" alt="Imagen 3" />
            </div>
        </div>
    </div>
    <div className="clearfix"></div>
</section>
<section className="content">
    <div className="descripcion">
        <h1>Veterinaria Adept</h1>
        <h3>Servicios y cuidados</h3>
        <p>Gracias al apoyo constante de la ciudadanía y de aquellos que nos apoyan podemos ofrecer diversos sercios para nuestras mascotas, desde el servicio más básico como las vacunas hasta la reabilitación por traumas</p>
    </div>
    <div className="clearfix"></div>
</section>
<div className="container">
    <section className="content">
        <h1>Servicios básico</h1>
    </section>
</div>
</div>

);
}

export default Body;
import React from "react";
import './Stylep.css';

function Pie() {
  return (
    <div>
    <footer className="pie-pagina">
        <div className="grupo-1">
            <div className="box">
                <figure>
                    <a href="#">
                        <img src="../public/lgo.png" alt=""/>
                    </a>
                </figure>
            </div>
            <div className="box">
                <h2>SOBRE NOSOTROS</h2>
                <p>Ofrecen instalaciones avanzadas y tecnología de vanguardia para las mascotas</p>
                <p>Fundado en 2020, esta clinica veterinaria ha crecido junto a las familias</p>
            </div>
            <div className="box">
                <h2>SIGUENOS</h2>
                <div className="red-social">
                    <a href="#" className="icono">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="" className="icono">
                        <i className="bi bi-whatsapp"></i>
                    </a>
                    <a href=" " className="icono">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href=" " className="icono">
                        <i className="bi bi-twitter-x"></i>
                    </a>
                </div>
            </div>
        </div>
        <div className="grupo-2">
            <small>© 2024 <b>Adept</b> - José Manuel Franco Quispe</small>
        </div>
    </footer>
</div>

);
}

export default Pie;
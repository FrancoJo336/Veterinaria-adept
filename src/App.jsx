import React from 'react';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from './navbar/Navbar';
import Semitarjetas from "./Componente1/Semitarjetas";
import Personal from './personal/Personal';
import Pie from "./Piepagina/Pie";
import Body from "./Cuerpo/Body";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/personal" element={<Personal />} />
      </Routes>
      <Pie />
    </div>
  );
}

function Inicio() {
  return (
    <div>
      <Body />
      <div className="box-container" style={{ justifyContent: 'center' }}>
        <Semitarjetas Servicio="Atención Médica" Descripcion="Medición de temperatura y signos vitales" Imagen="../../public/medicina.png" />
        <Semitarjetas Servicio="Peluquería" Descripcion="Cortes fantásticos" Imagen="../../public/tijeras.png" />
        <Semitarjetas Servicio="Inyecciones" Descripcion="Control de vacunas" Imagen="../../public/vacuna.png" />
        <Semitarjetas Servicio="Comida" Descripcion="Comida Balanceada" Imagen="../../public/comida.png" />
        <Semitarjetas Servicio="Adopción" Descripcion="Tiernos y fieles" Imagen="../../public/papeles.png" />
      </div>
      <Pie />
    </div>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Semitarjetas from "./Componente1/Semitarjetas";
import Personal from './personal/Personal';
import Pie from "./Piepagina/Pie";
import Body from "./Cuerpo/Body";
import './App.css';
import Adopcion from './adopcion/Adocion';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/personal" element={
          <div className="personal-card">
          <Personal Ocupacion="Jefe Veterinario" 
            Nombre="Juan Carlos Condori" 
            Describir="Dedicado a su labor desde que se fundo el lugar, el primero en acudir al llamado de ayuda."
            Tiempo="6 años"
            foto="../public/foto1.jpg"
         />
         </div>
        } 
        />
        <Route path="/adopcion" element={<Adopcion 
        Titulo="Adopción"
        ad1="../public/ad1.jpg" 
        nombre1="Choquito"
        edad1="3 meses"
        ad2="../public/ad2.jpg" 
        nombre2="negrito"
        edad2="3 meses"
        ad3="../public/ad3.jpg" 
        nombre3="Chapulin"
        edad3="7 meses"
        />} />
      </Routes>
      <Routes>
        <Route path="/personal" element={
          <div className="personal-card">
          <Personal Ocupacion="Cardiologo" 
            Nombre="Jhonny Gomez" 
            Describir="Destacado, especializado en el diagnóstico y tratamiento de enfermedades cardíacas en animales."
            Tiempo="2 años"
            foto="../public/foto3.jpg" 
            />
          </div>
        } />
      </Routes>
      <Routes>
        <Route path="/personal" element={
          <div className="personal-card">
          <Personal Ocupacion="Cirugana" 
            Nombre="Sara Torres" 
            Describir="Experta, reconocida por su habilidad y precisión en cirugías complejas."
            Tiempo="1 año"
            foto="../public/foto4.jpg" 
            />
          </div>
        } />
      </Routes>
      <Routes>
        <Route path="/personal" element={
          <div className="personal-card">
          <Personal Ocupacion="Terapeuta" 
            Nombre="Roxana Morales" 
            Describir="especializada en la recuperación emocional y física de mascotas."
            Tiempo="5 años"
            foto="../public/foto2.jpg" 
            />
          </div>
        } />
      </Routes>
      <Routes>
        <Route path="/personal" element={
          <div className="personal-card">
          <Personal Ocupacion="Radiológo" 
            Nombre="Carlos Vargas" 
            Describir="enfocado en la imagenología avanzada para el diagnóstico preciso en animales."
            Tiempo="8 meses"
            foto="../public/foto5.jpg" 
            />
          </div>
        } />
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
    </div>
  );
}

export default App;


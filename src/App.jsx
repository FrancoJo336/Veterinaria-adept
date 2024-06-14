import './App.css';
import Navbar from './navbar/Navbar';
import Pie from "./Piepagina/Pie";
import Body from "./Cuerpo/Body";
import Semitarjetas from "./Componente1/Semitarjetas";

function App() {
  return (
      <>
      <Navbar/>
      <Body/>
      <div className="box-container" style={{ justifyContent: 'center' }}>
        <Semitarjetas Servicio="Atención Medica" Descripcion="Medición de temperatura y signos vitales" Imagen="../../public/medicina.png"/>
        <Semitarjetas Servicio="Peluqueria" Descripcion="Cortes fantasticos" Imagen="../../public/tijeras.png"/>
        <Semitarjetas Servicio="Inyecciones" Descripcion="Control de vacunas" Imagen="../../public/vacuna.png"/>
        <Semitarjetas Servicio="Comida" Descripcion="Comida Valanceada" Imagen="../../public/comida.png"/>
        <Semitarjetas Servicio="Adopcion" Descripcion="Tiernos y fieles" Imagen="../../public/papeles.png"/>
        </div>
      <Pie/>
      
      </>
  );
}

export default App;

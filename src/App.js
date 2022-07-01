import './App.css';
import sergioLogo from './imagenes/logo-sergio.png';
import Tarea from './componentes/Tarea';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='sergio-logo-contenedor'>
        <img src={sergioLogo} className='sergio-logo' alt='logo' />
      </div>
        <div className='tareas-lista-principal'>
          <h1>Mis Tareas</h1>
          <Tarea texto='Aprender React'/>
        </div>  
      
    </div>
  );
}

export default App;

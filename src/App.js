import './App.css';
import sergioLogo from './imagenes/logo-sergio.png';
import TareaFormulario from './componentes/TareaFormulario';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='sergio-logo-contenedor'>
        <img src={sergioLogo} className='sergio-logo' alt='logo' />
      </div>
        <div className='tareas-lista-principal'>
          <h1>Mis Tareas</h1>
          <ListaDeTareas />
        </div>  
      
    </div>
  );
}

export default App;

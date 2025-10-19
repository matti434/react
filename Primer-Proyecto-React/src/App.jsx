import FormUsuario from './Componentes/FormUsuario';
import TodoList from './ComponentesLista/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import { FormPersonal } from './Componentes/FormPersonal';
import { TipPercentage } from './ComponentesCal/TipPercentage';
import { PeopleCounter } from './ComponentesCal/PeopleCounter';

function App() {
  return (
    <div className="app">
      <TipCalculator/>
      <TipPercentage/>
      <PeopleCounter/>      
    </div>
  );
}

export default App;
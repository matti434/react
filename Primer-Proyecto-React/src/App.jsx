import FormUsuario from './Componentes/FormUsuario';
import TodoList from './ComponentesLista/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import { FormPersonal } from './Componentes/FormPersonal';

function App() {
  return (
    <div className="app">
      <header>
        <h1>✅ Mi Lista de Tareas</h1>
        <p>Gestiona tus tareas diarias</p>
      </header>
      
      <main>
        <TodoList />
      </main>
      <section>
        <h1>Formulario Usuario</h1>
        <FormPersonal/>
      </section>
    </div>
  );
}

export default App;
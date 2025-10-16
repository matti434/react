import TodoList from './ComponentesLista/TodoList';
import './css/App.css';

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
    </div>
  );
}

export default App;
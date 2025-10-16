import { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <h1>📝 Mi Lista de Tareas</h1>
      <TodoList />
    </div>
  );
}

export default App;
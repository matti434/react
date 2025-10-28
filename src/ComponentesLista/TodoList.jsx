import { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    const todo = {
      id: Date.now(),
      text: newTodo.text,
      date: newTodo.date,
      completed: false
    };
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="todo-list">
      <AddTodoForm onAddTodo={addTodo} />
      
      <div className="todos-container">
        {todos.length === 0 ? (
          <p>🎉 ¡No hay tareas pendientes!</p>
        ) : (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={deleteTodo}
              onToggleComplete={toggleComplete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
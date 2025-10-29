const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
          className="checkbox"
        />
        
        <div className="todo-info">
          <span className="todo-text">{todo.text}</span>
          <span className="todo-date">📅 {todo.date}</span>
        </div>
      </div>
      
      <button
        onClick={() => onDelete(todo.id)}
        className="delete-button"
        aria-label="Eliminar tarea"
      >
        🗑️ Eliminar
      </button>
    </div>
  );
};

export default TodoItem;
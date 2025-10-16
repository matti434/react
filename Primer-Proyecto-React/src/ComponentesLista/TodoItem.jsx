import { useState } from "react";



const TodoList = () => {
    // Estado principal que maneja el array de tareas

    const TodoItem = ({ todo, onDelete,OnToggle }) => {
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div className="todo-content">
                <input type="checkbox" checked={todo.completed} onChange={() => onToggleComplete(todo.id)} className="checkbox" />

                <div className="todo-info">
                    <span className="todo-text">{todo.text}</span>
                    <span className="todo-date">📅 {todo.date}</span>
                </div>
            </div>

            <button onClick={() => onDelete(todo.id)} className="dalete-button" aria-label="Eliminar Tarea">
             🗑️ Eliminar
            </button>
        </div>
    };
};

export default TodoList;
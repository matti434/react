import { useState } from "react";

const AddTodoForm = ({ onAddTodo }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") {
      alert("Por favor escribe una tarea");
      return;
    }

    onAddTodo({
      text: text.trim(),
      date: date || new Date().toISOString().split("T")[0],
    });

    setText("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <h3>Agregar Nueva Tarea</h3>

      <div className="form-group">
        <label>Tarea:</label>
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Ej: Estudiar React hooks" 
          className="todo-input"
        />
      </div>
      
      <div className="form-group">
        <label>Fecha:</label>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)}  
          className="date-input"
        />
      </div>

      <button type="submit" className="add-button">
        Agregar Tarea
      </button>
    </form>
  );
};

export default AddTodoForm;

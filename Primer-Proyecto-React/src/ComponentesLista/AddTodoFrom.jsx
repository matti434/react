import { useState } from "react";

const AddTodoForm = () => {

  // Significa que el componente espera recibir una prop llamada onAddTodo que es una funcion
  AddTodoForm = ({ onAddTodo }) => {
    const [text, setText] = useState(""); //decimos que text empieza en vacio pero con setText vamos a poder cambiarle el valor despues
    const [date, setDate] = useState(""); // funciona igual que arriba

    const handleSubmit = (e) => {
      e.preventDefault(); // evita que la pagina se recargue
    };

    if (text.trim() === "") {
      alert("Por favor escribe una tarea");
      return;
    }

    onAddTodo({
      text: text.trim(),
      date: date || new Date().toISOString().split("T")[0],
    });

    // Limpiar el formato
    setText("");
    setDate("");
  };

  return (
    <>
    <form onSubmit={handleSubmit} className= "add-todo-form">
        <h3>Agregar Nueva Tarea</h3>

        <div className="form-group">
            <label>Tarea:</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Ej: Estudiar React hooks" className="todo-input"/>
        </div>
        <div className="form-group">
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)}  className="date-input"/>
        </div>

        <button type="submit" className="add-button">
          Agregar Tarea
        </button>
    </form>
    </>
  )
};

export default AddTodoForm;

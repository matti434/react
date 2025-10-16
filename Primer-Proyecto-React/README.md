
#### Que es un  props en REACT ?

Las props son la coleccion de datos que un componente recibe del contenedor padre, y que puede usarse para redefinir los elementos de React que retornara el componente.

#### 

```
const AddTodoForm = ({ onAddTodo }) => {
```
({ onAddTodo }) : esto es destructuring de props. Significa que el componente espera recibir una prop llamada onAddTodo que es una funcion.
- Equivale a : const addTodoForm = (props) => {const onAddTodo = props.onAddTodo}

que es destructuring de props : "La desestructuración de props facilita la lectura del código de los componentes secundarios y permite ver fácilmente qué props se están utilizando a simple vista."



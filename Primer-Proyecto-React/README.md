## Que es un props en REACT ?

Las props son la coleccion de datos que un componente recibe del contenedor padre, y que puede usarse para redefinir los elementos de React que retornara el componente.

## Que es useState ?

useState devuelve un array con exactamente dos elementos: El estado actual de esta variable de estado, establecida inicialmente en el estado inicial que proporcionaste. La funcion set que te permite cambiarlo a calquier otro valor en respuesta a la interaccion.

#### 1- Declaracion de Componentes y Props

```js
const AddTodoForm = ({ onAddTodo }) => {
```

({ onAddTodo }) : esto es destructuring de props. Significa que el componente espera recibir una prop llamada onAddTodo que es una funcion.

- Equivale a : const addTodoForm = (props) => {const onAddTodo = props.onAddTodo}

que es destructuring de props : "La desestructuración de props facilita la lectura del código de los componentes secundarios y permite ver fácilmente qué props se están utilizando a simple vista."

#### 2- Estados Locales con useState

```js
const [text, setText] = useState("");
const [date, setDate] = useState("");
```

useState(''): Crea un estado inicializado con string vacio ''
text: Variable que guerda el valor actual (lo que el usuario escribe);
setText: Funcion para actualizar el valor de text

Ejemplo:
Usuario escribe "Estudiar React" → text= "Estudiar React"
Usuario selecciona fecha → date = "2024-01-15"

#### 3- Manejo de Submit del Formulario

const handleSubmit = (e) => {
e.preventDefault();
}

e: Es un evento del formulario (automaticamente pasado por el browser)
e.preventDefault(): Evita que la pagina se recargue cuando se envia el formulario (comportamiento por defecto de HTML)

#### 4- Validacion del input

```js
 if(text.trim() === ''){
    alert('Por favor escribe una tarea);
    return;
 }
```

text.trim():Eliminar espacios en blanco al inicio y final
Validacion: Si despues de quitar espacios esta vacio,muestra alerta y sale de la funcion con return

#### 5- Llamada a la Funcion Padre

onAddTodo({
texto: text.trim()
date: date || new Date().toISOString().split('T')[0]
});

onAddTodo(...): Llama a la funcion que viene del componente padre
{ text: text.trim(), date: ...}: Crea un objeto on los datos de la nueva tarea
date || new Date().toISOString().split('T')[0]:

- date: Si el usuario selecciono una fecha,usa esa
- || : Operador "OR" - Si date esta vacio,usa lo que sigue
- new Date().toISOString().split('T')[0]: Fecha de hoy en formato YYYY-MM-DD

#### 6- Limpieza del Formulario

```js
setText("");
setDate("");
```

- Resetea los estados a string vacio
- Esto limpia los inputs auyomaticamente gracias a React

##### Flujo Completo Visualizado:

// 1. Usuario escribe y envía formulario <br>
// 2. handleSubmit se ejecuta <br>
// 3. Validación → Si pasa → Llama a onAddTodo <br>
// 4. onAddTodo recibe: { text: "Estudiar React", date: "2024-01-15" } <br>
// 5. Limpia formulario <br>
// 6. El componente PADRE (TodoList) recibe estos datos y los agrega al estado

#### 1- Estructura Base del formulario

return (
<form onSubmit={handleSubmit} className="add-todo-form">
)

onSubmit={handleSubmit}: Cuando el formulario se envia (con Enter o boton),ejecuta la funcion handleSubmit
className= "add-todo-form": es class pero en React se usa className

#### 2- Inpur de Texto(Tarea)

```js
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
```

label: Etiqueta descriptiva para el input

type="text": Input de texto normal

value={text}: Controlado por React - muestra el valor actual del estado text

onChange={(e) => setText(e.target.value)}: Muy importante - actualiza el estado cuando el usuario escribe

placeholder: Texto guía que desaparece al escribir

1.  Desglose de onChange

- onChange es una prop especial de React para inputs
- Se ejecuta cada vez que el valor del input cambia (cada tecla presionada)

2.  onChange={(e) => }

- (e) => crea una función flecha que recibe un parámetro e
- e es el event object - información sobre el evento que ocurrió
- Esta función se crea cada vez que el componente se renderiza

3.  onChange={(e) => setText( )}

- setText es la funcion que actualiza el estado text
- Viene del useState: const [text,setText] = useState('')
- No modifica el estado directamente,sino que le dice a React que lo actualice

4.  onChange={(e) => setText(e.target.value)}

- e.target: El elemento HTML que disparo el evento(input)
- e.target.value: El valor actual/texto dentro del input
- Cambie en tiempo real cada tecla presionada

#### Flujo Paso a Paso:

Ejemplo: Usuario escribe "H"

Usuario presiona la tecla "H" en el teclado

El navegador detecta el cambio en el input

React ejecuta la función onChange

Se pasa el evento e con toda la información:

``` js

e = {
target: <input type="text" value="">,
target.value: "H", // ← Lo que el usuario escribió
type: "change",
// ... más propiedades del evento
}

```
Se ejecuta setText("H")

React actualiza el estado text a "H"

El componente se re-renderiza con el nuevo valor

El input muestra "H" (porque value={text} ahora es "H")

[Usuario escribe "H"] <br>
         ↓ <br>
[onChange se dispara] <br>
         ↓ <br>
[setText("H") se ejecuta]  <br>
         ↓ <br>
[Estado text cambia a "H"]  <br>
         ↓ <br>
[Componente se re-renderiza]  <br>
         ↓ <br>
[Input muestra "H" en pantalla] <br>
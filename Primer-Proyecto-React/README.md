
## Que es un  props en REACT ?

Las props son la coleccion de datos que un componente recibe del contenedor padre, y que puede usarse para redefinir los elementos de React que retornara el componente.

## Que es useState ?

useState devuelve un array con exactamente dos elementos: El estado actual de esta variable de estado, establecida inicialmente en el estado inicial que proporcionaste. La funcion set que te permite cambiarlo a calquier otro valor en respuesta a la interaccion.


#### 1- Declaracion de Componentes y Props 

```
const AddTodoForm = ({ onAddTodo }) => {
```
({ onAddTodo }) : esto es destructuring de props. Significa que el componente espera recibir una prop llamada onAddTodo que es una funcion.
- Equivale a : const addTodoForm = (props) => {const onAddTodo = props.onAddTodo}

que es destructuring de props : "La desestructuración de props facilita la lectura del código de los componentes secundarios y permite ver fácilmente qué props se están utilizando a simple vista."


#### 2- Estados Locales con useState

```
const [text, setText] = useState('');
const [date, setDate] = useState('');
```

useState(''): Crea un estado inicializado con string vacio ''
text: Variable que guerda el valor actual (lo que el usuario escribe);
setText: Funcion para actualizar el valor de text

Ejemplo:
 Usuario escribe "Estudiar React"  → text= "Estudiar React"
 Usuario selecciona fecha  → date = "2024-01-15"

 #### 3- Manejo de Submit del Formulario

 const handleSubmit = (e) => {
    (e).preventDefault();
 }

 e: Es un evento del formulario (automaticamente pasado por el browser)
 e.preventDefault(): Evita que la pagina se recargue cuando se envia el formulario (comportamiento por defecto de HTML)

 #### 4- Validacion del input

 if(text.trim() === ''){
    alert('Por favor escribe una tarea);
    return;
 }
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
setText('');
setDate('');

- Resetea los estados a string vacio
- Esto limpia los inputs auyomaticamente gracias a React

##### Flujo Completo Visualizado:

// 1. Usuario escribe y envía formulario <br>
// 2. handleSubmit se ejecuta <br>
// 3. Validación → Si pasa → Llama a onAddTodo <br>
// 4. onAddTodo recibe: { text: "Estudiar React", date: "2024-01-15" } <br>
// 5. Limpia formulario <br>
// 6. El componente PADRE (TodoList) recibe estos datos y los agrega al estado


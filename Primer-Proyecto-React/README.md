## Que es un props en REACT ?

Las props son la coleccion de datos que un componente recibe del contenedor padre, y que puede usarse para redefinir los elementos de React que retornara el componente.

## Que es un Hook en React ?

Un Hook es una función especial de React que te permite "engancharte" a características de React desde componentes funcionales.

## Que es useState ?

useState devuelve un array con exactamente dos elementos: El estado actual de esta variable de estado, establecida inicialmente en el estado inicial que proporcionaste. La funcion set que te permite cambiarlo a calquier otro valor en respuesta a la interaccion.

## AddTodoForm.jsx

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

```js

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
[setText("H") se ejecuta] <br>
↓ <br>
[Estado text cambia a "H"] <br>
↓ <br>
[Componente se re-renderiza] <br>
↓ <br>
[Input muestra "H" en pantalla] <br>

## TodoItem.jsx

#### 1- Declaracion y Props

```js
const TodoItem = { todo, onDeletem, onToggleComplete };
```

. Recibe 3 props:

- todo: Objeto con los datos de la tarea ({id,text,date,completed})
- onDelete: Funcion para eliminar la tarea
- onToggleComplete: Funcion para marcar como completada/pendiente

#### 2- Estructura Principal con Clase Conficional

```js
<div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
```

Templete String y Clase Condicional:

- `todo-item ${...}`: Template string que combina texto fijo y variable
- todo.complete ? 'completed' : '' : Operador ternario
  - Si todo.completed es true → agrega clase "completed"
  - Si es false → agrega "" (string vacio)

Resultado posibles:

- Tarea NO completada: className="todo-item "
- Tarea SÍ completada: className="todo-item completed"

#### 3- Checkbox para Completar/Descompletar

```html
<input type="checkbox" checked={todo.completed} onChange={() =>
onToggleComplete(todo.id)} className="checkbox" />
```

type="checkbox": Input tipo checkbo

checked={todo.completed}:

- si todo.completed = true → checkbox marcado ✅
- si todo.completed = false → checkbox vacío ☐
- checked={todo.completed}
  - checked es una prop (atributo) de los inputs tipo checkbox en React
  - NO es un método - es simplemente un valor booleano que le dice al checkbox si debe estar marcado o no
  - Controla el estado visual del checkbox

onChange = {() => onToggleComplete(todo.id)}:

- Cuando el checkbox cambia,ejecuta onToggleComplete pasando el id de la tarea

#### 4- Informacion de la Tarea

```js
<div className="todo-info">
  <span className="todo-text">{todo.text}</span>
  <span className="todo-date">📅 {todo.date}</span>
</div>
```

{todo.text}: El texto de la tarea (ej: "Estudiar React")

{todo.date}: La fecha con un emoji (ej: "📅 2024-01-15")

#### 5- Boton de Eliminar

```js
<button onClick={() => onDelete(todo.id)} className="delete-button">
  🗑️ Eliminar
</button>
```

onClick={() => onDelete(todo.id)}: Al hacer click, ejecuta onDelete pasando el id

Eliminar: Texto con emoji de papelera

#### Flujo de Eventos

Cuando el usuario hace click en el checkbox:

1. Checkbox cambia → onChange se ejecuta
2. Llama a onToggleComplete(todo.id)
3. El componente PADRE (TodoList) recibe el id
4. Busca la tarea con ese id y cambia completed: true/false
5. TodoItem se re-renderiza con el nuevo estado

Cuando el usuario hace click en "Eliminar":

1. Botón click → onClick se ejecuta
2. Llama a onDelete(todo.id)
3. El componente PADRE recibe el id
4. Filtra el array de tareas, removiendo la que tiene ese id
5. TodoItem DESAPARECE de la lista

## FormUsuario.jsx

const resultado = validateForm(formData);
// resultado = { isValid: true, errors: { nombre: "Error", ... } }

const isValid = resultado.isValid;
const validationErrors = resultado.errors;

Esto es lo mismo quye esto

onst { isValid, errors: validationErrors } = validateForm(formData);

validateForm,isValid y errors (lo cambio a validationErrors por que ya existen error en el componente) son metodos que usamos en validations.js

#### Como funciona el error

```
// name = "nombre" (viene del input)
// value = "A" (lo que el usuario escribió)

if (errors["nombre"]) {  // ← true, porque errors.nombre existe
  setErrors({
    ...errors,           // { nombre: "Error", email: "Email inválido" }
    [name]: ""           // { nombre: "" } ← Limpiamos solo este error
  });
}

// Resultado FINAL:
errors = {
  nombre: "",           // ← Error limpiado
  email: "Email inválido"  // ← Este error se mantiene
}
```

```
setErrors({}) - Limpiar TODOS los errores
javascript
// Antes: errors = { nombre: "Error", email: "Error", password: "Error" }
setErrors({});
// Después: errors = {} ← TODOS los errores desaparecen
```

## Snippets mas utiles para React

Abreviatura Genera
rafc React Arrow Function Component with Export
rfce React Function Component with Export
rfc React Function Component

## Pasos

1- En el caso del formulario inccie con el snippet rafc
2- Creo primero lo que es el form con los input, cada uno separado con un div
(Creo que al comienzo es mejor empezar asi para entender que valores usaremos)
3- Ahora el input va a estar formado por type="" value={FormData.nombre}(este va explicado en el paso 4) y onChange={"nombre que pongamos a la funcion"}
4- Aqui usamos los hook de React

```
const [formData, setFormData] = useState(valorInicial);
//     ↑          ↑              ↑         ↑
//     |          |              |         └── Valor inicial (ej: "", 0, [], {})
//     |          |              └── Hook de React que crea estado
//     |          └── FUNCIÓN para ACTUALIZAR el estado
//     └── VARIABLE que contiene el valor ACTUAL del estado
```

De esta forma usaremos formData."algo" para insertar el valor actual del estado
Y usaremos setFormData para ir actualizando el estado

5-onChange={handleInputChange} es un metodo que usaremos para extraer informacion del evento
6-

``` js
const handleInputChange = (event) => {
  const { name, value } = event.target;

  setFormData({
    ...formData,
    [name]:value
  });
  }
```

que recibira lo realizado en la funcion flecha - const{name,value} = event.target;
event.target es el elemento HTML que disparo el evento, en este caso el input donde esta el usuario escribiendo.

// Cuando el usuario escribe, event.target contiene:
```js
event.target = {
  name: "email",
  value: "ana@email.com", 
  type: "email",
  // ... otras propiedades del input
}
```

### Spead Operator (Operador de propagacion)

Por que se escribe asi ? 
```js
// formData actual = { nombre: "Ana", email: "ana@email.com", password: "123" }
...formData 
// Se convierte en: nombre: "Ana", email: "ana@email.com", password: "123"
```

[campoQueCambio]: nuevoValor
```js
 // Si campoQueCambio = "nombre" y nuevoValor = "Juan"
[campoQueCambio]: nuevoValor
// Se convierte en: nombre: "Juan"
```

```js
// Resultado final:
{
  ...formData,                    // nombre: "Ana", email: "ana@email.com", password: "123"
  [campoQueCambio]: nuevoValor    // nombre: "Juan" ← SOBREESCRIBE este campo
}

// Objeto final = { nombre: "Juan", email: "ana@email.com", password: "123" }
```
7-  Pasamos al metodo onSubmit
 Lo desglozare en varias partes
 - 1
```js
 const onSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const { isValid, validationErros: erros } = validateForm(formData);

    if (!isValid) {
      setErrors(validationErros);
      return;
    }
```
Creamos la variable onSubmit que recibe el evento
usamos el preventDefault que es un elemento de HTML que impide que la pagina se recargue cuando usamos el formulario
- Para que sirve setIsSubmitting(true) - controla el estado de "cargado" o "enviado" del formulario
Lo usamos de forma visual cuando esta en True empezara a mostrar "cargando" y cuando se pasa a false vuelve a mostrar "Enviar" todo esto es lo que se ve en el boton
- ¿Qué hace const { isValid, errors: validationErrors }? -  extrae dos valores que devuelve invalidForm(formData) (este es un metodo que usamos en validation.js)

// validateForm SIEMPRE devuelve un objeto con esta forma:
{
  isValid: true,      // o false
  errors: {}          // objeto con mensajes de error
}

```js
// Al hacer destructuring:
const { isValid, errors: validationErrors } = validateForm(formData);
// ↑ Esto crea dos variables:
// - isValid = true/false
// - validationErrors = { nombre: "Error", email: "Error" } o {}
```
- Que hace if(!isValid)

```js
if (!isValid) {
  setErrors(validationErrors);   // 1. Mostrar errores en pantalla
  setIsSubmitting(false);        // 2. Quitar estado "cargando"
  return;                        // 3. Detener la ejecución
}
```


#### Flujo completo

1. 📝 USUARIO ESCRIBE <br>
   ---------↓---------
2. 🔄 onChange={handleInputChange} se activa <br>
   ---------↓--------- 
3. 💾 handleInputChange guarda en formData <br>
   ---------↓---------
4. 🖱️ USUARIO HACE CLIC EN "ENVIAR" <br>
   ---------↓---------
5. ✅ onSubmit valida todo con validateForm() <br>
   ---------↓---------
6. ❌ Si hay errores → los muestra y SE DETIENE <br>
   ---------↓---------
7. ✅ Si todo está correcto → procesa y LIMPIA formData

---
---

### aria-label y aria-describedby

id="basic-addon1"
Identificador único del elemento

Se usa para conectar elementos relacionados

aria-label="Usuario"
Etiqueta para lectores de pantalla

Cuando no hay texto visible que describa el input

El lector dirá: "Usuario, edit text"

aria-describedby="basic-addon1"
Conecta el input con su descripción

Le dice al lector: "Este input está descrito por el elemento con id basic-addon1"

El lector leerá: "Usuario, edit text, @"

### FormLogin y Login

Usuario hace click en "Ingresar"

HTML5 detecta form="login-form" en el botón

Busca el form con id="login-form"

Ejecuta el onSubmit de ese form

Se dispara manejarEnvio en FormLogin


### API - Flujo basico

El usuario escribe su email y contraseña.

Al enviar el formulario (onSubmit), React hace una petición POST a la API:

fetch("https://api.ejemplo.com/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, password }),
});


La API responde algo como:

{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": { "name": "Matías", "email": "matias@example.com" }
}


La app guarda ese token (por ejemplo en localStorage o sessionStorage) y redirige al usuario a otra página.
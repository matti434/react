1. ¿Qué es htmlFor?
   htmlFor es el equivalente en React del atributo for en HTML normal:

```js
// En HTML puro
<label for="bill">Monto:</label>

// En React (JSX)
<label htmlFor="bill">Monto:</label>
```

¿Por qué? Porque for es una palabra reservada en JavaScript (se usa en loops for), entonces React usa htmlFor para evitar conflictos.

Función: Conectar el label con el input, para que al hacer click en el label, el input reciba el foco.

2. ¿Por qué onChange se escribe así?
   Tienes razón en tu duda. La sintaxis correcta es:

```js
onChange={(e) => onChange(Number(e.target.value))}
No e.value.target. El orden correcto es e.target.value.
```

Desglose:

e = evento del input

e.target = elemento que disparó el evento (el input)

e.target.value = valor actual del input

3. ¿Cómo se reciben los valores del padre?
   En el componente hijo (BillInput):

```js
export default function BillInput({ value, onChange }) {
  // value = viene del padre (estado 'bill')
  // onChange = viene del padre (función 'setBill')

  return (
    <input
      value={value} // ← Valor actual del padre
      onChange={(e) => onChange(Number(e.target.value))} // ← Actualiza al padre
    />
  );
}
```

En el componente padre (TipCalculator):

```js
export default function TipCalculator() {
  const [bill, setBill] = useState(0); // ← Estado local

  return (
    <BillInput
      value={bill} // ← Se envía el valor al hijo
      onChange={setBill} // ← Se envía la función para actualizar
    />
  );
}
```

Flujo completo de datos:
Padre → Hijo: value={bill} envía el valor actual

Hijo → Padre: onChange={setBill} permite que el hijo actualice el estado del padre

Cuando escribes: El hijo ejecuta setBill(nuevoValor) y actualiza el estado del padre

Re-render: El padre se re-renderiza y envía el nuevo valor al hijo

Ejemplo visual del flujo:

```js
// PADRE - Tiene el estado
const [bill, setBill] = useState(100);

// Envía al hijo:
<BillInput value={bill} onChange={setBill} />;

// HIJO - Recibe y usa
function BillInput({ value, onChange }) {
  // Cuando el usuario escribe "150":
  // 1. e.target.value = "150" (string)
  // 2. Number("150") = 150 (number)
  // 3. onChange(150) = ejecuta setBill(150) en el padre
}
```

### TipPercentage

```js
return (
  <div>
    <label>Porcentaje de propina:</label>
    <div className="percentage-buttons">
      {percentage.map((percent) => {
        <button
          type="button"
          key={percent}
          className={value === percent && !isCustom ? "active" : ""}
          onClick={() => handlePredefinedTip(percent)}
        >
          {percent}%
        </button>;
      })}
    </div>
  </div>
);
```


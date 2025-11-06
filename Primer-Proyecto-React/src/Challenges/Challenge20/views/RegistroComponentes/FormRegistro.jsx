import Form from "react-bootstrap/Form";
import  InputGroup  from "react-bootstrap/InputGroup";
const FormRegistro = ({ value, onChange, onSubmit, loading }) => {
  
  const manejarCambios = (campo, valor) => {
    onChange({
      ...value,
      [campo]: valor,
    });
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <>
      <Form onSubmit={manejarSubmit} id="registro-form">
        <InputGroup className="mb-3">
          <InputGroup.Text>👤</InputGroup.Text>
          <Form.Control
            placeholder="Usuario"
            value={value.usuario || ""}
            onChange={(e) => manejarCambios("usuario", e.target.value)}
            required
            disabled={loading}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>📧</InputGroup.Text>
          <Form.Control
            type="email"
            placeholder="Email"
            value={value.email || ""}
            onChange={(e) => manejarCambios("email", e.target.value)}
            required
            disabled={loading}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>🔒</InputGroup.Text>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={value.contraseña || ""}
            onChange={(e) => manejarCambios("contraseña", e.target.value)}
            required
            disabled={loading}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>✅</InputGroup.Text>
          <Form.Control
            type="password"
            placeholder="Confirmar Contraseña"
            value={value.confirmarContraseña || ""}
            onChange={(e) => manejarCambios("confirmarContraseña", e.target.value)}
            required
            disabled={loading}
          />
        </InputGroup>
      </Form>
    </>
  );
};

export default FormRegistro;
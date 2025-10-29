import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const FormLogin = ({ value, onChange, onSubmit }) => {
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
      <Form onSubmit={manejarSubmit} id="login-form">
        <InputGroup className="mb-3">
          <InputGroup.Text id="complemento1">👤</InputGroup.Text>
          <Form.Control
            placeholder="Usuario"
            aria-label="Usuario"
            aria-describedby="complemento1"
            value={value.usuario || ""}
            onChange={(e) => manejarCambios("usuario", e.target.value)}
            required
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="complemento2">🔒</InputGroup.Text>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            aria-label="Contraseña"
            aria-describedby="complemento2"
            value={value.contraseña || ""}
            onChange={(e) => manejarCambios("contraseña", e.target.value)}
            required
          />
        </InputGroup>

        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Recordarme" />
        </Form.Group>
      </Form>
    </>
  );
};

export default FormLogin;

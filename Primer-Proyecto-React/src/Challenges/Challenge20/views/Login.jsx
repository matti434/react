import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormLogin from "./LoginComponentes/FormLogin";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {validarLogin,guardarSesion,inicializarSistemaBackup,verificarYOfrecerRestauracion} from "../utils/authHelpers";

function Login() {
  const location = useLocation(); //devuelve el objeto de ubicacion actual
  const navigate = useNavigate();
  const showModal =
    new URLSearchParams(location.search).get("modal") === "login";

  const [login, setLogin] = useState({
    usuario: "",
    contraseña: "",
  });
  const [loading, setLoading] = useState(false); //para mostrar la carga
  const [error, setError] = useState(""); // Para manejar errores

  useEffect(() => {
    inicializarSistemaBackup();
    verificarYOfrecerRestauracion();
  }, []);

  const cerrarModal = () => {
    navigate(location.pathname, { replace: true }); // location.pathname = "/" si uso navigate(-1) va hacia atras en historial pero puede scarme de la aplicacion
  };

  const manejarSubmit = async () => {
    if (!login.usuario.trim() || !login.contraseña.trim()) {
      alert("Por favor completa todos los campos");
      return;
    }

    if (login.usuario.length < 3) {
      alert("El usuario debe tener mas de 3 caracteres");
      return;
    }

    if (login.contraseña.length < 4) {
      alert("La contraseña debe tener mas de 4 caracteres");
      return;
    }
    /* agregar mas condiciones*/

    setLoading(true);
    setError("");

    try {
      const usuarioValido = validarLogin(login.usuario, login.contraseña);

      if (usuarioValido) {
        guardarSesion(usuarioValido);

        setLogin({ usuario: "", contraseña: "" });

        cerrarModal();

        alert("Bienvenido");
      } else {
        setError("Usuario o contraseña incorrectos");
        alert("Credenciales incorrectas");
      }
    } catch (error) {
      setError("Error al iniciar sesion");
      console.error("Error en el login", error);
    } finally {
      setLoading(false);
    }
  };

  if (!showModal) return null;

  return (
    <div
      className="modal show"
      style={{
        display: "block",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 1050,
      }}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton onClick={cerrarModal}>
            <Modal.Title>Iniciar Sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body>
         
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

          
            <FormLogin
              value={login}
              onChange={setLogin}
              onSubmit={manejarSubmit}
              loading={loading}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={cerrarModal}>
              Cerrar
            </Button>
            <Button
              variant="primary"
              type="submit"
              form="login-form"
              disabled={loading}
            >
              {loading ? "Cargando..." : "Ingresar"}
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  );
}

export default Login;

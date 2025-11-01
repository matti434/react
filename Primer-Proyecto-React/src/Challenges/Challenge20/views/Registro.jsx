import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormRegistro from './RegistroComponentes/FormRegistro';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { guardarUsuarioRegistro, inicializarSistemaBackup, verificarYOfrecerRestauracion } from '../utils/authHelpers';

function Registro() {
  const location = useLocation();
  const navigate = useNavigate();
  const showModal = new URLSearchParams(location.search).get('modal') === 'registro';

  const [registro, setRegistro] = useState({
    usuario: "",
    email: "",
    contraseña: "",
    confirmarContraseña: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    inicializarSistemaBackup();
    verificarYOfrecerRestauracion();
  }, []);

  const cerrarModal = () => {
    navigate(location.pathname, { replace: true });
  }

  const manejarSubmit = async () => {
    // Validaciones del formulario
    if (!registro.usuario.trim() || !registro.email.trim() || 
        !registro.contraseña.trim() || !registro.confirmarContraseña.trim()) {
      alert('Por favor completa todos los campos');
      return;
    }

    // Validar que las contraseñas coincidan
    if (registro.contraseña !== registro.confirmarContraseña) {
      alert('Las contraseñas no coinciden');
      return;
    }

    if (registro.usuario.length < 3) {
      alert('El usuario debe tener al menos 3 caracteres');
      return;
    }

    if (registro.contraseña.length < 4) {
      alert('La contraseña debe tener al menos 4 caracteres');
      return;
    }

    setLoading(true);
    setError("");

    try {
      const usuarioRegistrado = await guardarUsuarioRegistro(
        registro.usuario, 
        registro.contraseña, 
        registro.email
      );

      setRegistro({ usuario: "", email: "", contraseña: "", confirmarContraseña: "" });
      cerrarModal();
      alert(`¡Usuario ${usuarioRegistrado.usuario} registrado exitosamente!`);

    } catch (error) {
      setError(error.message);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!showModal) return null;

  return (
    <div className="modal show" style={{ display: 'block', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}>
      <div className="modal-dialog modal-dialog-centered" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <Modal.Dialog>
          <Modal.Header closeButton onClick={cerrarModal}>
            <Modal.Title>Registrarse</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {error && <div className="alert alert-danger">{error}</div>}
            <FormRegistro value={registro} onChange={setRegistro} onSubmit={manejarSubmit} loading={loading} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cerrarModal}>Cerrar</Button>
            <Button variant="primary" type='submit' form='registro-form' disabled={loading}>
              {loading ? 'Registrando...' : 'Registrarse'}
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  );
}

export default Registro;
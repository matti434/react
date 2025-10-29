import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormLogin from './LoginComponentes/FormLogin';
import { useLocation, useNavigate } from 'react-router-dom'; // Corregí la importación

function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const showModal = new URLSearchParams(location.search).get('modal') === 'login';

  const cerrarModal = () => {
    navigate(location.pathname, { replace: true });
  }

  if (!showModal) return null;

  return (
    <div
      className="modal show"
      style={{ 
        display: 'block', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 1050 
      }}
    >
      <div 
        className="modal-dialog modal-dialog-centered"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton onClick={cerrarModal}>
            <Modal.Title>Iniciar Sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormLogin />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cerrarModal}>
              Cerrar
            </Button>
            <Button variant="primary">Ingresar</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  );
}

export default Login;
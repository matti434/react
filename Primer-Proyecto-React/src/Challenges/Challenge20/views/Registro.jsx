import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormRegistro from "./RegistroComponentes/FormRegistro";
import { useLocation, useNavigate } from "react-router-dom";

const Registro = () => {
  const location = useLocation(); //devuelve el objeto de ubicacion actual
  const navigate = useNavigate();
  const showModal = new URLSearchParams(location.search).get('modal')==='registro';
  

  const [registro, setRegistro] = useState({
    usuario:"",
    email:"",
    contrasena:"",
    repetirContrasena:""
  });

  const manejarSubmit = async () =>{
    if(!registro.usuario.trim() && !registro.contrasena.trim()){
      alert
    }
  };

  const cerrarModal = () => {
    navigate(location.pathname, { replace: true });
  }

  if(!showModal) return null;

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
            <Modal.Title>Crear Cuenta</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormRegistro  value={registro}  />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cerrarModal}>
              Cerrar
            </Button>
            <Button variant="primary">Registrarse</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  );
}

export default Registro;

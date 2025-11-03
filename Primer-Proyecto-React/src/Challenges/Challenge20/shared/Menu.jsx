import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Buscador from "./MenuComponentes/Buscador";

const Menu = () => {
  const navigate = useNavigate();
  
  const abrirLogin = () => {
    navigate("/?modal=login");
  }
  const abrirRegistro = () => {
    navigate("/?modal=registro"); //Misma clave,diferente valor
  }


  return (
    <Navbar expand="lg">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={Link} to="/" style={{ fontSize: "1.3rem" }}>MercadoLibre</Navbar.Brand>
        <div className="d-none d-lg-block position-absolute start-50 traslate-middle-x">
            <Buscador />
          </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="mt-3 mt-lg-0">
          <div className="d-lg-none mb-3">
            <Buscador />
          </div>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={{ fontSize: "1rem" }}>Home</Nav.Link>
            <NavDropdown style={{ fontSize: "1rem" }} title="Cuenta" id="basic-nav-dropdown">
              <NavDropdown.Item
               onClick={abrirLogin}
               style={{cursor:"pointer"}}
              >
                Login
              </NavDropdown.Item>
              <NavDropdown.Item
              onClick={abrirRegistro}
              style={{cursor:"pointer"}}
              >
                Register
                </NavDropdown.Item>
              <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#cart">
                <FaShoppingCart size={20} className="me-2" /> 
                Carrito
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
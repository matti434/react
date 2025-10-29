import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();
  
  const abrirLogin = () => {
    navigate("/?modal=login");
  }
  const abrirRegistro = () => {
    navigate("/?modalRegistro=registro");
  }


  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand as={Link} to="/">MercadoLibre</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Cuenta" id="basic-nav-dropdown"> 
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
import {Container,Row,Col,Stack,Image,Nav,NavLink,}from "react-bootstrap";
import { Link, useNavigate } from "react-router";

const Footer = () => {

  const navigate= useNavigate();

  const abrirLogin = () => {
   navigate("/?modal=login")  
  }

   const abrirRegistro = () => {
   navigate("/?modal=registro")  
  }

  return (
    <footer>
      <Container fluid>
        <Row className="text-white p-4 aling-item-center">
          <Col xs={12} lg={4} className="mb-4 mb-lg-0">
            <Stack
              gap={2}
              className="align-items-center align-items-lg-start text-center text-lg-start text-black"
            >
              <Image
                src="https://cdn.worldvectorlogo.com/logos/mercadolibre.svg"
                alt="Mercado Libre"
                rounded
                width={120}
                height={120}
                className="mx-3"
              ></Image>
              <h2 className="h4 mb-0 mx-2">Mercado Libre</h2>
              <p className="mb-0 mx-2">lo mejor está llegando</p>
            </Stack>
          </Col>
          <Col xs={12} lg={4} className="mb-4 mb-lg-0 mt-3">
            <div className="text-center text-black">
              <h5 className="mb-3">Links útiles</h5>
              <Nav className="flex-column gap-3 justify-content-center ">
                <Nav.Link as={Link} to="/" className="text-black px-0 py-0">
                  Home
                </Nav.Link>
                <Nav.Link href="#" className="text-black px-0 py-0">
                  Contact
                </Nav.Link>
                <span
                  className="text-black px-0 py-0 Nav-Link"
                  onClick={abrirLogin}
                  style={{ cursor: "pointer" }}
                >
                  Login
                </span>
                <span 
                  className="text-black px-0 py-0 Nav-Link"
                  onClick={abrirRegistro}
                  style={{ cursor: "pointer" }}
                >
                  Register
                </span>
              </Nav>
            </div>
          </Col>
          <Col xs={12} lg={4} className="text-center text-lg-end mt-3 text-black">
            <div>
              <h5 className="mb-3">Contacta con nosotros</h5>
              <p className="mb-1">Email@gmail.com</p>
              <p className="mb-0">Teléfono: 31224455152</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

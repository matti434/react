import {Container,Row,Col,Stack,Image,Nav,NavLink} from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row className="bg-primary text-white p-4 aling-item-center">
          <Col xs={12} lg={4} className="mb-4 mb-lg-0">
            <Stack gap={2} className="align-items-center align-items-lg-start text-center text-lg-start">
              <Image
                src="https://cdn.worldvectorlogo.com/logos/mercadolibre.svg"
                alt="Mercado Libre"
                rounded
                width={120}
                height={120}
              ></Image>
              <h2 className="h4 mb-0">Mercado Libre</h2>
              <p className="mb-0">lo mejor está llegando</p>
            </Stack>
          </Col>
          <Col xs={12} lg={4} className="mb-4 mb-lg-0 mt-3">
            <div className="text-center">
              <h5 className="mb-3">Links útiles</h5>
              <Nav className="flex-column gap-2 justify-content-center">
                <Nav.Link href="#" className="text-white px-0">
                  Home
                </Nav.Link>
                <Nav.Link href="#" className="text-white px-0">
                  Contact
                </Nav.Link>
                <Nav.Link href="#" className="text-white px-0">
                  Login
                </Nav.Link>
                <Nav.Link href="#" className="text-white px-0">
                  Register
                </Nav.Link>
              </Nav>
            </div>
          </Col>
          <Col xs={12} lg={4} className="text-center text-lg-end mt-3">
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

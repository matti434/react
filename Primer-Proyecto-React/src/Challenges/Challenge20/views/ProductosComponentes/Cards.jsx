import { Container,Row,Col,Card } from "react-bootstrap";
import { Link } from "react-router";

const Cards = () => {
  return (
     <Container fluid className="mt-5 mb-5 d-flex justify-content-center" >
        <Row className="g-5">
          <Col xs={12} md={6} lg={4}>
            <Card as={Link} to="/producto/1" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="text-center">Producto 1</Card.Title>
                <Card.Text>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWopj_HySOIIuDRemrsVhIbsDxsqJ6dV3QVQ&s"
                    alt="cosadeMosquitos"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <p className="text-center">Mata mosquitos</p>
                </Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="text-center">Producto 2</Card.Title>
                <Card.Text>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeFdoNH-2SdphA1V9QNZFoCBpRfSVRd_4B7MBGLg733q8z7RCOWZduRbifF2oYZ8UrN1g&usqp=CAU"
                    alt="usb"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <p className="text-center">Mata mosquitos</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="text-center">Producto 3</Card.Title>
                <Card.Text>
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/I/71WrD-xzSEL._AC_UL600_SR600,600_.jpg"
                    alt="stanley"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <p className="text-center">Mata mosquitos</p>
                </Card.Text>
                 
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  )
}

export default Cards;
import { Container,Row,Col,Card } from "react-bootstrap";
import { Link } from "react-router";

const Cards = () => {
  return (
     <Container fluid className="mt-5 mb-5 d-flex justify-content-center" >
        <Row className="g-5">
          <Col xs={12} md={6} lg={4}>
            <Card as={Link} to="/producto/1" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="text-center">#</Card.Title>
                <Card.Text>
                  <img
                    src=""
                    alt="cosadeMosquitos"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </Card.Text>
                  <p className="text-center">#</p> 
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="text-center">#</Card.Title>
                <Card.Text>
                  <img
                    src=""
                    alt="usb"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </Card.Text>
                  <p className="text-center">#</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="text-center">#</Card.Title>
                <Card.Text>
                  <img
                    src=""
                    alt="stanley"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </Card.Text>
                  <p className="text-center">#</p>
                 
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  )
}

export default Cards;
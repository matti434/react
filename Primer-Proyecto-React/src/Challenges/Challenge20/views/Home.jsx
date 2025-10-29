import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import CarouselHome from "./HomeComponentes/CarouselHome";
import Cards from "./ProductosComponentes/Cards";
import Productos from "./Productos"

const Home = () => {
  return (
    <>
      <Container className="mt-4">
        <div className="text-center mb-5">
          <h1>Bienvenido a MercadoLibre</h1>
          <p className="lead">
            Encuentra los mejores productos al mejor precio
          </p>
        </div>
        <div>
          <CarouselHome />
          <Productos />
        </div>
      </Container>
    </>
  );
};

export default Home;

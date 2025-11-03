import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import CarouselHome from "./HomeComponentes/CarouselHome";
import Cards from "./ProductosComponentes/Cards/Cards";
import Productos from "./Productos"


const Home = () => {
  return (
    <>
      <Container className="mt-4">
        <div className="text-center text-black mb-5">
          <h1 className="display-4">Bienvenido a MercadoLibre</h1>
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

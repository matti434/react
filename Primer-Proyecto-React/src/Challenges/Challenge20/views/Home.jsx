import { Container } from "react-bootstrap";
import CarouselHome from "./HomeComponentes/CarouselHome";


const Home = () => {
  return (
    <Container className="mt-4">
    <div className="text-center mb-5">
       <h1>Bienvenido a MercadoLibre</h1>
       <p className="lead">Encuentra los mejores productos al mejor precio</p>
    </div>
    <div>
      <CarouselHome />
    </div>
    </Container>
  )
}

export default Home;

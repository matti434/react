import Carousel from 'react-bootstrap/Carousel';
import { Container } from "react-bootstrap";

function CarouselHome() {
  return (
    <Container>
    <Carousel fade>
      <Carousel.Item>
          <img src="https://http2.mlstatic.com/storage/developers-site-cms-admin/CDV_MS/282219444009-210519-mla-mlc-mco-mlu-mercado-libre-el-mejor-lugar-para-publicitar-tus-productos-header.jpg" 
          alt="telefono" 
          className='d-block w-100'
          style={{height: '400px',objectFit:'cover'}}
          />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZJbo2PuJyGf8IRIvR_n_TQs6V3u7VD6B9w&s" alt="algo" className='d-block w-100'
          style={{height: '400px',objectFit:'cover'}}/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <img src="https://http2.mlstatic.com/D_NQ_795694-MLA95873632568_102025-F.jpg" alt="algo2"   className='d-block w-100'
          style={{height: '400px',objectFit:'cover'}} />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default CarouselHome;
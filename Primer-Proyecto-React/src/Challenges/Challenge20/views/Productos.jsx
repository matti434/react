import React from 'react'
import { Container } from 'react-bootstrap';
import Cards from './HomeComponentes/Cards';

const Productos = () => {
  return (
    <>
    <Container className='mt-5'>
    <div className='text-center display-3'>Productos</div>
    <Cards/>
    </Container>
    </>
  )
}

export default Productos;

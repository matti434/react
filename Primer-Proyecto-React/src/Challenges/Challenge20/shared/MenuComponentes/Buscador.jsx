import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";

const Buscador = () => {
  const [busqueda, setBusqueda] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault;
    console.log("Buscando:",busqueda);
  };

  return (
    <Form onSubmit={manejarSubmit}>
      <InputGroup>
        <FormControl
          type="search"
          placeholder="Busca tu producto"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        ></FormControl>
        <Button variant="primary" type="submit" className="Boton-Buscador" >
           <FaSearch />
        </Button>
      </InputGroup>
    </Form>
  );
};

export default Buscador;

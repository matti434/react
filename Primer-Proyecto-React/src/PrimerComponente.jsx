import React from "react";
import './PrimerComponente.css'
import PropTypes from 'prop-types';

export const PrimerComponente = ({titulo,subtitulo='seccion de Props'}) => {
  return (
    <>
      <h1>{titulo}</h1>
      <h2>{subtitulo}</h2>
    </>
  );
};

PrimerComponente.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.number.isRequired,
}
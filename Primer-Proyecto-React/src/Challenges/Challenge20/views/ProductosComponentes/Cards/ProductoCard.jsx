// Components/ProductsComponents/Cards/ProductoCard.jsx
import { Link } from 'react-router-dom';

const ProductoCard = ({ producto }) => {
  return (
    <div className="card h-100">
      <Link 
        to={`/producto/${producto.id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <img 
          src={producto.imagen || '/placeholder.jpg'} 
          alt={producto.nombre}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text text-muted text-truncate-3-lines">
            {producto.descripcionCompleta}
          </p>
          <p className="card-price fw-bold mt-auto">${producto.precio}</p>
        </div>
      </Link>
      
      {/* El botón fuera del Link para mejor UX */}
      <div className="card-footer">
        <Link to={`/producto/${producto.id}`} className="btn btn-primary w-100">
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};
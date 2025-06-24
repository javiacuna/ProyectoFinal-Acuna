import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="card shadow-sm" style={{ width: "18rem", margin: "1rem" }}>
      <img
        src={product.img}
        className="card-img-top p-3"
        alt={product.name}
        style={{ height: "200px", objectFit: "contain", backgroundColor: "#f8f9fa" }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title text-truncate">{product.name}</h5>
          <p className="card-text fw-bold text-success">${product.unit_price}</p>
        </div>
        <Link to={`/item/${product.id}`} className="btn btn-outline-primary mt-3">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;

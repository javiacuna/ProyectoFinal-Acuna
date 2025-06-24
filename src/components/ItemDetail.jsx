import { useState } from "react";
import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useCart();

  const onAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id: product.id,
      title: product.name,
      price: product.unit_price,
      image: product.img,
    };

    addItem(item, quantity);
  };

  return (
    <div className="card m-3 shadow" style={{ maxWidth: "600px", margin: "auto" }}>
      <img
        src={product.img}
        className="card-img-top"
        alt={product.name}
        style={{ objectFit: "contain", maxHeight: "300px", backgroundColor: "#f8f9fa" }}
      />
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p className="card-text">{product.description}</p>
        <p className="card-text fw-bold text-success">${product.unit_price}</p>
        <p className="card-text text-muted">Stock disponible: {product.stock}</p>

        {quantityAdded > 0 ? (
          <div className="alert alert-success mt-3">
            ✅ Agregaste <strong>{quantityAdded}</strong> producto(s) al carrito.
          </div>
        ) : (
          <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;

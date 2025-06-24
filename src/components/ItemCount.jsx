import { useState } from "react";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    onAdd(count);
    setAdded(true);
  };

  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const isOutOfStock = stock === 0;

  return (
    <div className="my-4 text-center">
      {!added ? (
        <>
          <div className="btn-group mb-3">
            <button
              className="btn btn-outline-secondary"
              onClick={handleDecrease}
              disabled={isOutOfStock}
            >
              -
            </button>
            <span className="btn btn-light">{count}</span>
            <button
              className="btn btn-outline-secondary"
              onClick={handleIncrease}
              disabled={isOutOfStock}
            >
              +
            </button>
          </div>
          <div>
            <button
              className="btn btn-success"
              onClick={handleAddToCart}
              disabled={isOutOfStock}
            >
              {isOutOfStock ? "Sin stock" : "Agregar al carrito"}
            </button>
          </div>
        </>
      ) : (
        <div className="alert alert-success mt-3" role="alert">
          ✔ Producto agregado al carrito
        </div>
      )}
    </div>
  );
};

export default ItemCount;

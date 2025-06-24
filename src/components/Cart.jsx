import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeItem, clearCart, totalQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  if (totalQuantity === 0) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center text-center vh-100 px-3">
        <h2 className="display-5 fw-bold text-secondary mb-4">Tu carrito está vacío 🛒</h2>
        <button onClick={() => navigate("/")} className="btn btn-primary">
          Volver al catálogo
        </button>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="text-center mb-4 display-6 fw-bold text-dark">🛍 Tu Carrito</h2>
          <ul className="list-group mb-4">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between">
                <div className="d-flex align-items-start gap-3 w-100 w-md-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-thumbnail"
                    style={{ width: "90px", height: "90px", objectFit: "contain" }}
                  />
                  <div>
                    <h5 className="mb-1">{item.title}</h5>
                    <p className="mb-0 small text-muted">Cantidad: {item.quantity}</p>
                    <p className="mb-0 small text-muted">Precio: ${item.price}</p>
                    <p className="mb-0 fw-medium">Subtotal: ${item.price * item.quantity}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="btn btn-link text-danger mt-3 mt-md-0"
                >
                  ❌ Eliminar
                </button>
              </li>
            ))}
          </ul>

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <h4 className="fw-bold text-dark">Total: ${totalPrice}</h4>
            <div className="mt-3 mt-md-0 d-flex gap-2">
              <button onClick={clearCart} className="btn btn-danger">
                Vaciar carrito
              </button>
              <button onClick={() => navigate("/checkout")} className="btn btn-success">
                Finalizar compra
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

import { useState } from "react";
import { useCart } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";

function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email !== formData.confirmEmail) {
      alert("❌ Los correos electrónicos no coinciden.");
      return;
    }

    const order = {
      buyer: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      },
      items: cart,
      total: totalPrice,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then((docRef) => {
        setOrderId(docRef.id);
        clearCart();
      })
      .catch((error) => console.error("Error al generar orden:", error));
  };

  if (orderId) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] text-center px-4">
        <h2 className="text-2xl font-bold text-green-600">
          ¡Gracias por tu compra! 🎉
        </h2>
        <p className="mt-2 text-gray-700">Tu ID de orden es:</p>
        <p className="mt-1 font-mono bg-gray-100 px-4 py-2 rounded text-sm">
          {orderId}
        </p>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light px-3">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow-sm"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="mb-4 text-center">🛒 Finalizá tu compra</h2>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre completo
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="confirmEmail" className="form-label">
            Confirmar correo electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="confirmEmail"
            name="confirmEmail"
            required
            value={formData.confirmEmail}
            onChange={handleChange}
          />
        </div>

        {formData.email &&
          formData.confirmEmail &&
          formData.email !== formData.confirmEmail && (
            <div className="text-danger small mb-3">
              ⚠️ Los correos no coinciden
            </div>
          )}

        <div className="mb-4">
          <label htmlFor="phone" className="form-label">
            Teléfono
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          💳 Confirmar compra
        </button>
      </form>
    </div>
  );
}

export default Checkout;

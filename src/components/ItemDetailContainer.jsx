import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then((res) => {
        if (res.exists()) {
          setProduct({ id: res.id, ...res.data() });
        } else {
          console.error("⚠ Producto no encontrado");
        }
      })
      .catch((error) => console.error("❌ Error al obtener producto:", error))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) {
    return (
      <div className="text-center p-10 text-xl text-gray-700">
        🔄 Cargando producto...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center p-10 text-red-600 text-xl">
        ❌ Producto no encontrado
      </div>
    );
  }

 return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
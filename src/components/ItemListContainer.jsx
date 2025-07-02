import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { db } from "../service/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { brandId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsRef = collection(db, "products");

    const q = brandId
      ? query(productsRef, where("brand", "==", brandId))
      : productsRef;

    getDocs(q)
      .then((res) => {
        const docs = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(docs);
      })
      .catch((error) => console.error("Error al obtener productos:", error))
      .finally(() => setLoading(false));
  }, [brandId]);

  if (loading) {
    return (
      <div className="text-center p-10 text-xl text-gray-700">
        ⏳ Cargando productos...
      </div>
    );
  }

  return (
    <section className="p-6 max-w-5xl mx-auto">
      <ItemList items={products} />
    </section>
  );
}

export default ItemListContainer;
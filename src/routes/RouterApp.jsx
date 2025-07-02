import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/Navbar";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Cart from "../components/Cart";
import Error from "../components/Error";
import Checkout from "../components/Checkout";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Todos nuestros productos" />} />
        <Route path="/brand/:brandId" element={<ItemListContainer greeting="Filtro aplicado" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
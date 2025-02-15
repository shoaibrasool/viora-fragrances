import { BrowserRouter as Router, Routes, Route } from "react-router";
import Layout from "../pages/Layout";
import Home from "../pages/Home/Home";
import Catalog from "../pages/Catalog/Catalog";
import Contact from "../pages/Contact/Contact";
import Aboutus from "../pages/Aboutus/Aboutus";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Checkout from "../pages/Checkout/Checkout";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="product/:productId" element={<ProductDetails />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;

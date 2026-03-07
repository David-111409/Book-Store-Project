import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import About from "./pages/about/About";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer/Footer";
import Authors from "./pages/authors/authors";
import Cart from "./pages/cart/Cart";
import Book from "./pages/book-details/book";

import { CartProvider } from "./context/CartContext";
import NoResults from "./pages/no-result/NoResult";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <CartProvider>
      <ToastContainer position="top-center" autoClose={1800} hideProgressBar={true} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/book/:id" element={<Book />} />
        <Route path="/no-results" element={<NoResults />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;

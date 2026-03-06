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
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ToastContainer position="top-center" autoClose={1800} hideProgressBar={true} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/authors" element = {<Authors />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "./components/header/Header";

import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import Home from "./pages/home/Home";
function App() {
  return (
    <>
      <ToastContainer position="top-center" autoClose={1800} hideProgressBar={true} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

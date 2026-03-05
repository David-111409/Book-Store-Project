import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";
import Services from "./components/services/Services";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
function App() {
  return (
    <>
      <Header />
      {/* <Slider />
      <Services /> */}
      <Routes>
        <Route path="/about" element=<About /> />
      </Routes>
    </>
  );
}

export default App;

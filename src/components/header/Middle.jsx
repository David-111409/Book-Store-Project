import { Link } from "react-router-dom";
import "./header.css";
import { useContext } from "react";
import { CartContext } from "../../context/Contexts";

const Middle = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="header-middle">
      <Link to="/" className="header-middle-logo">
        <b>Book</b>
        <i className="bi bi-book"></i>
        <b>Store</b>
      </Link>
      <div className="header-middle-search-box">
        <input type="search" placeholder="Search in book store..." />
        <i className="bi bi-search"></i>
      </div>
      <Link to="/cart" className="header-middle-cart-wrapper">
        {cartItems.length > 0 && <b className="cart-notification">{cartItems.length}</b>}
        <i className="bi bi-cart2"></i>
      </Link>
    </div>
  );
};

export default Middle;

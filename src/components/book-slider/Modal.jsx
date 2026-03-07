import Rating from "./Rating";
import { Link } from "react-router-dom";
import "./book-slider.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/Contexts";
import { toast } from "react-toastify";
const Modal = ({ bookData, handleClose }) => {
  const { title, image, author, price, rating, reviews, inStock, id } = bookData;
  const [qt, setQt] = useState(1);
  const { addToCart } = useContext(CartContext);
  const handleAddingBook = (item) => {
    addToCart(item, true);
    return toast.success("Book added to cart successfully 🛒", {
      position: "top-right",
    });
  };
  return (
    <div className="modal-container" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <i onClick={handleClose} className="bi bi-x-circle-fill modal-icon"></i>
        <div className="modal-content-img">
          <Link to={`/book/${bookData.id}`}>
            <img src={`/books/${image}`} alt={title} />
          </Link>
        </div>
        <div className="modal-content-info">
          <h5 className="modal-content-info-title">{title}</h5>
          <div className="modal-content-info-stock">
            <b>Status:</b> {inStock ? "in stock" : "not in stock"}
          </div>
          <Rating rating={rating} reviews={reviews} />
          <div className="modal-content-info-author">
            <b>Author: </b>
            {author}
          </div>
          <div className="modal-content-info-price">
            <b>Price: </b>${price}
          </div>
          <div className="modal-add-to-cart">
            <input
              className="modal-add-to-cart-input"
              type="number"
              min="1"
              max="100"
              value={qt}
              onChange={(e) => setQt(e.target.value)}
            />
            <button
              className="modal-add-to-cart-btn"
              onClick={() => handleAddingBook({ ...bookData, quantity: +qt })}
            >
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
          <Link to={`/book/${id}`} className="modal-content-info-link">
            See More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;

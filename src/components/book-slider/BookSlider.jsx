import { useState } from "react";
import books from "../../data/books";
import "./book-slider.css";
import Rating from "./Rating";
import { useContext } from "react";
import { CartContext } from "../../context/Contexts";
const BookSlider = ({ title }) => {
  const { cartItems, addToCart } = useContext(CartContext);
  const [slideIndex, setSlideIndex] = useState(0);
  console.log(cartItems);
  // Handle Click
  const handleMove = (direction) => {
    direction === "right" ? setSlideIndex(slideIndex + 1) : setSlideIndex(slideIndex - 1);
  };
  // Handle Modal

  return (
    <>
      <div className="title-div">
        <h2 className="title">{title}</h2>
      </div>
      <div className="book-slider-container">
        {slideIndex >= 0 && (
          <i
            className="bi bi-chevron-left book-slider-arrow-left"
            onClick={() => handleMove("left")}
          ></i>
        )}
        <div
          style={{ transform: `translateX(${slideIndex * -340}px)` }}
          className="book-slider-wrapper"
        >
          {books.map((item) => (
            <div key={item.id} className="book-slide-item">
              <img src={`/books/${item.image}`} alt={item.title} className="book-slide-item-img" />
              <h3 className="book-slide-item-title">{item.title}</h3>
              <Rating rating={item.rating} reviews={item.reviews} />
              <div className="book-slider-item-price">${item.price}</div>
              <div className="book-slider-icons-wrapper">
                <i className="bi bi-eye-fill"></i>
                <button onClick={() => addToCart({...item, quantity: 1})}>
                  <i className="bi bi-cart-plus"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        {slideIndex <= books.length - 1 && (
          <i
            className="bi bi-chevron-right book-slider-arrow-right"
            onClick={() => handleMove("right")}
          ></i>
        )}
      </div>
    </>
  );
};

export default BookSlider;

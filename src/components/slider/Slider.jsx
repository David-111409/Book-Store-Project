import "./slider.css";
import FirstBook from "../../assets/images/book1.png";
import SecondBook from "../../assets/images/book2.png";
import ThirdBook from "../../assets/images/book3.png";
import { useState } from "react";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // Handle Click

  return (
    <div className="slider-container">
      {slideIndex >= 1 ? (
        <i
          className="bi bi-chevron-double-left arrow-left"
          onClick={() => setSlideIndex(slideIndex - 1)}
        ></i>
      ) : (
        ""
      )}

      <div style={{ transform: `translateX(${slideIndex * -100}vw)` }} className="slider-wrapper">
        <div className="slide first-slide">
          <div className="slide-image-wrapper">
            <img src={FirstBook} alt="first book image" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">Book Store</h1>
            <p className="slide-info-desc">It's not just reading. it's living the adventure</p>
          </div>
        </div>
        <div className="slide second-slide">
          <div className="slide-image-wrapper">
            <img src={SecondBook} alt="second book image" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">The Books For Everyone</h1>
            <p className="slide-info-desc">You can read at the bookstore or at home</p>
          </div>
        </div>
        <div className="slide third-slide">
          <div className="slide-image-wrapper">
            <img src={ThirdBook} alt="third book image" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">Check Out The New Titles</h1>
            <p className="slide-info-desc">We send you the book you want at home</p>
          </div>
        </div>
      </div>
      {slideIndex <= 1 ? (
        <i
          className="bi bi-chevron-double-right arrow-right"
          onClick={() => setSlideIndex(slideIndex + 1)}
        ></i>
      ) : (
        ""
      )}
    </div>
  );
};

export default Slider;

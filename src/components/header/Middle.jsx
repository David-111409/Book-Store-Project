import { Link } from "react-router-dom";
import "./header.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/Contexts";
import books from "../../data/books";
import { useNavigate } from "react-router-dom";

const Middle = () => {
  const { cartItems } = useContext(CartContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const book = books.find((book) => book.title.toLowerCase().includes(search.toLowerCase()));
    if (book && search.trim()) navigate(`/book/${book.id}`);
    if (search.trim() === "") navigate("/");
    if (!book) navigate("/no-results");
  };
  return (
    <div className="header-middle">
      <Link to="/" className="header-middle-logo">
        <b>Book</b>
        <i className="bi bi-book"></i>
        <b>Store</b>
      </Link>
      <form className="search-wrapper" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search in book store..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>
          <i className="bi bi-search"></i>
        </button>
      </form>
      <Link to="/cart" className="header-middle-cart-wrapper">
        {cartItems.length > 0 && <b className="cart-notification">{cartItems.length}</b>}
        <i className="bi bi-cart2"></i>
      </Link>
    </div>
  );
};

export default Middle;

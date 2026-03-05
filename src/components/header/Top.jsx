import "./header.css";
import { Link } from "react-router-dom";

const Top = ({ handleOpen, open }) => {
  return (
    <div className="header-top">
      <div className="header-top-menu" onClick={handleOpen}>
        {open ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
      </div>
      <div className="header-top-phone">
        <i className="bi bi-telephone-fill"></i> 123-456-789
      </div>
      <div className="header-top-text">Welcome To Online Book Store</div>
      <Link to="/login" className="header-top-link">
        <i className="bi bi-person-fill"></i> Login
      </Link>
    </div>
  );
};

export default Top;

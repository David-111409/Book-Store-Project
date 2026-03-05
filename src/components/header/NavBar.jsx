import { Link } from "react-router-dom";

const NavBar = ({open, handleOpen}) => {
  return (
    <nav className= {open && "open"} onClick={handleOpen}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/authors">Authors</Link>
        </li>

        <li>
          <Link to="/about">About Us</Link>
        </li>

        <li>
          <Link to="/contact">Contact Us</Link>
        </li>

        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

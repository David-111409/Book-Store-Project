import { Link } from "react-router-dom";
import "./no-results.css";

const NoResults = () => {
  return (
    <div className="no-results-container">
      <div className="no-results-box">
        <i className="bi bi-search no-results-icon"></i>
        <h1>No results for your search</h1>
        <p className="no-results-message">No results for your search query.</p>
        <Link to="/" className="browse-btn">
          Browse Books
        </Link>
      </div>
    </div>
  );
};

export default NoResults;

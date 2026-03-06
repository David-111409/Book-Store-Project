import { useState } from "react";
import authors from "../../data/authors";
import "./authors.css";
import Pagination from "../../components/pagination/Pagination";
import { Link } from "react-router-dom";

const Authors = () => {
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (i) => setCurrentPage(i);
  const handleSearch = () => {
    setInputValue("");
    setSearch("");
  };
  const totalPages = Math.ceil(authors.length / 4);

  let someAuthors;
  if (search) {
    someAuthors = authors.filter((author) =>
      author.name.toLowerCase().includes(search.toLowerCase()),
    );
  } else {
    someAuthors = authors.slice((currentPage - 1) * 4, currentPage * 4);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(inputValue);
  };

  return (
    <section className="authors">
      <form className="authors-search-wrapper" onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="search"
          placeholder="Search in authors"
        />
        <button type="submit" className="search-icon">
          <i className="bi bi-search"></i>
        </button>
      </form>

      <div className="authors-wrapper">
        {someAuthors.length === 0 ? (
          <p className="not-found">
            Author Not Found <button onClick={handleSearch}> Back to page</button>
          </p>
        ) : (
          someAuthors.map((author) => (
            <div key={author.id} className="author">
              <img src={author.image} alt={author.name} className="author-img" />
              <h2 className="author-name">{author.name}</h2>
            </div>
          ))
        )}
      </div>
      <Pagination
        handleSearch={handleSearch}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </section>
  );
};

export default Authors;

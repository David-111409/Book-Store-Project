import { useState } from "react";
import authors from "../../data/authors";
import "./authors.css";

const Authors = () => {
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");

  const filteredAuthors = authors.filter((author) =>
    author.name.toLowerCase().includes(search.toLowerCase()),
  );

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
        {filteredAuthors.length === 0 ? (
          <p className="not-found">Author Not Found</p>
        ) : (
          filteredAuthors.map((author) => (
            <div key={author.id} className="author">
              <img src={author.image} alt={author.name} className="author-img" />
              <h2 className="author-name">{author.name}</h2>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Authors;

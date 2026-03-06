import { useEffect } from "react";
import "./Pagination.css";
const Pagination = ({ currentPage, totalPages, onPageChange, handleSearch }) => {
  let pages = [];
  for (let i = 0; i < totalPages; i++) pages.push(i + 1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        className="page prev"
        onClick={() => {
          onPageChange(currentPage - 1);
          handleSearch("");
        }}
      >
        Previous
      </button>

      {pages.map((page) => (
        <button
          className={`page ${page === currentPage ? "current" : ""}`}
          key={page}
          onClick={() => {
            onPageChange(page);
            handleSearch();
          }}
        >
          {page}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        className="page next"
        onClick={() => {
          onPageChange(currentPage + 1);
          handleSearch();
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

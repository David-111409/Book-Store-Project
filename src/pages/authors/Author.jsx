import books from "../../data/books";
import authors from "../../data/authors";
import { useParams } from "react-router-dom";

const Author = () => {
  const { id } = useParams();
  const author = authors.find((a) => a.id === +id);
  const authorBooks = books.filter((b) => b.author.split(" ")[0] === author.name.split(" ")[0]);
  return (
    <h2>
      {authorBooks.map((b) => (
        <h2>{b.title}</h2>
      ))}
    </h2>
  );
};

export default Author;

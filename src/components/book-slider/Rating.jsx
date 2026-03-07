import './rating.css';

function generateStarrs(rating) {
  let ar = [];
  const fullStars = Math.floor(rating);
  const halfStar = +(rating - fullStars >= 0.5);
  const emptyStars = 5 - fullStars - halfStar;

  for (let i = 0; i < fullStars; i++) {
    ar.push(<i className="bi bi-star-fill" key={`full ${i}`}></i>);
  }
  if (halfStar) {
    ar.push(<i className="bi bi-star-half" key={`half`}></i>);
  }
  for (let i = 0; i < emptyStars; i++) {
    ar.push(<i className="bi bi-star" key={`empty ${i}`}></i>);
  }

  return ar;
}

const Rating = ({ rating, reviews }) => {
  return (
    <div className="rating">
      <div className="stars">{generateStarrs(rating)}</div>
      <span className="rating-value">{rating}</span>
      <span className="reviews-number">({reviews}) reviews</span>
    </div>
  );
};

export default Rating;
import Slider from "../../components/slider/Slider";
import Services from "../../components/services/Services";
import BookSlider from "../../components/book-slider/BookSlider";
const Home = () => {
  return (
    <>
      <Slider />
      <Services />
      <BookSlider title="Most gifted" />
      <BookSlider title="Best Seller" />
      <BookSlider title="Most wished for" />
    </>
  );
};

export default Home;

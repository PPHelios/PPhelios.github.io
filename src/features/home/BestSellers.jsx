import { Carousel } from "../../components/Carousel/Carousel";
export default function BestSellers() {
  return (
    <section className="bestSellers">
      <h2 className="bestSellers--title">Best Sellers</h2>
      <div className="bestSellers--carouselContainer">
        <Carousel />
      </div>
    </section>
  );
}

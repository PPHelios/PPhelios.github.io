import Carousel from "react-grid-carousel";
import { CarouselItem } from "../CarouselItem/CarouselItem";
import "./carouselComponent.scss";
export const CarouselComponent = () => {
  return (
    <Carousel cols={6} rows={1} gap={10} showDots={true} mobileBreakpoint={820} >
      <Carousel.Item key={1}>
        <div className="carouselItem--container">
          <img src={require("../../assets/images/shop1.jpg")} />
          <h4>800</h4>
        </div>
      </Carousel.Item>
      <Carousel.Item key={2}>
        <div className="carouselItem--container">
          <img src={require("../../assets/images/shop2.jpg")} />
          <h4>800</h4>
        </div>
      </Carousel.Item>
      <Carousel.Item key={3}>
        <div className="carouselItem--container">
          <img src={require("../../assets/images/shop3.jpg")} />
          <h4>800</h4>
        </div>
      </Carousel.Item>
      <Carousel.Item key={4}>
        <div className="carouselItem--container">
          <img src={require("../../assets/images/shop4.jpg")} />
          <h4>800</h4>
        </div>
      </Carousel.Item>
      <Carousel.Item key={5}>
        <div className="carouselItem--container">
          <img src={require("../../assets/images/shop5.jpg")} />
          <h4>800</h4>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

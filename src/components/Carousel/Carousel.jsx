import "./carousel.scss";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import { shopItems } from "../../shopItems";
import { useCartStore } from "../../store/store";

/* lazyLoad accepts 'ondemand', 'progressive', or 'anticipated' for lazy load technique.
89


progressive: Loads the visible image as soon as the page is displayed and the other ones after everything else is loaded in the background ("loads the visible slides on init, and then progressively loads the rest of the slides on window.load()."). Should be used if the other images will be used most (or all) of the times the page is displayed.

on-demand: Loads the visible image as soon as the page is displayed and the other ones only when they're displayed. ("[...] loads slides on demand. When a slide becomes visible (or on the before slide callback) the load is fired.") Should be used if the other images of the carousel are displayed very rarely.

'ondemand' will load the image as soon as you slide to it.

'progressive' loads one image after the other when the page loads.

'anticipated' pre-loads the 1 next and 1 previous image. */

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  lazyLoad: "ondemand",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 825,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 555,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const Carousel = () => {
  const addItemToCart = useCartStore((state) => state.addItemToCart);
  return (
    <div className="sliderContainer">
      <Slider {...settings}>
        {shopItems.map((item) => {
          return (
            <div className="carouselItem" key={item.id}>
              <div className="carouselItem--img">
                <img
                  src={require("../../assets/images/" + item.img + ".webp")}
                  alt={item.alt}
                />
                <div className="carouselItem--img-price">{item.price}$</div>
                <h5>{item.name}</h5>
              </div>

              <div className="carouselItem--details">
                <div className="carouselItem--details-description">
                  <p>{item.description}</p>
                </div>
              </div>
              <button onClick={() => addItemToCart(item)}>
                Add To Cart <span>{item.discountedPrice}$</span>
              </button>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

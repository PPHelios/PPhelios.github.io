import "./carousel.scss";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

const shopItems = [
  {
    id: 0,
    name: "The General",
    description:
      "Our Peruvian beans are from San Ignacio (Estrella Divina), a co-op in a lovely part of Peru. Light/medium roasted, and our customer favorite single origin! It tastes very much peachy and caramely -- yum!",
    price: "70$",
    discountedPrice: "65$",
    img: "shop1",
    alt: "shop coffee item",
  },
  {
    id: 1,
    name: "Pinky",
    description:
      "Our signature blend, which is a blend of our Nicaraguan and Peruvian beans. Our Nicaraguan beans are directly from an awesome family-run farm.",
    price: "60$",
    discountedPrice: "55$",
    img: "shop2",
    alt: "shop coffee item",
  },
  {
    id: 2,
    name: "Rock Star",
    description:
      "Our Peruvian beans are from San Ignacio (Estrella Divina), a co-op in a lovely part of Peru. Light/medium roasted, and our customer favorite single origin! It tastes very much peachy and caramely -- yum!",

    price: "55$",
    discountedPrice: "50$",
    img: "shop3",
    alt: "shop coffee item",
  },
  {
    id: 3,
    name: "The Lady",
    description:
      "Our signature blend, which is a blend of our Nicaraguan and Peruvian beans. Our Nicaraguan beans are directly from an awesome family-run farm.",
    price: "75$",
    discountedPrice: "70$",
    img: "shop4",
    alt: "shop coffee item",
  },
  {
    id: 4,
    name: "Monaliza",
    description:
      "Our Peruvian beans are from San Ignacio (Estrella Divina), a co-op in a lovely part of Peru. Light/medium roasted, and our customer favorite single origin! It tastes very much peachy and caramely -- yum!",
    price: "60$",
    discountedPrice: "55$",
    img: "shop5",
    alt: "shop coffee item",
  },
  {
    id: 5,
    name: "Actionz",
    description:
      "Our signature blend, which is a blend of our Nicaraguan and Peruvian beans. Our Nicaraguan beans are directly from an awesome family-run farm.",

    price: "60$",
    discountedPrice: "55$",
    img: "shop6",
    alt: "shop coffee item",
  },
  {
    id: 6,
    name: "Monroe",
    description:
      "Our Peruvian beans are from San Ignacio (Estrella Divina), a co-op in a lovely part of Peru. Light/medium roasted, and our customer favorite single origin! It tastes very much peachy and caramely -- yum!",
    price: "80$",
    discountedPrice: "75$",
    img: "shop7",
    alt: "shop coffee item",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
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
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const Carousel = () => {
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
                <div className="carouselItem--img-price">{item.price}</div>
              </div>

              <div className="carouselItem--details">
                <div className="carouselItem--details-description">
                  <h5>{item.name}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
              <button>
                Add To Cart <span>{item.discountedPrice}</span>
              </button>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

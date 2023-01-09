import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ItemCard } from "./ItemCard/ItemCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const pics = [
  { id: 0, img: "store1" },
  { id:1, img: "store2" },
  { id:2, img: "store3" },
  { id:3, img: "store4" },
  { id:4, img: "store5" },
  
];

export const Carousel2 = () => {
  return (
    <Carousel

      showDots={true}
      renderDotsOutside={false}	
      responsive={responsive}
      // ssr={false} // means to render carousel on server-side.
      infinite={true}
      // autoPlay={true}
      autoPlaySpeed={300}
      keyBoardControl={true}


      containerClass="carousel-container"
      // removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={"tablet"}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      slidesToSlide={1}
      // customTransition="animation: myAnim 1s ease 0s 1 normal forwards;"
      
    >
      {pics.map((pic) => (
        <ItemCard img={pic.img} key={pic.id}/>
      ))}
    </Carousel>
  );
};

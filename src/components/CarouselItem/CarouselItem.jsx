import Carousel from "react-grid-carousel";
import "./carouselItem.scss"
const shopItems = [
  { id: 0, url: "shop1", alt: "shop item", price: "100$" },
  { id: 0, url: "shop2", alt: "shop item", price: "80$" },
  { id: 0, url: "shop3", alt: "shop item", price: "90$" },
  { id: 0, url: "shop4", alt: "shop item", price: "80$" },
  { id: 0, url: "shop5", alt: "shop item", price: "70$" },
];
export const CarouselItem = () => {
  return (
    shopItems.map(item=>{
   return   (<Carousel.Item key={item.key}>
        <div className="carouselItem--container">
      <img src={"../../assets/images/"+item.url+".jpg"} />
      <h4>{item.price}</h4>
      </div>
    </Carousel.Item>)
    })
    
  );
};

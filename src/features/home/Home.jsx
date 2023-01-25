import { LazyLoadComponent } from "react-lazy-load-image-component";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./home.scss";
import ArtMeetsCoffee from "./ArtMeetsCoffee";
import SloganSection from "./SloganSection";
import BestSellers from "./BestSellers";
import AboutAndJoin from "./AboutAndJoin";

export const Home = () => {
  return (
    <>
      <main className="main">
        <div className="home--images">
          <div className="home--images-img1">
            <LazyLoadImage
              src={require("../../assets/images/body1.webp")}
              alt="artistic coffee package"
            />
          </div>
          <div className="home--images-img2">
            <LazyLoadImage
              src={require("../../assets/images/body2.webp")}
              alt="artistic coffee package"
            />
            <button>Buy Now</button>
          </div>
          <div className="home--images-img3">
            <LazyLoadImage
              src={require("../../assets/images/shop1.webp")}
              alt="artistic coffee package"
            />
          </div>
        </div>
      </main>
      <LazyLoadComponent>
        <ArtMeetsCoffee />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <SloganSection />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <BestSellers />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <AboutAndJoin />
      </LazyLoadComponent>
    </>
  );
};

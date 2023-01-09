import { Button } from "../../components/Button.jsx/Button";
import "./home.scss";
import { Marquee } from "./Marquee";
import { Navbar } from "./Navbar";

export const Home = () => {
  return (
    <>
      <Marquee />
      <Navbar />
      <main>
        <div className="home--images">
          <div className="home--images-img1">
            <img src={require("../../assets/images/body1.jpg")}
            alt="artistic coffee package"/>
          </div>
          <div className="home--images-img2">
            <img src={require("../../assets/images/body2.jpg")}
            alt="artistic coffee package"/>
            <Button text="Buy Now" />
          </div>
          <div className="home--images-img3">
            <img src={require("../../assets/images/body3.jpg")}
            alt="artistic coffee package"/>
          </div>
        </div>
      </main>
      <section className="slogansSection">
        <div className="slogansSection--slogan">
          <h2 className="slogansSection--slogan-text">
            A Hot Cup of <br />
            <span>Happiness</span>
          </h2>
          <img src={require("../../assets/images/slogan1.jpg")} 
          alt="cup of coffee with heart shaped cream"/>
        </div>
        <div className="slogansSection--slogan">
          <img src={require("../../assets/images/slogan2.jpg")} 
          alt="heart of coffee beans" />
          
            <h2 className="slogansSection--slogan-text text2">
              Better Beans, Better <br />
              <span className="span2">Coffee.</span>
            </h2>
         
        </div>
      </section>
      <section className="artMeetsCoffee">
        <div className="artMeetsCoffee--grid">
          <div className="artMeetsCoffee--grid-header h2art">
            <h2>art</h2>
          </div>
          <img
            className="artMeetsCoffee--grid-img1"
            src={require("../../assets/images/art1.jpg")}
            alt="artistic coffee package"
          />
          <div className="artMeetsCoffee--grid-header h2meets">
            <h2>meets</h2>
          </div>
          <img
            className="artMeetsCoffee--grid-img2"
            src={require("../../assets/images/art2.jpg")}
            alt="artistic coffee package"
          />
          <div className="artMeetsCoffee--grid-header h2coffee">
            <h2>coffee</h2>
          </div>
          <img
            className="artMeetsCoffee--grid-img3"
            src={require("../../assets/images/art3.jpg")} 
            alt="artistic coffee package"
          />
        </div>
      </section>
      <section className="bestSellers">
       <h2 className="bestSellers--title">Our Products</h2>
       <div className="bestSellers--productsContainer">
        <div className="big"></div>
       </div>
      </section>
    </>
  );
};

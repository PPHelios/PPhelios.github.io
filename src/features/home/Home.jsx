import { Button } from "../../components/Button.jsx/Button";
import { Carousel } from "../../components/Carousel/Carousel";
import "./home.scss";
import { Marquee } from "../../components/Marquee/Marquee";
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
            <img src={require("../../assets/images/shop1.jpg")}
            alt="artistic coffee package"/>
          </div>
        </div>
      </main>
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

      <section className="bestSellers">
       <h2 className="bestSellers--title">Best Sellers</h2>
       <div className="bestSellers--carouselContainer">
      <Carousel />
       </div>
      </section>

      <section className="aboutAndJoin">
        <div className="aboutAndJoin--about">
           <h2>Hi, We are <span>artz-coffee</span></h2>
        <p>We're making specialty coffee you can can drink and enjoy without pretentious notes and bluff. Think fun and approachable, not douchey. Inclusivity is at the core of what we do.</p>
        <img className="aboutAndJoin--about-coffeeForEveryOne" src={require("../../assets/images/coffee-for-every-one.webp")} alt="coffee for every one image"/>
        <img className="aboutAndJoin--about-coffeeCup" src={require("../../assets/images/coffee-cup.svg").default} alt="colorful cup of coffee"/>

        </div>
        <div className="aboutAndJoin--slogan">
           <p>great coffee <span>shouldn't be douchey</span></p>
           </div>
           <div className="aboutAndJoin--join">
            <div className="aboutAndJoin--join-like">
               <p>like and subscribe!!!</p>
            </div>
            <div className="aboutAndJoin--join-socialsBar">
          <a href="#"><img  src={require("../../assets/images/facebook-logo.svg").default} alt="facebook icon"/></a>
          <a href="#"><img  src={require("../../assets/images/instagram-logo-pink.svg").default} alt="instagram icon"/></a>
          <a href="#"><img  src={require("../../assets/images/twitter-square-logo.svg").default} alt="twitter icon"/></a>
          <a href="#"><img  src={require("../../assets/images/tiktok-logo-pink.svg").default} alt="tiktok icon"/></a>
        </div>
           </div>
        
      </section>
    </>
  );
};

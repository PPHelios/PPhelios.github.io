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
            <img
              src={require("../../assets/images/body1.webp")}
              alt="artistic coffee package"
            />
          </div>
          <div className="home--images-img2">
            <img
              src={require("../../assets/images/body2.webp")}
              alt="artistic coffee package"
            />
            <Button text="Buy Now" />
          </div>
          <div className="home--images-img3">
            <img
              src={require("../../assets/images/shop1.webp")}
              alt="artistic coffee package"
            />
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
            src={require("../../assets/images/art1.webp")}
            alt="artistic coffee package"
          />
          <div className="artMeetsCoffee--grid-header h2meets">
            <h2>meets</h2>
          </div>
          <img
            className="artMeetsCoffee--grid-img2"
            src={require("../../assets/images/art2.webp")}
            alt="artistic coffee package"
          />
          <div className="artMeetsCoffee--grid-header h2coffee">
            <h2>coffee</h2>
          </div>
          <img
            className="artMeetsCoffee--grid-img3"
            src={require("../../assets/images/art3.webp")}
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
          <img
            src={require("../../assets/images/slogan1.webp")}
            alt="cup of coffee with heart shaped cream"
          />
        </div>
        <div className="slogansSection--slogan">
          <img
            src={require("../../assets/images/slogan2.webp")}
            alt="heart of coffee beans"
          />
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
          <h2>
            Hi, We are <span>dass-coffee</span>
          </h2>
          <p>
            We're making specialty coffee you can can drink and enjoy without
            pretentious notes and bluff. Think fun and approachable, not
            douchey. Inclusivity is at the core of what we do.
          </p>
          <img
            className="aboutAndJoin--about-coffeeForEveryOne"
            src={require("../../assets/images/coffee-for-every-one.webp")}
            alt="coffee for every one image"
          />
          <img
            className="aboutAndJoin--about-coffeeCup"
            src={require("../../assets/images/coffee-cup.webp")}
            alt="colorful cup of coffee"
          />
        </div>
        <div className="aboutAndJoin--slogan">
          <p>
            great coffee <span>shouldn't be douchey</span>
          </p>
        </div>
        <div className="aboutAndJoin--join">
          <div className="aboutAndJoin--join-like">
            <p>like and subscribe!!!</p>
          </div>
          <div className="aboutAndJoin--join-socialsBar">
            <a href="#">
              <img
                src={require("../../assets/images/facebook-logo.webp")}
                alt="facebook icon"
              />
            </a>
            <a href="#">
              <img
                src={require("../../assets/images/instagram-logo-pink.webp")}
                alt="instagram icon"
              />
            </a>
            <a href="#">
              <img
                src={require("../../assets/images/twitter-square-logo.webp")}
                alt="twitter icon"
              />
            </a>
            <a href="#">
              <img
                src={require("../../assets/images/tiktok-logo-pink.webp")}
                alt="tiktok icon"
              />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <img
          className="footer--waves"
          src={require("../../assets/images/wave.webp")}
          alt="coffee for every one banner"
        />
        <div className="footer--body">
          <div className="footer--body-top">
            <div className="footer--body-top-about">
              <h4>About</h4>
              <a href="#">Our Story</a>
              <a href="#">Refund Policy</a>
              <a href="#">Location</a>
            </div>
            <div className="footer--body-top-support">
              <h4>Support</h4>
              <a href="#">FAQs</a>
              <a href="#">Contact</a>
              <a href="#">Shipping & Returns</a>
            </div>
            <div className="footer--body-top-socialsBar">
              <a href="#">
                <img
                  src={require("../../assets/images/facebook-logo.webp")}
                  alt="facebook icon"
                />
              </a>
              <a href="#">
                <img
                  src={require("../../assets/images/instagram-logo-pink.webp")}
                  alt="instagram icon"
                />
              </a>
              <a href="#">
                <img
                  src={require("../../assets/images/twitter-square-logo.webp")}
                  alt="twitter icon"
                />
              </a>
              <a href="#">
                <img
                  src={require("../../assets/images/tiktok-logo-pink.webp")}
                  alt="tiktok icon"
                />
              </a>
            </div>
          </div>
          <div className="footer--body-bottom">
            <form>
              <label htmlFor="subscribeToNewsLetter">Enter Your Email</label>
              <input
                id="subscribeToNewsLetter"
                type="email"
                autoCorrect="false"
                autoCapitalize="false"
                required
              />
              <button>Subscribe To Our News Letter</button>
            </form>
            <img
              className="footer--body-logo"
              src={require("../../assets/images/green-logo.webp")}
              alt="dass-coffee logo"
            />
          </div>
          <img
            className="footer--body-banner"
            src={require("../../assets/images/coffee-for-every-one2.webp")}
            alt="coffee for every one banner"
          />
        </div>
      </footer>
    </>
  );
};

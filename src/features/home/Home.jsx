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
            <img src={require("../../assets/images/body1.jpg")}></img>
          </div>
          <div className="home--images-img2">
            <img src={require("../../assets/images/body2.jpg")}></img>
            <Button text="Buy Now" />
          </div>
          <div className="home--images-img3">
            <img src={require("../../assets/images/body3.jpg")}></img>
          </div>
        </div>
      </main>
      <section className="slogansSection">
        <div className="slogansSection--slogan">
          <h2 className="slogansSection--slogan-text">
            A Hot Cup of <br />
            <span>Happiness</span>
          </h2>
          <img src={require("../../assets/images/slogan1.jpg")} />
        </div>
        <div className="slogansSection--slogan">
          <img src={require("../../assets/images/slogan2.jpg")} />
          <div className="xxx">
            <h2 className="slogansSection--slogan-text text2">
              Better Beans, Better <br />
              <span className="span2">Coffee.</span>
            </h2>
          </div>
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
          />
          <div className="artMeetsCoffee--grid-header h2meets">
            <h2>meets</h2>
          </div>
          <img
            className="artMeetsCoffee--grid-img2"
            src={require("../../assets/images/art2.jpg")}
          />
          <div className="artMeetsCoffee--grid-header h2coffee">
            <h2>coffee</h2>
          </div>
          <img
            className="artMeetsCoffee--grid-img3"
            src={require("../../assets/images/art3.jpg")}
          />
        </div>
      </section>
      <section className="ourproducts">
        <div className="flex">
          <div className="box red"></div>
          <div className="box green"></div>
          <div className="box blue"></div>
          <div className="box red"></div>
          <div className="box green"></div>
          <div className="box blue"></div>
        </div>
      </section>
    </>
  );
};

import { lazy, Suspense } from "react";
import { Button } from "../../components/Button.jsx/Button";
import "./home.scss";
import { Marquee } from "../../components/Marquee/Marquee";
import { Navbar } from "../../components/NavBar/Navbar";

const ArtMeetsCoffee = lazy(() => import("./ArtMeetsCoffee"));
const SloganSection = lazy(() => import("./SloganSection"));
const BestSellers = lazy(() => import("./BestSellers"));
const AboutAndJoin = lazy(() => import("./AboutAndJoin"));
const Footer = lazy(() => import("./Footer"));
export const Home = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Marquee />
        <Navbar />
        <main>
          <div className="home--images">
            <div className="home--images-img1">
              <img
                src={require("../../assets/images/body1.webp")}
                loading="lazy"
                alt="artistic coffee package"
              />
            </div>
            <div className="home--images-img2">
              <img
                src={require("../../assets/images/body2.webp")}
                loading="lazy"
                alt="artistic coffee package"
              />
              <Button text="Buy Now" />
            </div>
            <div className="home--images-img3">
              <img
                src={require("../../assets/images/shop1.webp")}
                loading="lazy"
                alt="artistic coffee package"
              />
            </div>
          </div>
        </main>
        <ArtMeetsCoffee />
        <SloganSection />
        <BestSellers />
        <AboutAndJoin />
        <Footer />
      </Suspense>
    </>
  );
};

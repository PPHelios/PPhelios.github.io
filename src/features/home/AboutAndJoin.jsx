export default function AboutAndJoin() {
  return (
    <section className="aboutAndJoin">
      <div className="aboutAndJoin--about">
        <h2>
          Hi, We are <span>dass-coffee</span>
        </h2>
        <p>
          We're making specialty coffee you can can drink and enjoy without
          pretentious notes and bluff. Think fun and approachable, not douchey.
          Inclusivity is at the core of what we do.
        </p>
        <img
          className="aboutAndJoin--about-coffeeForEveryOne"
          src={require("../../assets/images/coffee-for-every-one.webp")}
          loading="lazy"
          alt="coffee for every one image"
        />
        <img
          className="aboutAndJoin--about-coffeeCup"
          src={require("../../assets/images/coffee-cup.webp")}
          loading="lazy"
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
              loading="lazy"
              alt="facebook icon"
            />
          </a>
          <a href="#">
            <img
              src={require("../../assets/images/instagram-logo-pink.webp")}
              loading="lazy"
              alt="instagram icon"
            />
          </a>
          <a href="#">
            <img
              src={require("../../assets/images/twitter-square-logo.webp")}
              loading="lazy"
              alt="twitter icon"
            />
          </a>
          <a href="#">
            <img
              src={require("../../assets/images/tiktok-logo-pink.webp")}
              loading="lazy"
              alt="tiktok icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

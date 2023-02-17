import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <img
        className="footer--waves"
        src={require("../../assets/images/wave.webp")}
        loading="lazy"
        alt="coffee for every one banner"
      />
      <div className="footer--body">
        <div className="footer--body-top">
          <div className="footer--body-top-about">
            <h4>About</h4>
            <Link to="/">Our Story</Link>
            <Link to="/">Refund Policy</Link>
            <Link to="/">Location</Link>
          </div>
          <div className="footer--body-top-support">
            <h4>Support</h4>
            <Link to="/">FAQs</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Shipping & Returns</Link>
          </div>
          <div className="footer--body-top-socialsBar">
            <a href="www.facebook.com">
              <img
                src={require("../../assets/images/facebook-logo.webp")}
                loading="lazy"
                alt="facebook icon"
              />
            </a>
            <a href="www.instagram.com">
              <img
                src={require("../../assets/images/instagram-logo-pink.webp")}
                loading="lazy"
                alt="instagram icon"
              />
            </a>
            <a href="www.twitter.com">
              <img
                src={require("../../assets/images/twitter-square-logo.webp")}
                loading="lazy"
                alt="twitter icon"
              />
            </a>
            <a href="www.tiktok.com">
              <img
                src={require("../../assets/images/tiktok-logo-pink.webp")}
                loading="lazy"
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
            loading="lazy"
            alt="dass-coffee logo"
          />
        </div>
        <img
          className="footer--body-banner"
          src={require("../../assets/images/coffee-for-every-one2.webp")}
          loading="lazy"
          alt="coffee for every one banner"
        />
      </div>
    </footer>
  );
}

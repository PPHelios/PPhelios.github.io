export default function SloganSection() {
  return (
    <section className="slogansSection">
      <div className="slogansSection--slogan">
        <h2 className="slogansSection--slogan-text">
          A Hot Cup of <br />
          <span>Happiness</span>
        </h2>
        <img
          src={require("../../assets/images/slogan1.webp")}
          loading="lazy"
          alt="cup of coffee with heart shaped cream"
        />
      </div>
      <div className="slogansSection--slogan">
        <img
          src={require("../../assets/images/slogan2.webp")}
          loading="lazy"
          alt="heart of coffee beans"
        />
        <h2 className="slogansSection--slogan-text text2">
          Better Beans, Better <br />
          <span className="span2">Coffee.</span>
        </h2>
      </div>
    </section>
  );
}

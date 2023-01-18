export default function ArtMeetsCoffee() {
  return (
    <section className="artMeetsCoffee">
      <div className="artMeetsCoffee--grid">
        <div className="artMeetsCoffee--grid-header h2art">
          <h2>art</h2>
        </div>
        <img
          className="artMeetsCoffee--grid-img1"
          src={require("../../assets/images/art1.webp")}
          loading="lazy"
          alt="artistic coffee package"
        />
        <div className="artMeetsCoffee--grid-header h2meets">
          <h2>meets</h2>
        </div>
        <img
          className="artMeetsCoffee--grid-img2"
          src={require("../../assets/images/art2.webp")}
          loading="lazy"
          alt="artistic coffee package"
        />
        <div className="artMeetsCoffee--grid-header h2coffee">
          <h2>coffee</h2>
        </div>
        <img
          className="artMeetsCoffee--grid-img3"
          src={require("../../assets/images/art3.webp")}
          loading="lazy"
          alt="artistic coffee package"
        />
      </div>
    </section>
  );
}

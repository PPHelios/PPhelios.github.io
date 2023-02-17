import "./location.scss";
export default function Location() {
  return (
    <section className="location">
      <h1>
        Find us <span>IRL</span>
      </h1>
      <div className="location-paragraph">
        <p>
          Miss the days of waking up at 6AM and rushing to grab a coffee before
          heading into the office for 8+ hours a day? Neither do we. We know you
        </p>
        <p>
          {" "}
          If you're craving the type of pre-panny interaction we used to know
          and love, come find our coffee brewing in person at one of the below
          locations.
        </p>
      </div>

      <div className="map">
        <iframe
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          loading="lazy"
          title="our location map"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=nasr%20city+(nasr%20city%20costa)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </section>
  );
}

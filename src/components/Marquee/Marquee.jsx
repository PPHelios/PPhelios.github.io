import "./marquee.scss";
export const Marquee = () => {
  return (
    <div className="marquee" id="marquee">
      <div className="marquee--content">
        <img
          className="smiley"
          src={require("../../assets/images/smile.webp")}
          alt="smiley"
          width="32"
          height="32"
        />
        <h4>subscreibe and save</h4>
        <img
          src={require("../../assets/images/smdg.webp")}
          alt="smdg"
          width="32"
          height="32"
        />
        <h4>free shipping over 50$</h4>
        <img
          src={require("../../assets/images/smdg.webp")}
          alt="smdg"
          width="32"
          height="32"
        />
        <h4>new items in shop</h4>
      </div>
      <div className="marquee--content">
        <img
          className="smiley"
          src={require("../../assets/images/smile.webp")}
          alt="smiley"
          width="32"
          height="32"
        />
        <h4>subscreibe and save</h4>
        <img
          src={require("../../assets/images/smdg.webp")}
          alt="smdg"
          width="32"
          height="32"
        />
        <h4>free shipping over 50$</h4>
        <img
          src={require("../../assets/images/smdg.webp")}
          alt="smdg"
          width="32"
          height="32"
        />
        <h4>new items in shop</h4>
      </div>
    </div>
  );
};

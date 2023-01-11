import "./marquee.scss"
export const Marquee = () => {
  return (
    <div className="marquee">
      <div className="marquee--content">
        <img src={require("../../assets/images/smile.png")} alt="smiley" />
        <h4>subscreibe and save</h4>
        <img src={require("../../assets/images/smdg.png")} alt="smdg" />
        <h4>free shipping over 50$</h4>
        <img src={require("../../assets/images/smdg.png")} alt="smdg" />
        <h4>new items in shop</h4>
      </div>
      <div className="marquee--content">
        <img src={require("../../assets/images/smile.png")} alt="smiley" />
        <h4>subscreibe and save</h4>
        <img src={require("../../assets/images/smdg.png")} alt="smdg" />
        <h4>free shipping over 50$</h4>
        <img src={require("../../assets/images/smdg.png")} alt="smdg" />
        <h4>new items in shop</h4>
      </div>
    </div>
  );
};

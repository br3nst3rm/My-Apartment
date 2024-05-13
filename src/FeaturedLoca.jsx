import location1 from "./assets/images/Rectangle 2187.png";
import location2 from "./assets/images/Rectangle 2188.png";
import location3 from "./assets/images/Rectangle 2190.png";
import location4 from "./assets/images/Rectangle 2193.svg";
import location5 from "./assets/images/Rectangle 2191.png";
import location6 from "./assets/images/Rectangle 2192.png";
import underline1 from "./assets/images/Rectangle 2214.svg";
import underline2 from "./assets/images/Rectangle 2215.svg";

function FeaturedLoca() {
  return (
    <div className="featuredLocDiv">
      <div className="featuredLocHead">
        <p>Featured Locations</p>
        <div className="featuredLoc">
          <img id="rec1" src={underline1} alt="" />
          <img id="rec2" src={underline2} alt="" />
        </div>
      </div>
      <div className="allLocation">
        <div className="leftLocation">
          <img src={location1} alt="" />
        </div>
        <div className="middleLocation">
          <img src={location2} alt="" />
          <img src={location3} alt="" />
          <img src={location4} alt="" />
          <img src={location5} alt="" />
        </div>
        <div className="rightLocation">
          <img src={location6} alt="" />
        </div>
      </div>
    </div>
  );
}

export default FeaturedLoca;

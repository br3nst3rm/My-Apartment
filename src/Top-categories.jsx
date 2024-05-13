import house1 from "./assets/images/image 24.png";
import house2 from "./assets/images/image 26.png";
import house3 from "./assets/images/image 27.png";
import underline1 from "./assets/images/Rectangle 2214.svg";
import underline2 from "./assets/images/Rectangle 2215.svg";

function TopCategory() {
  return (
    <div className="categoryDiv">
      <div className="categoryHead">
        <p>Browse From Top Categories</p>
        <div className="rectangleDiv">
          <img id="rec1" src={underline1} alt="" />
          <img id="rec2" src={underline2} alt="" />
        </div>
      </div>
      <div className="category">
        <div className="category1">
          <img src="./src/assets/images/Group 33502.svg" alt="" />
          <p>Holiday Rentals</p>
        </div>
        <div className="category2">
          <img src="./src/assets/images/Group 33502 (1).svg" alt="" />
          <p>Residential Spaces</p>
        </div>
        <div className="category3">
          <img src="./src/assets/images/Group 33502 (2).svg" alt="" />
          <p>Event Spaces</p>
        </div>
        <div className="category4 ">
          <img src="./src/assets/images/Group 33502 (4).svg" alt="" />
          <p>Commercial Properties</p>
        </div>
        <div className="category5">
          <img src="./src/assets/images/Group 33502 (6).svg" alt="" />
          <p>More</p>
        </div>
      </div>
    </div>
  );
}
export default TopCategory;

import underline1 from "./assets/images/Rectangle 2214.svg";
import underline2 from "./assets/images/Rectangle 2215.svg";
import picture1 from "./assets/images/i-parallax-11-1024x683.jpeg.png";
import picture2 from "./assets/images/Link - i-parallax-15-1024x683.jpeg.png";
import picture3 from "./assets/images/Link - i-parallax-14-1024x683.jpeg.png";
import picture4 from "./assets/images/Link - i-parallax-12-1024x683.jpeg.png";
import picture5 from "./assets/images/Link - i-parallax-13-1024x683.jpeg.png";

function ImportantArt() {
  return (
    <div className="importantArtDiv">
      <div className="importantArtHead">
        <p>Important Articles</p>
        <div className="importantArtU">
          <img id="rec1" src={underline1} alt="" />
          <img id="rec2" src={underline2} alt="" />
        </div>
      </div>
      <div className="articleSection">
        <div className="leftSide">
          <img src={picture1} alt="" />
          <div className="lsContent">
            <p className="lsContentDate">February 4, 2023 </p>
            <p className="lsContentTip">
              Top Tips for Finding the Perfect Rental
            </p>
            <p className="lsContentAdvice">
              Discover expert advice on how to find the ideal rental property
              that meets your needs and budget.
            </p>
          </div>
        </div>
        <div className="rightSideDiv">
          <div className="rightSideSubSec1">
            <div className="rightImgDiv1">
              <img src={picture2} alt="" />
            </div>
            <div className="rightContnetDiv1">
              <p className="rightContentDate1">May 7, 2023</p>
              <p className="rightContentTip1">
                Car Rental Hacks for a Smooth Journey
              </p>
              <p className="rightContentAdvice1">
                Learn insider tips for getting the best deals and making the
                most of your rental car experience.
              </p>
            </div>
          </div>
          <div className="rightSideSubSec2">
            <div className="rightImgDiv2">
              <img src={picture3} alt="" />
            </div>
            <div className="rightContnetDiv2">
              <p className="rightContentDate2">April 25, 2023</p>
              <p className="rightContentTip2">
                Managing Your Rental Items: A Comprehensive Guide
              </p>
              <p className="rightContentAdvice2">
                Get valuable insights on how to effectively manage and maintain
                your rented items.
              </p>
            </div>
          </div>
          <div className="rightSideSubSec3">
            <div className="rightImgDiv3">
              <img src={picture4} alt="" />
            </div>
            <div className="rightContnetDiv3">
              <p className="rightContentDate3">January 2, 2023</p>
              <p className="rightContentTip3">
                Navigating the Rental Market: Insights for New Renters
              </p>
              <p className="rightContentAdvice3">
                Explore key considerations and useful tips for individuals new
                to the rental market.
              </p>
            </div>
          </div>
          <div className="rightSideSubSec4">
            <div className="rightImgDiv4">
              <img src={picture5} alt="" />
            </div>
            <div className="rightContnetDiv4">
              <p className="rightContentDate4">April 7, 2023</p>
              <p className="rightContentTip4">
                Maximizing Returns: Strategies for Rental Property Owners
              </p>
              <p className="rightContentAdvice4">
                Learn strategies to optimize the return on investment for your
                rental property.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImportantArt;

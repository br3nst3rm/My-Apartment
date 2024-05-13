import social1 from "./assets/images/Group 563.svg";
import social2 from "./assets/images/Group 562.svg";
import social3 from "./assets/images/Group 561.svg";
import social4 from "./assets/images/Group 560.svg";
import social5 from "./assets/images/Group 559.svg";
import btnLogo from "./assets/images/logo 1.png";

function BottomEnd() {
  return (
    <>
      <div className="buttomEndDiv">
        <div className="allButtom">
          <div className="buttom1">
            <img className="buttom1Logo" src={btnLogo} alt="" />
            <p className="button1Create">
              Sri Lanka's first & largest platform designed to create an online
              marketplace exclusively for RENT
            </p>
            <div className="socialDiv">
              <img src={social1} alt="" />
              <img src={social2} alt="" />
              <img src={social3} alt="" />
              <img src={social4} alt="" />
              <img src={social5} alt="" />
            </div>
          </div>
          <div className="buttom2">
            <div className="buttom2Head">
              <p>Navigation</p>
            </div>
            <div className="buttom2Opt">
              <p>About Us </p>
              <p>Blog</p>
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="buttom3">
            <div className="buttom3Head">
              <p>Featured Locations</p>
            </div>
            <div className="buttom3Opt">
              <p>Kandy</p>
              <p>Badulla</p>
              <p>Colombo</p>
              <p>Kaluthara</p>
            </div>
          </div>
          <div className="buttom4">
            <div className="buttom4Head">
              <p>Help</p>
            </div>
            <div className="buttom4Opt">
              <p>FAQ</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="buttom5">
            <div className="buttom5Head">
              <p>Subscribe to Our Newsletter</p>
            </div>
            <div id="buttom5OPtP" className="buttom5Opt">
              <p>Stay updated with the latest listings and rental tips.</p>
            </div>
            <div className="buttom6">
              <input
                type="text"
                name=""
                placeholder="Email Addresss"
                id="subscribeInput"
              />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="copyRightDiv">
        <p className="copyRight">
          © Copyright 2024. Designed and Developed by ST3RM23
        </p>
      </div>
    </>
  );
}

export default BottomEnd;

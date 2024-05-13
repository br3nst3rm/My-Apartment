import logo from "./assets/images/logo 1.png";

function Header() {
  return (
    <nav className="header">
      <div className="leftOption">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="midOption">
        <p>Home</p>
        <p>Rentals</p>
        <p>Categories</p>
        <p>About Us</p>
        <p>Contact</p>
        <p>Blog</p>
      </div>
      <div className="rightOption">
        <div className="signInDiv">
          <i class="fa-regular fa-user"></i>
          <p>Sign in</p>
          <i class="fa-solid fa-bars"></i>
        </div>
        <div className="postListingDiv">
          <i class="fa-solid fa-plus"></i>
          <p>Post Listing</p>
        </div>
      </div>
    </nav>
  );
}

export default Header;

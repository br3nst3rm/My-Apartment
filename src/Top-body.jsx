function TopBody() {
  return (
    <div className="topBody">
      <div className="discoverDiv">
        <p className="discover">
          Discover Your <span>Perfect Rental</span>
        </p>
        <p className="rent">
          Rent Cars, Houses, and Items in just a few Clicks
        </p>
      </div>
      <div className="userOptions">
        <button className="option1">Places</button>
        <button className="option2">Rides</button>
        <button className="option3">Things</button>
      </div>
      <div className="searchOption">
        <div className="searchNeed">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            className="inputNeed"
            type="text"
            placeholder="Search for cars, houses and more."
          />
        </div>
        <div className="searchLocation">
          <div className="locationNav">
            <i class="fa-solid fa-location-dot"></i>
            <p className="location">Select Location</p>
            <i class="fa-solid fa-angle-down"></i>
          </div>
          <div className="search-icon">
            <i id="search" class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBody;

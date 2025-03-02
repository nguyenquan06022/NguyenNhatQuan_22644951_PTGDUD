import logoWhite from "../assets/images/chefifywhite.png";
function Footer() {
  return (
    <div className="footer">
      <div className="item">
        <h3>About Us</h3>
        <p>
          Welcome to our website, a wonderful place to explore and learn how to
          cook like a pro .
        </p>
        <div style={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <div style={{ display: "flex" }}>
            <input
              className="searchBox"
              type="text"
              placeholder="Enter you email"
              style={{ margin: 10 }}
            />
            <button
              className="btn"
              style={{
                backgroundColor: "rgb(244, 75, 134)",
                color: "white",
              }}
            >
              Send
            </button>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logoWhite} alt="" />
          <div style={{ margin: 20 }}>2023 Checfify Company</div>
          <div style={{ margin: 20 }}>Terms of Servicel Privacy Policy</div>
        </div>
      </div>
      <div className="item">
        <div>
          <p style={{ fontWeight: "bold" }}>Learn More</p>
          <p>Our Cooks</p>
          <p>See Our Features</p>
          <p>FAQ</p>
        </div>
        <div>
          <p style={{ fontWeight: "bold" }}>Shop</p>
          <p>Gift Subscription</p>
          <p>Send Us Feedback</p>
        </div>
      </div>
      <div className="item">
        <div>
          <p style={{ fontWeight: "bold" }}>Recipes </p>
          <p>What to Cook This Week</p>
          <p>Pasta</p>
          <p>Dinner</p>
          <p>Healthy</p>
          <p>Vegetarian</p>
          <p>Vegan</p>
          <p>Christmas</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

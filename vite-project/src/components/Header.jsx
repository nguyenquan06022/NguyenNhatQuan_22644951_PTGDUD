import { Link } from "react-router-dom";
import logo from "../assets/images/chefify.png";
import check from "../assets/images/check.png";
import avt from "../assets/images/avatar.png";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="search">
        <input
          className="searchBox"
          type="text"
          placeholder="What would you like to cook?"
        />
      </div>
      <div className="nav">
        <ul>
          <li>
            <Link className="nav-link">What to cook</Link>
          </li>
          <li>
            <Link className="nav-link">Recipes</Link>
          </li>
          <li>
            <Link className="nav-link">Ingredients</Link>
          </li>
          <li>
            <Link className="nav-link">Occasions</Link>
          </li>
          <li>
            <Link className="nav-link">About Us</Link>
          </li>
        </ul>
      </div>
      <div className="user">
        <button
          className="btn"
          style={{
            backgroundColor: "rgb(255, 239, 245)",
            color: "rgb(241, 116, 162)",
          }}
        >
          <img src={check} alt="" />
          You Recipe Box
        </button>
        <div className="avt">
          <img src={avt} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;

import "../../public/css/search.css";
import nocheck from "../assets/images/checkbox.png";
import check from "../assets/images/checkboxpink.png";
import slider from "../assets/images/slider.png";
import s5 from "../assets/images/rating_5.png";
import s4 from "../assets/images/rating_4.png";
import s3 from "../assets/images/rating_3.png";
import s2 from "../assets/images/rating_2.png";
import s1 from "../assets/images/rating_1.png";
function Search() {
  return (
    <div className="search">
      <div className="filter">
        <h2>FILTERS</h2>
        <p style={{ fontWeight: "bold" }}>Type</p>
      </div>
      <div className="time">
        <p style={{ fontWeight: "bold" }}>Time</p>
        <img src={slider} alt="" />
      </div>
      <div className="rating">
        <p style={{ fontWeight: "bold" }}>Rating</p>
        <div className="list-rating">
          <div className="rating-item">
            <img src={nocheck} alt="" />
            <img src={s5} alt="" />
          </div>
          <div className="rating-item">
            <img src={nocheck} alt="" />
            <img src={s4} alt="" />
          </div>
          <div className="rating-item">
            <img src={check} alt="" />
            <img src={s3} alt="" />
          </div>
          <div className="rating-item">
            <img src={check} alt="" />
            <img src={s2} alt="" />
          </div>
          <div className="rating-item">
            <img src={check} alt="" />
            <img src={s1} alt="" />
          </div>
        </div>
      </div>
      <div className="apply">
        <button
          className="btn btn-block"
          style={{ backgroundColor: "rgb(244, 75, 134)", color: "white" }}
        >
          Apply
        </button>
      </div>
    </div>
  );
}
export default Search;

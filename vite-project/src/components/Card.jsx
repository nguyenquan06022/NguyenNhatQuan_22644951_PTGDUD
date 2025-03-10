function Card({ data }) {
  return (
    <div className="card">
      <img src={data.image} alt="" />
      <div className="card-title">
        <h3>{data.name}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: "rgb(244, 75, 135)" }}
        >
          <path d="M19 10.132v-6c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2V22l7-4.666L19 22V10.132z"></path>
        </svg>
      </div>
      <p className="card-des">
        <span>{data.time}</span>
      </p>
    </div>
  );
}
export default Card;

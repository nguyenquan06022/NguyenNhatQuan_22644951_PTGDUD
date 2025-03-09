import { useState, useEffect } from "react";
import Card from "../components/Card";
import Pagination from "../components/pagination";
function RecipeBox() {
  const [curPage, setCurpage] = useState(1);
  const [activeType, setActiveType] = useState("Save Recipes");
  const [types, setType] = useState([
    "Save Recipes",
    "Folders",
    "Recipes by Genevieve",
  ]);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://67cd3397dd7651e464ed9d18.mockapi.io/FoodData"
      )
        .then((response) => response.json())
        .catch((err) => console.log(err));
      setData(res);
    }
    fetchData();
  }, []);

  const handleChangeType = (type) => {
    setActiveType(type);
  };

  return (
    <div className="tab-container">
      <div className="tab-types">
        {types.map((item) => (
          <li
            className={activeType == item ? "active" : ""}
            key={item}
            onClick={() => {
              handleChangeType(item);
            }}
          >
            {item}
          </li>
        ))}
      </div>
      <br />
      <div className="tab">
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default RecipeBox;

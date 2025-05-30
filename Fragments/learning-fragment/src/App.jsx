import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/foodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import "./App.css";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <ul className="list-group">
          <li className="list-group-item active" aria-current="true">
            <h1 className="food-heading">Healthy Food</h1>
          </li>
          <FoodInput handleKeyDown={onKeyDown}></FoodInput>
          <ErrorMessage items={foodItems} />
          <FoodItems items={foodItems} />
        </ul>
      </Container>
    </>
  );
}

export default App;

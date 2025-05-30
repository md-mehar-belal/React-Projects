import Item from "./item";

const FoodItems = ({items}) => {
  
  return (
    <>
      {items.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </>
  );
};

export default FoodItems;

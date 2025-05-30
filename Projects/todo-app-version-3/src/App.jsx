import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/todoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { todoItemsContext } from "./store/todo-items-store"

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
   setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, duedate: itemDueDate },
    ]);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <todoItemsContext.Provider 
    value={{
      todoItems,
      addNewItem,
      deleteItem,
      }}>
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <WelcomeMessage></WelcomeMessage>
      <TodoItems
      ></TodoItems>
    </center>
    </todoItemsContext.Provider>
  );
}

export default App;

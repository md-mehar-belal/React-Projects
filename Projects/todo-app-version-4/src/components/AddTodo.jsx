import { /*useState */ useContext, useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { todoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const {addNewItem} = useContext(todoItemsContext);
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
    // setDueDate("");
    // setTodoName("");
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Hare"
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date"
          ref={dueDateElement}
          // value={dueDate} 
          // onChange={handleDateChange} 
          />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-success kg-button"
            
          >
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

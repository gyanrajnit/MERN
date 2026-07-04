import { useContext, useState } from "react";
import { TodoContext, useTodo } from "../context/ToDoContext";
import { ADD_TODO } from "../context/actions";

const AddToDo = ({ handleReset }) => {
  console.log("AddToDo is rendered");

  const [error, setError] = useState(null);
  const [task, setTask] = useState("");
  const { dispatch } = useTodo();

  const handleAddTask = () => {
    if (!task.trim()) {
      let err = {
        message: "Write something",
      };
      setError(err);
      return;
    }
    dispatch({
      type: ADD_TODO,
      payload: task,
    });
  };
  return (
    <div>
      <button onClick={handleReset}>Reset</button>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>+ Add</button>
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </div>
  );
};

export default AddToDo;

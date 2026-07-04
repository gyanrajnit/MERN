import React from "react";
import { useTodo } from "../context/ToDoContext";

const ToDoList = ({ count, handleReset }) => {
  const { state } = useTodo();
  console.log("ToDoList is rendered");

  return (
    <div>
      Parent has count value of {count}
      {state?.todos?.map((todo) => (
        <p>{todo.text}</p>
      ))}
    </div>
  );
};

export default React.memo(ToDoList);

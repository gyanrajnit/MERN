import React, { useCallback, useContext, useMemo, useState } from "react";
import AddToDo from "./components/AddToDo";
import { TodoContext } from "./context/ToDoContext";
import ToDoList from "./components/ToDoList";

// React.memo is used to memoize the component: When the component si  a UI heavy component (layout calculation)
// useCallback is used to memoize the function reference
// useMemo is used to memoize the value: When a function is a heavy function - expensive calcualtion

const ToDo = () => {
  const [count, setCount] = useState(0);
  console.log("ToDo is rendered");

  const handleReset = useCallback(() => {
    console.log("Reset is called");
    setCount(0);
  }, []);

  const heavyVal = useMemo(() => {
    console.log("heavyVal executedd");
    let counter = 0;
    for (let i = 0; i < 1000; i++) {
      counter = counter + i;
    }
    return counter;
  }, []);

  return (
    <div>
      <button onClick={() => setCount((prev) => --prev)}>-</button>
      {count}
      <button onClick={() => setCount((prev) => ++prev)}>+</button>
      <AddToDo handleReset={handleReset} />
      {/* <ToDoList count={count} /> */}
    </div>
  );
};

export default ToDo;

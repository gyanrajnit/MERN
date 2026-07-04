import React from "react";

const Card = ({ children }) => {
  //   const person = { name: "ABC", age: 20 };
  //   const { name, age } = person;

  const customUseState = (arg) => {
    let variable = arg;

    let setVariable = (newVal) => {
      variable = newVal;
      return variable;
    };
    return [variable, setVariable];
  };

  const [a, b] = customUseState();


  return (
    <div style={{ border: "1px solid black", borderRadius: "2px" }}>
      {children}
    </div>
  );
};

export default Card;

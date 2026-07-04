import React from "react";

const User = (props) => {
  const { name, age } = props;

  return (
    <div>
      {name} is {age} years old
    </div>
  );
};

export default User;

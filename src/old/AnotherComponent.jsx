import React, { useContext } from "react";
import { UserContext } from "../ToDo";

const AnotherComponent = ({ userName, setUserName }) => {
  const name = useContext(UserContext);

  return (
    <div>
      {userName}
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
    </div>
  );
};

export default AnotherComponent;

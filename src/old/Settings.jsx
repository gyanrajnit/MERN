import React, { useState } from "react";
import AnotherComponent from "./AnotherComponent";

const Settings = ({ userName, setUserName }) => {
  const [isShowDetails, setIsShowDetails] = useState(false);
  const handleDetails = () => {
    setIsShowDetails((prev) => !prev);
    };
  console.log("Settings rendered");
    

  return (
    <div>
      <button onClick={handleDetails}>
        {isShowDetails ? "Hide" : "Show"} user details
      </button>
      {isShowDetails ? (
        <AnotherComponent userName={userName} setUserName={setUserName} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Settings;

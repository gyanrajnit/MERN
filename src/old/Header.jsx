import React from "react";
import Menu from "./Menu";
import Settings from "./Settings";

const Header = ({ userName, setUserName }) => {
  console.log("Header rendered");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid black",
        padding: "12px",
      }}
    >
      <Menu />
      <Settings userName={userName} setUserName={setUserName} />
    </div>
  );
};

export default Header;

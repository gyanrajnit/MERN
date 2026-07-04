import React, { useContext } from "react";
import { ThemeContext } from "../ContextApi";

const MainWebiste = () => {
  const theme = useContext(ThemeContext);

  return <div>{theme == "light" ? "Light theme" : "Dark theme"}</div>;
};

export default MainWebiste;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./old/App.jsx";
import ToDo from "./ToDo.jsx";
import Debouncing from "./Debouncing.jsx";
import { TodoProvider } from "./context/ToDoContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("roots")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <TodoProvider>
      <ToDo />
    </TodoProvider> */}
    {/* <Debouncing/> */}
    <App />
  </StrictMode>,
);

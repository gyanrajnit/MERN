import { createBrowserRouter } from "react-router-dom";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import ToDo from "./pages/ToDo";

const router = createBrowserRouter([
  {
    path: "/",
    element: "Hi",
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/posts/:id",
    element: <PostDetail />,
  },
  {
    path: "/todos",
    element: <ToDo />,
  },
]);

export default router;

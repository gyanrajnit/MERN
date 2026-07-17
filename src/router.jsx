import { createBrowserRouter } from "react-router-dom";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import ToDo from "./pages/ToDo";
import Users from "./pages/Users";

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
  {
    path: "/users",
    element: <Users />,
  },
]);

export default router;

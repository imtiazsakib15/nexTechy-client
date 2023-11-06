import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import AddBlog from "../pages/AddBlog";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import AllBlogs from "../pages/AllBlogs";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/add-blog",
        element: <AddBlog />,
      },
      {
        path: "/all-blogs",
        element: <AllBlogs />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default Router;

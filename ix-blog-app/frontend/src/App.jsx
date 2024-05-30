import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../../frontend/src/components/pages/HomePage";
import BlogsPage from "../../frontend/src/components/pages/BlogsPage";
import BlogPage from "../../frontend/src/components/pages/BlogPage";

const routes = [
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/blogs/:categoryId?",
    element: <BlogsPage />,
  },
  {
    path: "/blog/:blogId",
    element: <BlogPage />,
  },
];
const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
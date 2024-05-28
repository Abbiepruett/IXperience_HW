import logo from './logo.svg';
import './App.css';
import HomePage from "./components/pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import BlogsPage from "./components/pages/BlogsPage";
import BlogPage from "./components/pages/BlogPage";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



const router = createBrowserRouter ([

  {
    path:"/",
    element:<HomePage/>,
  },
  {
    path:"/home",
    element: <HomePage/>, 
  },
  {
    path:"/blogs",
    element: <BlogsPage/>,
  },
  {
    path:"/blogs/1",
    element: <BlogPage/>,
  },


]);

function App() {
  return <RouterProvider router= {router}/>
}



export default App;

import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import MainLayout from "../Layouts/MainLayout";
import Installations from "../Pages/Installations";
import ErrorPage from "../Pages/ErrorPage";
import AppErrorPage from "../Pages/AppErrorPage";

 export const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout />,
    // errorElement:<ErrorPage></ErrorPage>,
    children:[{
    index:true,
    element:<Home />
  },
  {
    path:'/apps',
    element:<Apps />,
    errorElement:<AppErrorPage></AppErrorPage>,
  },
  {
    path:'/installations',
    element:<Installations />
  },
  {
    path:'*',
    element:<ErrorPage />
  }
    ]
  },
  
  
])

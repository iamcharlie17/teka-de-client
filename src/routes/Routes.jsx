import {
    createBrowserRouter
  } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MainLayout from "../LayOuts/MainLayout/MainLayout";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
            path: "/",
            element:<Login/>
        },
        {
            path: 'register',
            element: <Register/>
        }
      ]
    },
  ]);
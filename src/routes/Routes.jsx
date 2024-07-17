import {
    createBrowserRouter
  } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MainLayout from "../LayOuts/MainLayout/MainLayout";
import UserDashboard from "../pages/Dashboad/User/UserDashboard";
import UserFunctions from "../pages/Dashboad/User/UserFunctions/UserFunctions";
import AgentDashboard from "../pages/Dashboad/Agent/AgentDashboard";
import AgentFunctions from "../pages/Dashboad/Agent/AgentFunctions/AgentFunctions";
import AdminDashboard from "../pages/Dashboad/Admin/AdminDashboard";
import AdminFunctions from "../pages/Dashboad/Admin/AdminFunctions/AdminFunctions";
import UserManagement from "../pages/Dashboad/Admin/UserManagement/UserManagement";

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
        },
        {
            path: '/user/dashboard',
            element: <UserDashboard/>,
            children: [
                {
                    path: '/user/dashboard',
                    element: <UserFunctions/>
                }
            ]
        },
        {
            path: '/agent/dashboard',
            element: <AgentDashboard/>,
            children: [
                {
                    path: '/agent/dashboard',
                    element: <AgentFunctions/>
                }
            ]
        },
        {
            path: '/admin/dashboard',
            element: <AdminDashboard/>,
            children: [
                {
                    path: '/admin/dashboard',
                    element: <AdminFunctions/>
                },
                {
                    path: '/admin/dashboard/user-management',
                    element: <UserManagement/>
                }
            ]
        }
      ]
    },
  ]);
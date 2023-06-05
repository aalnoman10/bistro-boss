import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/Shop/Shop";
import Login from "../pages/Login/Login/Login";
import Resister from "../pages/Login/Resister/Resister";
import Dashboard from "../Layout/Dashboard";
import DashboardHome from "../pages/Daseboad/DashboardHome/DashboardHome";
import DashboardCarts from "../pages/Daseboad/DashboardCarts/DashboardCarts";
import PrivateRoutes from "./PrivateRoutes";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: '/shop',
        element: <Shop></Shop>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/resister',
        element: <Resister></Resister>
      },
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
    children: [
      {
        path: '/dashboard',
        element: <DashboardHome />
      },
      {
        path: '/dashboard/cart',
        element: <DashboardCarts />
      },
    ]
  }
]);
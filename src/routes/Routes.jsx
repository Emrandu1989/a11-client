import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOuts/MainLayOut";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

import AddFood from "../pages/AddFood/AddFood";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut/>,
      errorElement: <ErrorPage/>,
      children:[
          {
            path:'/',
            element:<Home />
          },
          {
            path:'/login',
            element:<Login />
          },
          {
            path:'/register',
            element:<Register />
          },
          {
            path:'/addFood',
            element:<PrivateRoute> <AddFood /> </PrivateRoute>
          },
      
      ]
    },
  ]);

  export default router
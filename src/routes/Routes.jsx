import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOuts/MainLayOut";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

import AddFood from "../pages/AddFood/AddFood";
import PrivateRoute from "./PrivateRoute";
import AvailableFoods from "../pages/AvailableFoods/AvailableFoods";
import FoodDetails from "../components/FoodDetails/FoodDetails";


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
            path:'/availableFoods',
            element:<AvailableFoods />,
            loader:()=> fetch(`${import.meta.env.VITE_API_URL}/foods`)
          },
          {
            path:'/details/:id',
            element:<FoodDetails />,
            loader:({params})=> fetch(`${import.meta.env.VITE_API_URL}/foods/${params.id}`)
          },
          {
            path:'/addFood',
            element:<PrivateRoute> <AddFood /> </PrivateRoute>
          },
      
      ]
    },
  ]);

  export default router
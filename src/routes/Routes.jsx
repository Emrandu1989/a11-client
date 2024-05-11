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
import ManageMyFoods from "../pages/ManageMyFoods/ManageMyFoods";
import UpdatePage from "../pages/UpdatePage/UpdatePage";
import RequestedFood from "../pages/RequestedFood/RequestedFood";


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
            path:'/manageMyFood',
            element: <PrivateRoute> <ManageMyFoods />  </PrivateRoute>
            
          },
          {
            path:'/details/:id',
            element: <PrivateRoute> <FoodDetails /> </PrivateRoute> ,
            loader:({params})=> fetch(`${import.meta.env.VITE_API_URL}/foods/${params.id}`)
          },
          {
            path:'/updateFood/:id',
            element:<UpdatePage />,
            loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/foods/${params.id}`)
          },
          {
            path:'/addFood',
            element:<PrivateRoute> <AddFood /> </PrivateRoute>
          },
          {
            path:'/requestedFood',
            element:<PrivateRoute> <RequestedFood /> </PrivateRoute>
          },
      
      ]
    },
  ]);

  export default router
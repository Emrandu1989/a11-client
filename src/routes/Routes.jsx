import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOuts/MainLayOut";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


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
      ]
    },
  ]);

  export default router
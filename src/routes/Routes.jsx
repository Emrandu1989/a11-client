import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOuts/MainLayOut";
import Home from "../pages/Home/Home/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut/>,
      children:[
          {
            path:'/',
            element:<Home />
          }
      ]
    },
  ]);

  export default router
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx/NavBar";


const MainLayOut = () => {
    return (
        <div>
              <NavBar />
              <Outlet/>
        </div>
    );
};

export default MainLayOut;
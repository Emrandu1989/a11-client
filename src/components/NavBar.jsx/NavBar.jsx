import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.avif'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const NavBar = () => {
   const {user,logOut} = useContext(AuthContext)
   const handleLogOut = () =>{
         logOut()
   }
      const navItems = <>
            <li className="mr-5"> <NavLink to='/'>Home</NavLink>  </li>
            <li className="mr-5"> <NavLink to='/addFood'>Add  Food</NavLink>  </li>
            <li className="mr-5"> <NavLink to='/availableFoods'>Available Foods</NavLink>  </li>
            <li className="mr-5"> <NavLink to='/manageMyFood'>MangeMyFood</NavLink>  </li>
            <li className="mr-5"> <NavLink to='/requestedFood'>MyRequestFood</NavLink>  </li>
              {
                user ? <button className="bg-gray-600 px-3 rounded-xl text-white" onClick={handleLogOut}>LogOut</button> : <> 
                        <li> <NavLink to='/login'>Login</NavLink>  </li>
                     <li> <NavLink to='/register'>Register</NavLink>  </li>
                </>
              }
          
      </>


    return (
        <>
           <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      
              {navItems}
      </ul>
    </div>
    <Link className=" bg-green-100 p-2 pr-8 rounded-xl flex justify-center items-center lg:p-2 text-xl">
        <img className="w-[80px] ml-5 rounded-full" src={logo} alt="" />
         <span className="ml-6">Epicurean Arena</span>
         </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {navItems}
    </ul>
  </div>
  <div className="navbar-end">
      {/* {
         user && <span className="font-bold">{user.email}</span>
      } */}
      {
         user ?  <img title={user.displayName} className="rounded-xl w-[80px] ml-2" src={user?.photoURL} alt="" /> : ""
      }
  </div>
</div> 
        </>
    );
};

export default NavBar;
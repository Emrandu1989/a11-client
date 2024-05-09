import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.avif'

const NavBar = () => {
      const navItems = <>
            <li> <NavLink to='/'>Home</NavLink>  </li>
            <li> <NavLink to='/login'>Login</NavLink>  </li>
            <li> <NavLink to='/register'>Register</NavLink>  </li>
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
    <Link className=" bg-green-100 rounded-xl flex justify-center items-center p-2 text-xl">
        <img className="w-[80px] rounded-full" src={logo} alt="" />
        Epicurean Arena</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    <Link className="btn">Button</Link>
  </div>
</div> 
        </>
    );
};

export default NavBar;
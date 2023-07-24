
import { NavLink } from "react-router-dom";
import {useContext}from 'react'
import Login from "../Login/Login";
import NavList from "./NavItem/NavList";
import { AuthContext } from "../AuthPorvider/AuthProvider";
import { FaLaughWink } from "react-icons/fa";

const Header = () => {
  const { user, LogOutUser } = useContext(AuthContext);

  const handleLogout = () => { 
    LogOutUser()
      .then(() => {
       alert('logged out successfully')
    })
  }
  return (
    <div className="navbar bg-gradient-to-r from-indigo-400 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavList></NavList>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl uppercase">
          Best <span className="text-pink-500"> Of </span> Best
        </a>
      </div>
      <div className="navbar-center hidden lg:flex text-white">
        <ul className="menu menu-horizontal px-1 uppercase font-serif font-bold">
          <NavList></NavList>
        </ul>

        <div className="Authentication ml-18 ">
          <ul className="md:flex justify-center gap-5 uppercase font-serif font-bold items-center">
            {user ? (
              <>
                <button onClick={handleLogout} className="btn btn-sm">
                  Logout
                </button>
              </>
            ) : (
              <>
                <li>
                  <NavLink to={"/login"}>Login</NavLink>
                </li>
                <li>
                  <NavLink to={"/SignUp"}>SignUp</NavLink>
                </li>
              </>
            )}
            {user && (
              <>
                <li>
                  <NavLink to={"/Profile"}>
                    <FaLaughWink className="w-10 h-10 text-black"></FaLaughWink>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
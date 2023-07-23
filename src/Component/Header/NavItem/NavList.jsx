import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthPorvider/AuthProvider';

const NavList = () => {
  const {user}=useContext(AuthContext)
  return (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <li>
        <NavLink to={"/college"}> College </NavLink>
      </li>
      <li>
        <NavLink to={"/Admission"}> Admission </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/MyCollege"}> My College </NavLink>
          </li>
        </>
      )}
    </>
  );
};

export default NavList;
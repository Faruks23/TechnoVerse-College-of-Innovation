import React from 'react';
import { NavLink } from 'react-router-dom';

const NavList = () => {
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
      <li>
        <NavLink to={"/MyCollege"}> My College </NavLink>
      </li>
    </>
  );
};

export default NavList;
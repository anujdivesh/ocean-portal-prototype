import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/pop'>
        </NavLink>
        <NavLink to='/pop' style={{color:"white", fontWeight:"bold", fontSize:"20px"}}>
          Tuvalu Inundation
        </NavLink>
        <NavMenu>
          <NavLink to='/pop/home'>
            Inundation
          </NavLink>
          <NavLink to='/pop/services'>
            Shoreline
          </NavLink>
          <NavLink to='/pop/contact-us'>
            Risks
          </NavLink>
          <NavLink to='/pop/sign-up'>
            Sign Up
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;

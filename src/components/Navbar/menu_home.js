import React from 'react';
import {
  NavLink,
} from './NavbarElements';

const MenuHome = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark" style={{"backgroundColor":"#003366"}}>
            <div className="container-fluid">

        <img src={require("./cos2.png")} style={{width:"70px", height:"40px"}} alt="cosppac logo"/>

        <img src={require("./spx.png")} style={{width:"70px", height:"40px"}} alt="cosppac logo"/>

        <img src={require("./ausaid2.png")} style={{width:"70px", height:"40px"}} alt="cosppac logo"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
               
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                        <NavLink to='/pop/services' className="nav-link">
            Home
          </NavLink></li>
                        <li className="nav-item">
                        <NavLink to='/pop/product' className="nav-link">
            Ocean Monitoring
          </NavLink>
          </li>
          <li className="nav-item"><a className="nav-link" href="#!">Coral Reefs</a></li>
          <li className="nav-item"><a className="nav-link" href="#!">Sea Level</a></li>
          <li className="nav-item"><a className="nav-link" href="#!">Fisheries</a></li>
          <li className="nav-item"><a className="nav-link" href="#!">Shipping</a></li>
          <li className="nav-item"><a className="nav-link" href="#!">Library</a></li>
          <li className="nav-item"><a className="nav-link" href="#!">Pacific Tides</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  );
};

export default MenuHome;

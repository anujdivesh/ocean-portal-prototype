import React from 'react';
import {
  NavLink,
} from './NavbarElements';

const Menu = () => {
  const activateLasers = (e) => {
    console.log('Anuj')
            e.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
            e.currentTarget.blur()
  }
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark" style={{"backgroundColor":"#003366"}}>
            <div className="container-fluid">
                <button className="btn btn-primary" style={{"backgroundColor":"#003366"}} id="sidebarToggle" onClick={activateLasers}><span className="navbar-toggler-icon"></span></button>
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

export default Menu;

import React, { Fragment } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss'


function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
  <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light">
        <NavLink className="navbar-brand navbar-title" exact to="/"> ⚽️  Youth Sports Society</NavLink>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
          aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className= {`${isNavCollapsed ? 'collapse' : ''} navbar-collapse nav justify-content-end`} id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" exact to="/">HOME</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">ABOUT</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sports">SPORTS</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/health">HEALTH</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/character">CHARACTER</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/volunteer">VOLUNTEER</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">CONTACT US</NavLink>
            </li>
          </ul>
        </div>
      </nav>
  </Fragment>
  )
}

export default Navbar;
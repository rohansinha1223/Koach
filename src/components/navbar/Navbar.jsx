import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="koach__navbar">
      <div className="koach__navbar-links">
        <div className="koach__navbar-links_container">
       
          <p><Link to="/" style={{ color: '#000', textDecoration: 'none' }}>Home</Link></p>
          <p><Link to="/about" style={{ color: '#000', textDecoration: 'none' }}>About</Link></p>
        </div>
      </div>
      <div className="koach__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="koach__navbar-menu_container scale-up-center">
            <div className="koach__navbar-menu_container-links">
              <p><Link to="/" style={{ color: '#000' }}>Home</Link></p>
              <p><Link to="/about" style={{ color: '#000', textDecoration: 'none' }}>About</Link></p>
            </div>
            <div className="koach__navbar-menu_container-links-sign">
              <a href="https://register.capturepoint.com/reg/login.cfm?cuBIB%2F%2FClZwtomy3Erh3n%2B7brRVPXoxk9V2eh8RP2faSwM5QkImp%2FfA%3D">
                <button type="button">Pay Dues</button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

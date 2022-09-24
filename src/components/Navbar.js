import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../images/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener('scroll', changeBackground)

  return (
    <nav className={nav ? 'nav active' : 'nav'}>
      <Link to="main" className="logo">
        <img src={logo} alt="" />
      </Link>
      <input className='menu-btn' type='checkbox' id='menu-btn'/>
      <label className='menu-icon' for='menu-btn'>
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li><Link to="#">HOME</Link></li>
        <li><Link to="#">MENU</Link></li>
        <li><Link to="#">OUR STORY</Link></li>
        <li><Link to="#">CONTACT US</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

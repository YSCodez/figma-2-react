import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="Navbar">
      <ul className="Navbar-list">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="/login">Sign In/Sign Up</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

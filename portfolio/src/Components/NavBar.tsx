// src/components/NavBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
// import Logo from '../path/to/your/logo.png'; // Replace with the path to your logo
import '../NavBar.css'; // Import the styles

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          {/* <img src="https://placehold.co/400" alt="Logo" className="logo" /> */}
          <h1>JP</h1>
        </div>
        <div className="navbar-right">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

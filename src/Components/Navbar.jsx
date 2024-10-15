import React from 'react';
import { nav } from './Data'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {nav.map((item, index) => (
          <li key={index} className="navbar-item">
            <a href={item.path} className="navbar-link">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

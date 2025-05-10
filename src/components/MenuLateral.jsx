import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUserAlt, FaPaintBrush, FaMoon, FaSun } from 'react-icons/fa';
import './MenuLateral.css';

function MenuLateral({ toggleTheme }) {
  return (
    <aside className="menu-lateral">
      <ul>
        <li><NavLink to="/" className="menu-link"><FaHome className="icon" /> Início</NavLink></li>
        <li><NavLink to="/sobre" className="menu-link"><FaUserAlt className="icon" /> Sobre</NavLink></li>
        <li><NavLink to="/artes" className="menu-link"><FaPaintBrush className="icon" /> Artes</NavLink></li>
      </ul>
      <button className="theme-toggle" onClick={toggleTheme}>
        <FaMoon className="icon moon" />
        <FaSun className="icon sun" />
      </button>
    </aside>
  );
}

export default MenuLateral;
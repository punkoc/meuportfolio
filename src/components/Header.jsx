// src/components/Header.jsx
import React from 'react';
import '../App.css';
import './Header.css';


function Header() {
  return (
    <h1 className="titulo-portfolio">
      <span className="titulo-portfolio-parte1">Portfólio<br /></span>
      <span className="titulo-portfolio-parte2">Bruno Ferreira</span>
    </h1>
  );
}

export default Header;
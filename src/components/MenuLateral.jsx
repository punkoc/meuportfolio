import React from 'react';
import './MenuLateral.css';

const MenuLateral = () => {
  return (
    <aside className="menu-lateral">
      <div className="menu-topo">
        <h2 style={{ fontSize: '20px', margin: 0 }}>Menu</h2>
      </div>

      <ul>
        <li>Início</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
    </aside>
  );
};

export default MenuLateral;
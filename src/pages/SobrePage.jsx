import React from 'react';
import MenuLateral from '../components/MenuLateral';
import Header from '../components/Header';
import '../App.css';

function SobrePage() {
  return (
    <div className="pagina-central">
      <div className="layout">
        <MenuLateral />
        <div className="conteudo">
          <Header />
          <div className="resumo">
            <h2>Sobre mim</h2>
            <p>
              Essa é a página sobre. Aqui você pode falar sobre sua trajetória, interesses, experiências e o que mais quiser destacar sobre você ou seu trabalho.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobrePage;
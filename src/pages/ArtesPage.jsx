import React from 'react';
import MenuLateral from '../components/MenuLateral';
import Header from '../components/Header';
import '../App.css';

function ArtesPage() {
  return (
    <div className="pagina-central">
      <div className="layout">
        <MenuLateral />
        <div className="conteudo">
          <Header />
          <div className="resumo">
            <h2>Artes em geral</h2>
            <p>
              Aqui você pode compartilhar suas criações visuais — como ilustrações, capas de livros, cartazes e outros projetos autorais. É um espaço para mostrar a interseção entre arte e tecnologia no seu portfólio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtesPage;
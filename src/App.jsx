import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './App.css';
import MenuLateral from './components/MenuLateral';
import Header from './components/Header';

const totalImagens = 6; // Altere para o número total que você tiver

const imagens = Array.from({ length: totalImagens }, (_, i) => 
  `/images/foto${i + 1}.jpg`
);

const items = imagens.map((src, i) => (
  <img src={src} className="carousel-img" key={i} alt={`img-${i}`} />
));

function App() {
  return (
    <div className="pagina-central">
      <div className="layout">
        <MenuLateral />

        <div className="conteudo">
<Header />



          <div className="carousel">
            <AliceCarousel
              items={items}
              autoPlay
              infinite
              disableButtonsControls
              disableDotsControls
              autoPlayInterval={1000}
            />
          </div>

          <div className="resumo">
            <h2>Resumo</h2>
            <p>
              Olá! Sou Bruno Ferreira, natural de Atibaia-SP e formado em Análise e Desenvolvimento de Sistemas pelo Instituto Federal — um entusiasta da tecnologia que encontrou na programação uma forma de criar, resolver e transformar ideias em experiências reais. Meu universo gira entre linhas de código, traços de arte, boas leituras e trilhas sonoras que embalam meu processo criativo.

Tenho orgulho de ter desenvolvido do zero um site em ReactJS para um coletivo de escritores da minha cidade, onde pude mergulhar em conceitos fundamentais como React Router, componentização, SEO, integração com Google Analytics e toda a estrutura necessária para publicar e manter um site moderno e responsivo no ar. Essa experiência foi além da parte técnica: envolveu empatia, colaboração e sensibilidade para criar algo que representasse o coletivo de forma autêntica.

Além disso, levei minha paixão por tecnologia ao dia a dia criando um aplicativo mobile em React Native focado no controle de consumo de água, com funcionalidades como registro por horário, persistência de dados local e uma interface simples, funcional e intuitiva — feito especialmente para atender às minhas próprias necessidades de bem-estar e disciplina pessoal.

Mas nem só de códigos vive minha trajetória: sou também apaixonado por arte e design. Desde cedo desenvolvo projetos visuais com dedicação. Já criei capas de livros independentes, cartazes para eventos culturais, ilustrações autorais e exploro diversas linguagens visuais, sempre buscando equilíbrio entre estética e propósito.

Acredito que a tecnologia e a arte não são mundos separados, mas sim universos complementares — e é nessa interseção que me encontro. Estou sempre em busca de novos desafios, projetos que provoquem minha criatividade e me façam crescer como desenvolvedor, artista e ser humano.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

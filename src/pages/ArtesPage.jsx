import React, { useState, useEffect } from 'react';
import MenuLateral from '../components/MenuLateral';
import Header from '../components/Header';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../App.css';
import './ArtesPage.css';

function ArtesPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState('next');
  const imagesPerPage = 6; // Número de imagens por página

  const images = [
    '/images/artespage/foto1.jpg',
    '/images/artespage/foto2.jpg',
    '/images/artespage/foto3.jpg',
    '/images/artespage/foto4.jpg',
    '/images/artespage/foto5.jpg',
    '/images/artespage/foto6.jpg',
    '/images/artespage/chico buarque colorido png.png',
    '/images/artespage/chico buarque c nome.jpg',
    '/images/artespage/Maria Bethania com nome.jpg',
    '/images/artespage/CARTOLA 2.jpg',
    '/images/artespage/color belchior 2.jpg',
    '/images/artespage/museu menor tamanho.jpg',
    '/images/artespage/museu menor tamanho 2.jpg'
  ];

  const totalPages = Math.ceil(images.length / imagesPerPage);
  
  const handleNextPage = () => {
    if (!isSliding) {
      setSlideDirection('next');
      setIsSliding(true);
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }
  };

  const handlePrevPage = () => {
    if (!isSliding) {
      setSlideDirection('prev');
      setIsSliding(true);
      setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    }
  };

  useEffect(() => {
    if (isSliding) {
      const timer = setTimeout(() => {
        setIsSliding(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isSliding]);

  const currentImages = images.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage
  );

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const getGridStyle = () => {
    if (!isSliding) return {};
    const translateValue = slideDirection === 'next' ? '-100%' : '100%';
    return {
      transform: `translateX(${translateValue})`,
    };
  };

  return (
    <div className="pagina-central">
      <div className="layout">
        <MenuLateral />
        <div className="conteudo">
          <Header />
          <div className="content-wrapper">
            <div className="resumo">
              <h2>Artes em geral</h2>
              <p>
                Aqui você pode compartilhar suas criações visuais — como ilustrações, capas de livros, cartazes e outros projetos autorais. É um espaço para mostrar a interseção entre arte e tecnologia no seu portfólio.
              </p>
            </div>
            <div className="gallery-container">
              <button 
                className="gallery-nav prev"
                onClick={handlePrevPage}
                disabled={isSliding || currentPage === 0}
              >
                <FaChevronLeft />
              </button>
              
              <div 
                className={`gallery-grid ${isSliding ? 'sliding' : ''}`}
                style={getGridStyle()}
              >
                {currentImages.map((image, index) => (
                  <div 
                    key={`${currentPage}-${index}`}
                    className="gallery-item"
                    onClick={() => handleImageClick(image)}
                  >
                    <img src={image} alt={`Arte ${index + 1}`} />
                  </div>
                ))}
              </div>

              <button 
                className="gallery-nav next"
                onClick={handleNextPage}
                disabled={isSliding || currentPage === totalPages - 1}
              >
                <FaChevronRight />
              </button>
            </div>

            <div className="gallery-pagination">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  className={`page-dot ${currentPage === index ? 'active' : ''}`}
                  onClick={() => !isSliding && setCurrentPage(index)}
                  disabled={isSliding}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <img src={selectedImage} alt="Imagem ampliada" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ArtesPage;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Sobre from './pages/SobrePage';
import Artes from './pages/ArtesPage';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/artes" element={<Artes />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
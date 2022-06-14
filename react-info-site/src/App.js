import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header.js';
import MainContent from './components/MainContent.js';
import Footer from './components/Footer.js';

function App() {
  return (
  <div>
    <Header />
    <MainContent />
    <Footer />
  </div>
  )
}

export default App
import React from 'react';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import GamePage from './components/pages/game/GamePage';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <GamePage />
      <Footer />
    </>
  );
};

export default App;

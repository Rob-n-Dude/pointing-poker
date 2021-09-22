import React from 'react';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Score from './components/pages/score/Score';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Score />
      <Footer />
    </>
  );
};

export default App;

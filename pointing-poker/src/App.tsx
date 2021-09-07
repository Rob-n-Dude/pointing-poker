import React from 'react';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
// import Greeting from './components/pages/greeting/Greeting';
import Lobby from './components/pages/lobby/Lobby';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Lobby />
      <Footer />
    </>
  );
};

export default App;

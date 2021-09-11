import React from 'react';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Timer from './components/timer/Timer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Timer secondsTotal={500} isStarted />
      <Footer />
    </>
  );
};

export default App;

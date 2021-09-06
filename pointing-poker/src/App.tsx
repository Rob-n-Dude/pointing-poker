import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Greeting from './components/pages/greeting/Greeting';
import Footer from './components/footer/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Greeting />
      <Footer />
    </>
  );
};

export default App;

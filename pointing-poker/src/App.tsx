import React from 'react';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Chat from './components/chat/Chat';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Chat />
      <Footer />
    </>
  );
};

export default App;

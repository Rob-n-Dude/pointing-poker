import React from 'react';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import KickPlayer from './components/popup/kickPlayer/KickPlayer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <KickPlayer user={{ name: 'Jon Sina' }} />
      <Footer />
    </>
  );
};

export default App;

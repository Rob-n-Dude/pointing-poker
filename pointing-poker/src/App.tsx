import React from 'react';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Lobby from './components/pages/lobby/Lobby';
import { TUserInfo, UserRole } from './shared/types';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Lobby user={{ role: UserRole.dealer } as TUserInfo} />
      <Footer />
    </>
  );
};

export default App;

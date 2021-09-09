import React from 'react';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ConnectPopUp from './components/popup/ConnectPopUp/ConnectPopUp';
import PopUp from './components/popup/PopUp';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <PopUp content={ConnectPopUp} negativeAction={() => {}} positiveAction={() => {}} />
      <Footer />
    </>
  );
};

export default App;

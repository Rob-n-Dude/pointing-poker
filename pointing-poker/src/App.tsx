import React from 'react';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import CreateIssue from './components/popup/createIssue/CreateIssue';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <CreateIssue />
      <Footer />
    </>
  );
};

export default App;

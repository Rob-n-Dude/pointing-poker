import React from 'react';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import CreateIssue from './components/popup/createIssue/CreateIssue';
// import KickPlayer from './components/popup/kickPlayer/KickPlayer';
import PopUp from './components/popup/PopUp';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <PopUp negativeAction={() => {}} positiveAction={() => {}} content={CreateIssue} />
      {/* <PopUp content={<KickPlayer user={{ name: 'Jon Sina' }} />} /> */}
      <Footer />
    </>
  );
};

export default App;

import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import GamePage from './components/pages/game/GamePage';
import Greeting from './components/pages/greeting/Greeting';
import Lobby from './components/pages/lobby/Lobby';
import Results from './components/pages/results/Results';
import { TUserInfo } from './shared/types';

const App: React.FC = () => {
  const [isChat, setIsChat] = useState(false);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header setChat={setIsChat} />
            <Greeting />
            <Footer />
          </Route>
          <Route exact path="/lobby">
            <Header setChat={setIsChat} />
            <Lobby user={{} as TUserInfo} isChat={isChat} />
            <Footer />
          </Route>
          <Route exact path="/game">
            <Header setChat={setIsChat} />
            <GamePage isChat={isChat} />
            <Footer />
          </Route>
          <Route exact path="/results">
            <Header setChat={setIsChat} />
            <Results />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;

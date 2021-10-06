import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Greeting from './components/pages/greeting/Greeting';
import Lobby from './components/pages/lobby/Lobby';
import { TUserInfo } from './shared/types';
import GamePage from './components/pages/game/GamePage';
import Results from './components/pages/results/Results';

const App: React.FC = () => {
  const [isChat, setIsChat] = useState(false);

  return (
    <>
      <Router>
        <Header setChat={setIsChat} />
        <Switch>
          <Route exact path="/">
            <Greeting />
          </Route>
          <Route exact path="/lobby">
            <Lobby user={{} as TUserInfo} isChat={isChat} />
          </Route>
          <Route exact path="/game">
            <GamePage isChat={isChat} />
          </Route>
          <Route exact path="/results">
            <Results />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;

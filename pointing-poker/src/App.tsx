import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Greeting from './components/pages/greeting/Greeting';
import Lobby from './components/pages/lobby/Lobby';
import GamePage from './components/pages/game/GamePage';
import Results from './components/pages/results/Results';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Greeting />
          </Route>
          <Route exact path="/lobby">
            <Lobby />
          </Route>
          <Route exact path="/game">
            <GamePage />
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

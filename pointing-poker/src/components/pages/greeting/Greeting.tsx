import React, { useEffect } from 'react';
import './Greeting.scss';
import Button from '../../button/Button';
import ButtonStyles from '../../../shared/ButtonStyles';

const Greeting: React.FC = (): JSX.Element => {
  useEffect(() => {
    setTimeout(() => {
      window.alert('Sorry mi vsio prosraly');
    }, 400);
  }, []);
  return (
    <main className="main">
      <div className="container main-content">
        <div className="head">
          <div className="head-img">
            <img src="./img/cards.png" alt="Cards" className="img-pic" />
          </div>
          <div className="head-text">
            <p className="desc">Poker</p>
            <h1 className="title">Planning</h1>
          </div>
          <div className="line">
            <hr />
          </div>
        </div>
        <div className="start-container">
          <h2 className="start-title">Start your planning:</h2>
          <div className="start">
            <p className="create">Create session:</p>
            <a href="#/lobby">
              <Button textContent="Start new game" action={() => {}} styles={ButtonStyles.default} />
            </a>
          </div>
          <p className="start-title or">OR:</p>
          <p className="connect">
            Connect to lobby by <span className="url">URL:</span>
          </p>
          <div className="connect-input">
            <input className="input" type="text" placeholder="URL" />
            <a href="#/game">
              <Button textContent="Connect" action={() => {}} styles={ButtonStyles.default} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Greeting;

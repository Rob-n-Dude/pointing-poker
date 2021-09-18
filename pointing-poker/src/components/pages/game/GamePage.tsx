import React, { FC } from 'react';
import './gamePage.scss';
import GamePageRoundView from './GamePageRoundView';
import GamePageControls from './GamePageControls';
import GamePageHead from './GamePageHead';

const GamePage: FC = () => {
  // из редакса необходима только тайтл

  return (
    <div className="container">
      <p className="game-page_title">Title</p>
      <GamePageHead />
      <div className="game-page-round_wrapper">
        <GamePageRoundView />
        <GamePageControls />
      </div>
    </div>
  );
};

export default GamePage;

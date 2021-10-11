import React, { FC } from 'react';
import './gamePage.scss';
import GamePageRoundView from './GamePageRoundView';
import GamePageControls from './GamePageControls';
import GamePageHead from './GamePageHead';
import SideBar from '../../sideBar/SideBar';

const GamePage: FC = () => {
  // из редакса необходима только тайтл

  return (
    <div className="content">
      <div className="container">
        <p className="game-page_title">Title</p>
        <GamePageHead />
        <div className="game-page-round_wrapper">
          <GamePageRoundView />
          <GamePageControls />
        </div>
      </div>
      <SideBar />
    </div>
  );
};

export default GamePage;

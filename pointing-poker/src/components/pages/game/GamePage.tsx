import React, { FC } from 'react';
import './gamePage.scss';
import GamePageRoundView from './GamePageRoundView';
import GamePageControls from './GamePageControls';
import GamePageHead from './GamePageHead';
import SideBar from '../../sideBar/SideBar';
import Chat from '../../chat/Chat';

interface IGamePage {
  isChat: boolean;
}

const GamePage: FC<IGamePage> = ({ isChat }) => {
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
      {isChat && <Chat />}
      <SideBar />
    </div>
  );
};

export default GamePage;

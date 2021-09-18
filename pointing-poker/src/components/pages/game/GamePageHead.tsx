import React, { useState, FC } from 'react';
import ButtonStyles from '../../../shared/ButtonStyles';
import { TUserInfo, UserRole } from '../../../shared/types';
import Button from '../../button/Button';
import { IIssueInfo } from '../../issue-card/IssueCard';
import LobbyMasterCard from '../../member-card/LobbyMasterCard';
import Timer from '../../timer/Timer';

const GamePageHead: FC = () => {
  // UseState будет заменен на юз селект из редакс
  // нужны селекторы на роль пользователя, инфу по лобби мастеру и гейм сеттингс

  const [gamePageInfo] = useState({
    title: 'Sprint tittle',
    master: { role: UserRole.dealer } as TUserInfo,
    you: { role: UserRole.observer } as TUserInfo,
    players: [] as TUserInfo[],
    issueList: [] as IIssueInfo[],
    gameSettings: {
      timer: 200,
      isRoundStarted: false,
    },
  });

  return (
    <div className="game-page-head">
      <LobbyMasterCard info={gamePageInfo.master} />
      {gamePageInfo.you.role === UserRole.dealer ? (
        <Button action={() => {}} styles={ButtonStyles.white} textContent="Stop game" /> // If you are dealer
      ) : (
        <>
          {/* if you are not a dealer */}
          <Timer secondsTotal={gamePageInfo.gameSettings.timer} isStarted={gamePageInfo.gameSettings.isRoundStarted} />
          <Button action={() => {}} styles={ButtonStyles.white} textContent="Exit game" />
        </>
      )}
    </div>
  );
};

export default GamePageHead;

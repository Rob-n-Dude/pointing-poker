import React, { FC, useState } from 'react';
import ButtonStyles from '../../../shared/ButtonStyles';
import { defaultCardValues } from '../../../shared/cardAmounts';
import { TUserInfo, UserRole } from '../../../shared/types';
import Button from '../../button/Button';
import { IIssueInfo } from '../../issue-card/IssueCard';
import Timer from '../../timer/Timer';
import SettingsCard from '../lobby/lobbySettings/gameCard/SettingsCard';

const GamePageControls: FC = () => {
  // нужны селекторы на роль пользователя, инфу по лобби мастеру и гейм сеттингс
  // UseState будет заменен на юз селект из редакс

  const [gamePageInfo] = useState({
    title: 'Sprint tittle',
    master: { role: UserRole.dealer } as TUserInfo,
    you: { role: UserRole.dealer } as TUserInfo,
    players: [] as TUserInfo[],
    issueList: [] as IIssueInfo[],
    gameSettings: {
      timer: 200,
      isRoundStarted: false,
    },
  });

  const showCards = () => {
    // вместо defaultCardValues получить значение каточек с сервера или из редакс
    return defaultCardValues.fibonacci.map((card) => <SettingsCard value={card} key={card} />);
  };

  return gamePageInfo.you.role === UserRole.dealer ? (
    <div className="game-page-controls">
      <Timer secondsTotal={gamePageInfo.gameSettings.timer} isStarted={gamePageInfo.gameSettings.isRoundStarted} />
      <div className="game-page-controls-buttons">
        <Button action={() => {}} textContent="Restart Rount" styles={ButtonStyles.default} />
        <Button action={() => {}} textContent="Next Issue" styles={ButtonStyles.default} />
      </div>
    </div>
  ) : (
    <div className="game-page-controls-vote_panel">{showCards()}</div>
  );
};

export default GamePageControls;

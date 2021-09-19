import React, { useState, FC } from 'react';
import { TUserInfo, UserRole } from '../../../shared/types';
import IssueCard, { IIssueInfo } from '../../issue-card/IssueCard';
import NewIssueCard from '../../issue-card/newIssueCard';

const GamePageRoundView: FC = () => {
  // UseState будет заменен на юз селект из редакс

  const [gamePageInfo] = useState({
    title: 'Sprint tittle',
    master: { role: UserRole.dealer } as TUserInfo,
    you: { role: UserRole.dealer } as TUserInfo,
    players: [] as TUserInfo[],
    issueList: [
      { name: '1', priority: 'low' },
      { name: '2', priority: 'low' },
      { name: '3', priority: 'low' },
    ] as IIssueInfo[],
    gameSettings: {
      timer: 200,
      isRoundStarted: false,
    },
    roundInfo: [{ name: '1', avg: '15' }],
  });

  const showIssues = () => {
    return gamePageInfo.issueList.map((issue) => <IssueCard info={issue} key={issue.name} />);
  };

  const showStats = (): JSX.Element | null => {
    if (!gamePageInfo.gameSettings.isRoundStarted && gamePageInfo.you.role === UserRole.dealer) {
      return <div className="game-page-round-view_stats">Average: {gamePageInfo.roundInfo[0].avg}</div>;
    }
    return null;
  };

  return (
    <div className="game-page-round-view">
      <div className="game-page-round-view_issues">
        Issues:
        {showIssues()}
        {gamePageInfo.you.role === UserRole.dealer && <NewIssueCard action={() => {}} />}
      </div>
      {showStats()}
    </div>
  );
};

export default GamePageRoundView;

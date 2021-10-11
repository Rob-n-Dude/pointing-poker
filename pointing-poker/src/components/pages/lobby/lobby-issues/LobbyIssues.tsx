import React from 'react';
import NewIssueCard from '../../../issue-card/newIssueCard';
import './lobbyIssues.scss';

const LobbyIssues: React.FC = (): JSX.Element => {
  return (
    <div className="issues">
      <NewIssueCard action={() => {}} />
      {/* Тут будет массив ишюс, который мы будем отображать на страницу */}
    </div>
  );
};

export default LobbyIssues;

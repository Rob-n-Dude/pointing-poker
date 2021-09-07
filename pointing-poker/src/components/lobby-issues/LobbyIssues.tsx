import React from 'react';
import IssueCard, { IIssueCard } from '../issue-card/IssueCard';
import NewIssueCard from '../issue-card/newIssueCard';
import './lobbyIssues.scss';

const LobbyIssues: React.FC = (): JSX.Element => {
  const allIssues: IIssueCard[] = [{ info: { name: 'issue1', priority: 'low' } }];
  const issuesToShow = allIssues.map((issue) => <IssueCard info={issue.info} key={issue.info.name} />);
  return (
    <div className="issues">
      <NewIssueCard action={() => {}} />
      {issuesToShow}
    </div>
  );
};

export default LobbyIssues;

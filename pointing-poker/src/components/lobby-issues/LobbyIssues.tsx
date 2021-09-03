import React from 'react';
import { IIssueCard } from '../issue-card/IssueCard';
import NewIssueCard from '../issue-card/newIssueCard';

const LobbyIssues: React.FC = (): JSX.Element => {
  const allIssues: IIssueCard[] = [];
  return (
    <>
      <NewIssueCard />
      {allIssues}
    </>
  );
};

export default LobbyIssues;

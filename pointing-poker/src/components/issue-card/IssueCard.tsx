import React from 'react';
import ChangeButton from '../iconButtons/ChangeButton';
import DeleteButton from '../iconButtons/DeleteButton';
import './issueCard.scss';

export interface IIssueInfo {
  name: string;
  priority: string;
}

export interface IIssueCard {
  info: IIssueInfo;
}

const IssueCard: React.FC<IIssueCard> = (info: IIssueCard): JSX.Element => {
  const {
    info: { name, priority },
  } = info || {};
  return (
    <div className="issue_card">
      <div className="issue_card_info">
        <p className="issue_card_info_name">{name}</p>
        <p className="issue_card_info_priority">{priority}</p>
      </div>
      <div className="issue_card_controls">
        <ChangeButton action={() => {}} />
        <DeleteButton action={() => {}} />
      </div>
    </div>
  );
};

export default IssueCard;

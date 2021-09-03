import React from 'react';

export interface IIssueCard {
  name: string;
  priority: string;
}

const IssueCard: React.FC<IIssueCard> = ({ name, priority }): JSX.Element => {
  return (
    <div className="issue_card">
      <div className="issue_card_info">
        <p className="issue_card_info_name">{name}</p>
        <p className="issue_card_info_priority">{priority}</p>
      </div>
      <div className="issue_card_controls">
        <img src="" className="issue_card_controls_change" alt="change-img" />
        <img src="" className="issue_card_controls_delete" alt="delete-img" />
      </div>
    </div>
  );
};

export default IssueCard;

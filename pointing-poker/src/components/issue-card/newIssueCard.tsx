import React from 'react';
import './issueCard.scss';

interface INewIssueCard {
  action: () => void;
}

const NewIssueCard: React.FC<INewIssueCard> = ({ action }: INewIssueCard): JSX.Element => {
  return (
    <button type="button" className="issue_card" onClick={() => action}>
      <p>Create new issue</p>
      <img className="issue_card_image" src="./icons/plus-icon.png" alt="plus-icon" />
    </button>
  );
};

export default NewIssueCard;

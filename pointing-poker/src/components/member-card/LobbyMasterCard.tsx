import React from 'react';
import { TUserInfo } from '../../shared/types';
import './memberCard.scss';

const LobbyMasterCard: React.FC<TUserInfo> = ({ name, lastName, jobPosition, avatar }): JSX.Element => {
  const nameParser = (): string => {
    return `${name} ${lastName}`;
  };

  return (
    <div className="member-card">
      <img className="member-card_img" src={avatar} alt={avatar} />
      <div className="member-card-personal">
        <p className="member-card-personal_name">{nameParser()}</p>
        <p className="member-card-personal_position">{jobPosition}</p>
      </div>
    </div>
  );
};

export default LobbyMasterCard;

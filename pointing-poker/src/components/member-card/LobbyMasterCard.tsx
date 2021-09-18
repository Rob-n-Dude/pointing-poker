import React from 'react';
import { TUserInfo } from '../../shared/types';
import './memberCard.scss';

type TLobbyMasterCard = {
  info: TUserInfo;
};

const LobbyMasterCard: React.FC<TLobbyMasterCard> = ({ info }): JSX.Element => {
  const { name, lastName, avatar, jobPosition } = info;

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

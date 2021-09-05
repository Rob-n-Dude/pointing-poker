import React from 'react';
import DeleteButton from '../iconButtons/DeleteButton';
import './memberCard.scss';

export interface IMemberCard {
  info: {
    name: string;
    position?: string;
    image: string;
  };
}

const MemberCard: React.FC<IMemberCard> = ({ info }: IMemberCard): JSX.Element => {
  const { image, name, position } = info || {};
  return (
    <div className="member-card">
      <img className="member-card_img" src={image} alt={image} />
      <div className="member-card-personal">
        <p className="member-card-personal_name">{name}</p>
        <p className="member-card-personal_position">{position}</p>
      </div>
      <DeleteButton action={() => {}} />
    </div>
  );
};

export default MemberCard;

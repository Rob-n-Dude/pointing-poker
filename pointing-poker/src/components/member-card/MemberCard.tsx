import React from 'react';
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
      <img className="member-card_img" src="logo.png" alt={image} />
      <div className="member-card-personal">
        <p className="member-card-personal_name">{name}</p>
        <p className="member-card-personal_position">{position}</p>
      </div>
      <div className="member-card-delete_button-wrapper">
        <img className="member-card-delete_button-wrapper_image" src="icons/delete-icon.png" alt="delete-icon" />
      </div>
    </div>
  );
};

export default MemberCard;

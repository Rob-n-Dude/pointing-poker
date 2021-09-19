import React, { FC } from 'react';
import { TUserInfo } from '../../shared/types';
import MemberCard from '../member-card/MemberCard';

interface IScoreFieldItem {
  user: TUserInfo;
}
const ScoreFieldItem: FC<IScoreFieldItem> = ({ user }) => {
  const { name, lastName, avatar, jobPosition, vote } = user || ({} as TUserInfo);
  return (
    <div className="score-field_item">
      <div className="score-field_item_vote">{vote || 'In Progress'}</div>
      <div className="score-field_item_icon">
        <MemberCard name={name} lastName={lastName} avatar={avatar} jobPosition={jobPosition} />
      </div>
    </div>
  );
};

export default ScoreFieldItem;

import React, { FC } from 'react';
import { TUserInfo, UserRole } from '../../shared/types';
import './scoreField.scss';
import ScoreFieldItem from './ScoreFieldItem';

const us: TUserInfo = {
  name: 'Jon',
  lastName: 'Sina',
  jobPosition: 'Jun',
  avatar: '1',
  role: UserRole.dealer,
};

const ScoreField: FC = () => {
  const allUsers: TUserInfo[] = [us, us, us, us]; // получить массив всех пользователей которые могут голосовать

  const showScoreCards = () => {
    return allUsers.map((user) => <ScoreFieldItem user={user} key={user.name} />);
  };
  return <div className="score-field">{showScoreCards()}</div>;
};

export default ScoreField;

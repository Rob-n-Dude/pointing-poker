import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getMaster } from '../../redux/game/selectors/gameSelectors';
import { TUserInfo } from '../../shared/types';
import './memberCard.scss';

const LobbyMasterCard: React.FC = (): JSX.Element => {
  const master = useSelector(getMaster);
  console.log(master);
  const [user, setUser] = useState<TUserInfo>({} as TUserInfo);

  useEffect(() => {
    setUser(master);
  }, [master]);

  return (
    <div className="member-card">
      {user?.avatar?.initial ? (
        <div className="userPic">{user?.avatar?.initial}</div>
      ) : (
        <img className="member-card_img" src={user?.avatar?.image || ''} alt={user?.avatar?.image || ''} />
      )}

      <div className="member-card-personal">
        <p className="member-card-personal_name">
          {user.name} {user.lastName}
        </p>
        <p className="member-card-personal_position">{user.jobPosition}</p>
      </div>
    </div>
  );
};

export default LobbyMasterCard;

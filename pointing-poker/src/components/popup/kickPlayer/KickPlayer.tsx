import React, { FC } from 'react';
import ButtonStyles from '../../../shared/ButtonStyles';
import { TKickPlayer } from '../../../shared/types';
import Button from '../../button/Button';
import './kickPlayer.scss';

const KickPlayer: FC<TKickPlayer> = ({ user }) => {
  return (
    <>
      <h2 className="kick-player_title">Kick Player?</h2>
      <h3 className="kick-player_text">
        Do you really want to kick <span className="kick-player_text_name">{user.name}</span>
      </h3>
      <div className="kick-player_controls">
        <Button textContent="Yes" action={() => {}} styles={ButtonStyles.default} />
        <Button textContent="No" action={() => {}} styles={ButtonStyles.white} />
      </div>
    </>
  );
};

export default KickPlayer;

import React, { FC } from 'react';
import ButtonStyles from '../../../shared/ButtonStyles';
import { TPopUpContent } from '../../../shared/types';
import Button from '../../button/Button';
import '../kickPlayer/kickPlayer.scss';

const KickPlayerByPlayer: FC<TPopUpContent> = ({ user, positiveAction, negativeAction, userToKick }) => {
  return (
    <div className="kick-player">
      <h2 className="kick-player_title">Kick Player?</h2>
      <h3 className="kick-player_text">
        <span className="kick-player_text_name">{user!.name}</span> want to kick member{' '}
        <span className="kick-player_text_name">{userToKick!.name}</span> <br /> Do you agree with it?
      </h3>
      <div className="kick-player_controls">
        <Button textContent="Yes" action={positiveAction} styles={ButtonStyles.default} />
        <Button textContent="No" action={negativeAction} styles={ButtonStyles.white} />
      </div>
    </div>
  );
};

export default KickPlayerByPlayer;

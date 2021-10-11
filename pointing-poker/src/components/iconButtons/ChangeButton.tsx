import React from 'react';
import { IButtonIcon } from '../../shared/iButtonIcon';
import './buttonIcon.scss';

const ChangeButton: React.FC<IButtonIcon> = ({ action }: IButtonIcon) => {
  return <input className="button-icon" type="image" src="/icons/change-icon.png" alt="change-icon" onClick={action} />;
};

export default ChangeButton;

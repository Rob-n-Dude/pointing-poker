import React from 'react';
import { IButtonIcon } from '../../shared/iButtonIcon';
import './buttonIcon.scss';

const DeleteButton: React.FC<IButtonIcon> = ({ action }: IButtonIcon) => {
  return <input className="button-icon" type="image" src="/icons/delete-icon.png" alt="delete-icon" onClick={action} />;
};

export default DeleteButton;

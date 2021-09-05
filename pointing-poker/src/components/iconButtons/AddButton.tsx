import React from 'react';
import { IButtonIcon } from '../../shared/iButtonIcon';
import './buttonIcon.scss';

const AddButton: React.FC<IButtonIcon> = ({ action }: IButtonIcon) => {
  return <input className="button-icon" type="image" src="/icons/plus-icon.png" alt="add-icon" onClick={action} />;
};

export default AddButton;

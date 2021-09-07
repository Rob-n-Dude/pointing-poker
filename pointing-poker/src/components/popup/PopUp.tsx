import React, { FC } from 'react';
import { TPopUp } from '../../shared/types';
import './PopUp.scss';

const PopUp: FC<TPopUp> = ({ content }) => {
  return (
    <div className="cover">
      <div className="popup">{content}</div>
    </div>
  );
};

export default PopUp;

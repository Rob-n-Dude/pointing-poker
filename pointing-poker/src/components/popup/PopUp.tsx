import React, { FC } from 'react';
import { TPopUp } from '../../shared/types';
import './PopUp.scss';

const PopUp: FC<TPopUp> = ({ content, negativeAction, positiveAction }) => {
  return (
    <div className="cover" onClick={() => negativeAction} role="none">
      <div className="popup" onClick={(event) => event.stopPropagation()} role="none">
        {content({ positiveAction, negativeAction })}
      </div>
    </div>
  );
};

export default PopUp;

import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import Form from './form/Form';
import Switcher from '../../switcher/Switcher';
import './ConnectPopUp.scss';
import { TPopUpContent, UserRole } from '../../../shared/types';
import { getMaster } from '../../../redux/game/selectors/gameSelectors';

const ConnectPopUp: FC<TPopUpContent> = () => {
  const master = useSelector(getMaster);
  const role = master ? UserRole.player : UserRole.dealer;
  return (
    <>
      <div className="connect-popup-wrap">
        <div className="connect-popup-head">
          <h2 className="connect-popup-head_title">Connect to lobby</h2>
          <div className="connect-popup-head_desc">
            Connect as <br /> Observer
          </div>
          <Switcher id="observer" action={() => {}} />
        </div>
        <Form role={role} />
      </div>
    </>
  );
};

export default ConnectPopUp;

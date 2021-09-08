import React, { FC } from 'react';
import ButtonStyles from '../../../shared/ButtonStyles';
import Button from '../../button/Button';
import Form from './form/Form';
import Switcher from '../../switcher/Switcher';
import './ConnectPopUp.scss';

const ConnectPopUp: FC = () => {
  return (
    <>
      <div className="connect-popup-wrap">
        <div className="connect-popup-head">
          <h2 className="title">Connect to lobby</h2>
          <div className="desc">
            Connect as <br /> Observer
          </div>
          <Switcher id="observer" action={() => {}} />
        </div>
        <Form />
        <div className="connectButtons">
          <Button textContent="Confirm" action={() => {}} styles={ButtonStyles.default} />
          <Button textContent="Cancel" action={() => {}} styles={ButtonStyles.white} />
        </div>
      </div>
    </>
  );
};

export default ConnectPopUp;

import { ChangeEvent } from 'hoist-non-react-statics/node_modules/@types/react';
import React, { useState } from 'react';
import { CardAmount, defaultCardValues } from '../../shared/cardAmounts';
import SettingsCard from '../gameCard/SettingsCard';
import Switcher from '../switcher/Switcher';
import './lobbySettings.scss';

const LobbySettings: React.FC = () => {
  const [isTimer, setIsTimer] = useState<boolean>(false);
  const [cardAmount, setCardAmount] = useState<CardAmount>(CardAmount.fibonacci);

  const cardAmountHandler = (event: ChangeEvent<HTMLSelectElement>): void => {
    const value = event.target.value as CardAmount;
    setCardAmount(() => value);
  };

  const showCardPreview = (): number[] => {
    switch (cardAmount) {
      case CardAmount.fibonacci:
        return defaultCardValues.fibonacci;
      case CardAmount.pow:
        return defaultCardValues.pow;
      default:
        return defaultCardValues.custom;
    }
  };

  return (
    <form className="form">
      <p className="form-title"> Game Settings</p>
      <div className="form-item">
        Master as a player:
        <Switcher id="master" action={() => {}} />
      </div>
      <div className="form-item">
        Admit players if the game has started:
        <Switcher id="admit" action={() => {}} />
      </div>
      <div className="form-item">
        Cards will flip automaticly:
        <Switcher id="card-flip" action={() => {}} />
      </div>
      <div className="form-item">
        Is timer needed:
        <Switcher id="timer" action={() => setIsTimer(!isTimer)} />
      </div>
      {/* Отрисовать настройки таймера */}
      {isTimer ? <div className="form-item">Timer Settings</div> : ''}
      <div className="form-item">
        Issues as list:
        <Switcher id="issues" action={() => {}} />
      </div>
      <div className="form-item">
        Choose card amounts:
        <select name="card-amount" id="card-amount" onChange={cardAmountHandler}>
          <option value={CardAmount.fibonacci}>{CardAmount.fibonacci}</option>
          <option value={CardAmount.pow}>{CardAmount.pow}</option>
          <option value={CardAmount.custom}>{CardAmount.custom}</option>
        </select>
      </div>
      {/* Продумать и отрисовать кастомный ввод значений карточек */}
      {cardAmount === CardAmount.custom ? <input type="text" /> : ''}
      <div className="form-item">
        {showCardPreview().map((value) => (
          <SettingsCard value={value} key={value} />
        ))}
      </div>
    </form>
  );
};

export default LobbySettings;

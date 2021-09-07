import { ChangeEvent } from 'hoist-non-react-statics/node_modules/@types/react';
import React, { useState } from 'react';
import { CardAmount, defaultCardValues } from '../../../../shared/cardAmounts';
import SettingsCard from '../../../gameCard/SettingsCard';
import Switcher from '../../../switcher/Switcher';
import './lobbySettings.scss';

const LobbySettings: React.FC = () => {
  const [isTimer, setIsTimer] = useState<boolean>(false);
  const [cardAmount, setCardAmount] = useState<CardAmount>(CardAmount.fibonacci);
  const [customCardValues, setCustomCardValues] = useState<number[]>([]);
  const [timerTime, setTimerTime] = useState<number>(0); // seconds

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
        return customCardValues;
    }
  };

  const customCardsInputParser = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const regexp = /^(\d+(,\d{0,3}){0,5})?$/gm;
    const regexpMatch = value.match(regexp);
    if (regexpMatch) {
      const cardValues = regexpMatch
        .join()
        .split(',')
        .map((val) => +val);
      console.log(cardValues);
      setCustomCardValues(() => cardValues);
    }
  };

  const timerTimeParser = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const regexp = /([0-5][0-9]):[0-5][0-9]/g;
    const regexpMatch = value.match(regexp);
    if (regexpMatch) {
      const timerArr = regexpMatch.join().split(':');
      const timeInSeconds = 60 * +timerArr[0] + +timerArr[1];
      setTimerTime(timeInSeconds);
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
      {isTimer ? (
        <>
          <div className="form-item">
            Timer Settings:
            <input type="text" className="input input_with_border" placeholder="MM:SS" onChange={timerTimeParser} />
          </div>
          <p className="form-item_centering">Timer will set to {timerTime} seconds</p>
        </>
      ) : (
        ''
      )}
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
      {cardAmount === CardAmount.custom ? (
        <input className="input input_with_border form-item_centering" type="text" onChange={customCardsInputParser} />
      ) : (
        ''
      )}
      <div className="form-item">
        {showCardPreview().map((value, index) => (
          <SettingsCard value={value} key={Number(value + index)} />
        ))}
      </div>
    </form>
  );
};

export default LobbySettings;

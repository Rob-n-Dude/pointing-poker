import React, { SyntheticEvent, useState, useEffect } from 'react';
import './Greeting.scss';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../button/Button';
import ButtonStyles from '../../../shared/ButtonStyles';
import ConnectPopUp from '../../popup/ConnectPopUp/ConnectPopUp';
import PopUp from '../../popup/PopUp';
import getIsPopUpShowing from '../../../redux/popUp/selectors/popUpSelectors';
import togglePopUpAction from '../../../redux/popUp/actions/popUpAction';
import { ActivePages, TUserInfo } from '../../../shared/types';
import { gameAPI, userApi } from '../../../services/Api';
import changePageTo from '../../../redux/activePage/actions/activePageActions';
import { setIsSideBarNeeded } from '../../../redux/sideBar/actions/sideBarActions';

const Greeting: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const isPopUp = useSelector(getIsPopUpShowing);

  const [isMasterPopup, setIsMasterPopup] = useState(isPopUp);
  const [isPlayerPopup, setisPlayerPopup] = useState(isPopUp);

  useEffect(() => {
    dispatch(changePageTo(ActivePages.greeting));
    dispatch(setIsSideBarNeeded(false));
  }, [dispatch]);

  const showMasterPopupHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(togglePopUpAction(true));
    setIsMasterPopup(true);
  };

  const showPlayerPopupHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(togglePopUpAction(true));
    setisPlayerPopup(true);
  };

  const popUpNegativeActionHandler = () => {
    setIsMasterPopup(false);
    setisPlayerPopup(false);
    dispatch(togglePopUpAction(false));
  };

  const registerMaster = () => {
    return (user: TUserInfo) => {
      console.log(112312312);
      gameAPI.setMaster(user);
    };
  };

  const registerPlayer = () => {
    return (user: TUserInfo) => {
      console.log(1212);
      userApi.createUserRequest(user);
    };
  };

  return (
    <main className="main">
      <div className="container main-content">
        <div className="head">
          <div className="head-img">
            <img src="./img/cards.png" alt="Cards" className="img-pic" />
          </div>
          <div className="head-text">
            <p className="desc">Poker</p>
            <h1 className="title">Planning</h1>
          </div>
          <div className="line">
            <hr />
          </div>
        </div>
        <div className="start-container">
          <h2 className="start-title">Start your planning:</h2>
          <div className="start">
            <p className="create">Create session:</p>
            <a href="/lobby" onClick={showMasterPopupHandler}>
              <Button textContent="Start new game" action={() => {}} styles={ButtonStyles.default} />
            </a>
          </div>
          <p className="start-title or">OR:</p>
          <p className="connect">
            Connect to lobby by <span className="url">URL:</span>
          </p>
          <div className="connect-input">
            <a href="/game" onClick={showPlayerPopupHandler}>
              <input className="input" type="text" placeholder="URL" />
              <Button textContent="Connect" action={() => {}} styles={ButtonStyles.default} />
            </a>
          </div>
        </div>
      </div>
      {isMasterPopup && isPopUp && (
        <PopUp content={ConnectPopUp} positiveAction={registerMaster} negativeAction={popUpNegativeActionHandler} />
      )}
      {isPlayerPopup && isPopUp && (
        <PopUp content={ConnectPopUp} positiveAction={registerPlayer} negativeAction={popUpNegativeActionHandler} />
      )}
    </main>
  );
};

export default Greeting;

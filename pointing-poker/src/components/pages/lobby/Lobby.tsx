import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LobbyHead from './lobby-head/LobbyHead';
import LobbyIssues from './lobby-issues/LobbyIssues';
import LobbyMembers from './lobby-members/LobbyMembers';
import LobbySettings from './lobbySettings/LobbySettings';
import './lobby.scss';
import { ActivePages, UserRole } from '../../../shared/types';
import changePageTo from '../../../redux/activePage/actions/activePageActions';
import SideBar from '../../sideBar/SideBar';
import {
  setChatVisability,
  setIsSideBarNeeded,
  setScoreVisability,
} from '../../../redux/sideBar/actions/sideBarActions';
import { getPlayers } from '../../../redux/game/selectors/gameSelectors';

// user is taken from redux
const Lobby: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  // костыль
  const you = useSelector(getPlayers)[0];

  useEffect(() => {
    dispatch(changePageTo(ActivePages.lobby));
    dispatch(setIsSideBarNeeded(true));
    dispatch(setScoreVisability(true));
    dispatch(setChatVisability(false));
  }, [dispatch]);

  return (
    <>
      <div className="content">
        <div className="container">
          <p className="lobby-name">Some lobby name</p>
          <LobbyHead />
          <LobbyMembers />
          {you?.role === UserRole.dealer ? (
            <>
              <LobbyIssues />
              <LobbySettings />
            </>
          ) : null}
        </div>
        <SideBar />
      </div>
    </>
  );
};

export default Lobby;

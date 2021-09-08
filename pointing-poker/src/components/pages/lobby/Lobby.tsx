import React from 'react';
import LobbyHead from './lobby-head/LobbyHead';
import LobbyIssues from './lobby-issues/LobbyIssues';
import LobbyMembers from './lobby-members/LobbyMembers';
import LobbySettings from './lobbySettings/LobbySettings';
import './lobby.scss';
import { TLobby, UserRole } from '../../../shared/types';

const Lobby: React.FC<TLobby> = ({ user }): JSX.Element => {
  return (
    <>
      <div className="container">
        <p className="lobby-name">Some lobby name</p>
        <LobbyHead user={user} />
        <LobbyMembers />
        {user.role === UserRole.dealer ? (
          <>
            <LobbyIssues />
            <LobbySettings />
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Lobby;

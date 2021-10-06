import React from 'react';
import LobbyHead from './lobby-head/LobbyHead';
import LobbyIssues from './lobby-issues/LobbyIssues';
import LobbyMembers from './lobby-members/LobbyMembers';
import LobbySettings from './lobbySettings/LobbySettings';
import './lobby.scss';
import { TLobby, UserRole } from '../../../shared/types';
import Chat from '../../chat/Chat';

// user is taken from redux
const Lobby: React.FC<TLobby> = ({ user, isChat }): JSX.Element => {
  return (
    <>
      <div className="content">
        <div className="container">
          <p className="lobby-name">Some lobby name</p>
          <LobbyHead user={user} isChat={isChat} />
          <LobbyMembers />
          {user.role === UserRole.dealer ? (
            <>
              <LobbyIssues />
              <LobbySettings />
            </>
          ) : null}
        </div>
        {isChat && <Chat />}
      </div>
    </>
  );
};

export default Lobby;

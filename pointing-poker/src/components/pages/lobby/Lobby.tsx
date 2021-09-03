import React from 'react';
import LobbyHead from '../../lobby-head/LobbyHead';
import LobbyIssues from '../../lobby-issues/LobbyIssues';
import LobbyMembers from '../../lobby-members/LobbyMembers';
import './lobby.scss';

const Lobby: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="container">
        <p className="lobby-name">Some lobby name</p>
        <LobbyHead />
        <LobbyMembers />
        <LobbyIssues />
      </div>
    </>
  );
};

export default Lobby;

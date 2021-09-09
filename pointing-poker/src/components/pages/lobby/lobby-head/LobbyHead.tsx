import React from 'react';
import ButtonStyles from '../../../../shared/ButtonStyles';
import { TLobby, UserRole } from '../../../../shared/types';
import Button from '../../../button/Button';
import LobbyMasterCard from '../../../member-card/LobbyMasterCard';

const LobbyHead: React.FC<TLobby> = ({ user }): JSX.Element => {
  const lobbyLink = 'someLink';
  return (
    <div className="lobby-head">
      <div className="lobby-head-master_card">
        <p className="lobby-head-master_card_text"> Master: </p>
        <LobbyMasterCard
          name={user.name}
          lastName={user.lastName}
          jobPosition={user.jobPosition}
          avatar={user.avatar}
          role={user.role}
        />
      </div>
      {user.role === UserRole.dealer ? (
        <>
          <form className="lobby-head-link">
            <label htmlFor="html-link">
              Link to Lobby
              <div className="lobby-head-link_input-wrapper">
                <input
                  id="html-link"
                  type="text"
                  disabled
                  value={lobbyLink}
                  className="lobby-head-link_input-wrapper-input input"
                />
                <Button textContent="Copy" action={() => {}} styles={ButtonStyles.default} />
              </div>
            </label>
          </form>
          <div className="lobby-head-controls">
            <Button textContent="Start Game" action={() => {}} styles={ButtonStyles.default} />
            <Button textContent="Cancel Game" action={() => {}} styles={ButtonStyles.white} />
          </div>
        </>
      ) : (
        <>
          {' '}
          <div className="lobby-head-controls">
            <div />
            <Button textContent="Exit" action={() => {}} styles={ButtonStyles.white} />
          </div>
        </>
      )}
    </div>
  );
};

export default LobbyHead;

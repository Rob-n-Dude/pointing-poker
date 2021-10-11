import React from 'react';
import { useSelector } from 'react-redux';
import { getPlayers } from '../../../../redux/game/selectors/gameSelectors';
import ButtonStyles from '../../../../shared/ButtonStyles';
import { UserRole } from '../../../../shared/types';
import Button from '../../../button/Button';
import LobbyMasterCard from '../../../member-card/LobbyMasterCard';

const LobbyHead: React.FC = (): JSX.Element => {
  const lobbyLink = 'someLink';
  const you = useSelector(getPlayers)[0];
  return (
    <div className="lobby-head">
      <div className="lobby-head-master_card">
        <p className="lobby-head-master_card_text"> Master: </p>
        <LobbyMasterCard />
      </div>
      {you?.role === UserRole.dealer ? (
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
            <a href="/">
              <Button textContent="Exit" action={() => {}} styles={ButtonStyles.white} />
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default LobbyHead;

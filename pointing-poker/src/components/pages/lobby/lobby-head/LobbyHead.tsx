import React from 'react';
import ButtonStyles from '../../../../shared/ButtonStyles';
import Button from '../../../button/Button';
import MemberCard, { IMemberCard } from '../../../member-card/MemberCard';

const LobbyHead: React.FC = (): JSX.Element => {
  const masterInfo: IMemberCard = {} as IMemberCard;
  const lobbyLink = 'someLink';
  return (
    <div className="lobby-head">
      <div className="lobby-head-master_card">
        <p className="lobby-head-master_card_text"> Master: </p>
        <MemberCard info={masterInfo.info} />
      </div>
      <form className="lobby-head-link">
        <label htmlFor="html-link">
          Link to Lobby
          <div className="lobby-head-link_input-wrapper">
            <input
              id="html-link"
              type="text"
              disabled
              value={lobbyLink}
              className="lobby-head-link_input-wrapper-input input input_with_border"
            />
            <Button textContent="Copy" action={() => {}} styles={ButtonStyles.default} />
          </div>
        </label>
      </form>
      <div className="lobby-head-controls">
        <Button textContent="Start Game" action={() => {}} styles={ButtonStyles.default} />
        <Button textContent="Cancel Game" action={() => {}} styles={ButtonStyles.white} />
      </div>
    </div>
  );
};

export default LobbyHead;

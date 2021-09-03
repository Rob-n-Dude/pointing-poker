import React from 'react';
import MemberCard, { IMemberCard } from '../member-card/MemberCard';

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
              className="lobby-head-link_input-wrapper-input"
            />
            <input type="submit" value="Copy" />
          </div>
        </label>
      </form>
    </div>
  );
};

export default LobbyHead;

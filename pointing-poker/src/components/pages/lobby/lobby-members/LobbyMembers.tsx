import React from 'react';
import MemberCard, { IMemberCard } from '../../../member-card/MemberCard';

const LobbyMembers: React.FC = (): JSX.Element => {
  const member = { info: { name: 'Jon', position: 'Junnior', image: '' } };
  const members: IMemberCard[] = [member];
  const membersToRender = members.map((memberInfo: IMemberCard) => (
    <MemberCard info={memberInfo.info} key={memberInfo.info.name} />
  ));
  return (
    <div className="lobby-members">
      <p className="lobby-members_title">Members:</p>
      <div className="lobby-members_list">{membersToRender}</div>
    </div>
  );
};

export default LobbyMembers;

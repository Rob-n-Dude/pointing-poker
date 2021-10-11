import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { getIsChat, getIsScore } from '../../redux/sideBar/selectors/sideBarSelectors';
import Chat from '../chat/Chat';
import ScoreField from '../scoreField/ScoreField';

import './sideBar.scss';

const SideBar: FC = () => {
  // следующие константы будут доставаться из редакса
  const isChat = useSelector(getIsChat);
  const isScore = useSelector(getIsScore);

  const renderSideBar = (): JSX.Element | null => {
    if (!isScore && !isChat) return null; // если не надо отображать чат и счет
    if (isChat) return <Chat />; // если надо отобразить чат
    return <ScoreField />; // во всех остальных случаях отображается счет
  };

  return <div className="sideBar">{renderSideBar()}</div>;
};

export default SideBar;

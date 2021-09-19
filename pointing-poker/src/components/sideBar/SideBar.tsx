import React, { FC } from 'react';
import ScoreField from '../scoreField/ScoreField';

import './sideBar.scss';

const SideBar: FC = () => {
  // следующие константы будут доставаться из редакса
  const isScore = true;
  const isChat = false;

  const renderSideBar = (): JSX.Element | null => {
    if (!isScore && !isChat) return null; // если не надо отображать чат и счет
    if (isChat) return <div>Чат</div>; // если надо отобразить чат
    return <ScoreField />; // во всех остальных случаях отображается счет
  };

  return <div className="sideBar">{renderSideBar()}</div>;
};

export default SideBar;

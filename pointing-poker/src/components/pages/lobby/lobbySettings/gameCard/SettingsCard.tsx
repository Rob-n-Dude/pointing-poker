import React from 'react';
import './settingsCard.scss';

interface ISettingsCard {
  value: number;
}

const SettingsCard: React.FC<ISettingsCard> = ({ value }): JSX.Element => {
  return (
    <div className="settings-card">
      <p className="settings-card-value">{value}</p>
      <p className="settings-card-value_reverse">{value}</p>
    </div>
  );
};

export default SettingsCard;

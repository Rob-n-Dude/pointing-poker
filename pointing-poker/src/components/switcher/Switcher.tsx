import React from 'react';
import './switcher.scss';

interface ISwitcher {
  id: string;
  action: () => void;
}

const Switcher: React.FC<ISwitcher> = ({ id, action }): JSX.Element => {
  return (
    <label className="switch" htmlFor={id}>
      <input type="checkbox" id={id} onChange={action} />
      <span className="slider round" />
    </label>
  );
};

export default Switcher;

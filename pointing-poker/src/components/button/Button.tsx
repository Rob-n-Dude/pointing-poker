import React from 'react';
import ButtonStyles from '../../shared/ButtonStyles';
import './Button.scss';

interface IButton {
  textContent: string;
  action: () => void;
  styles: ButtonStyles;
}

const Button: React.FC<IButton> = ({ textContent, action, styles }): JSX.Element => {
  return <input className={`default${styles}`} type="button" onClick={action} value={textContent} />;
};

export default Button;

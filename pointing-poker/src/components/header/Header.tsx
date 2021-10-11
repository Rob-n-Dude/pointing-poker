import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setChatVisability, setScoreVisability } from '../../redux/sideBar/actions/sideBarActions';
import { getIsSideBarNeeded } from '../../redux/sideBar/selectors/sideBarSelectors';
import './Header.scss';

const Header: FC = () => {
  const [isChatOpened, setIsChatOpened] = useState(false);
  const isChat = useSelector(getIsSideBarNeeded);
  const dispatch = useDispatch();

  const toggleChat = () => {
    setIsChatOpened((state) => !state);
    dispatch(setChatVisability(!isChatOpened));
    dispatch(setScoreVisability(isChatOpened));
  };

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <a href="/" className="header-logo">
            <img src="./img/logo.png" alt="Logo" className="logo-img" />
          </a>
        </div>
        {isChat && (
          <div className="header-chat" onClick={toggleChat} role="none">
            <svg className="chat" width="19" height="14" viewBox="0 0 19 14" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.9 1.44432H17.1V9.36976H3.0115L1.9 10.1425V1.44432ZM1.9 0.123413C0.855 0.123413 0.00949999 0.717821 0.00949999 1.44432L0 13.3325L3.8 10.6907H17.1C18.145 10.6907 19 10.0963 19 9.36976V1.44432C19 0.717821 18.145 0.123413 17.1 0.123413H1.9ZM3.8 6.72795H11.4V8.04885H3.8V6.72795ZM3.8 4.74659H15.2V6.06749H3.8V4.74659ZM3.8 2.76523H15.2V4.08613H3.8V2.76523Z" />
            </svg>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

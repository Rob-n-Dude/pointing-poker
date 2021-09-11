import React, { FC } from 'react';
import './Chat.scss';

const Chat: FC = () => {
  return (
    <div className="chat-wrap">
      <div className="chat-head">Chat Room</div>
      <div className="chat-body">
        <div className="chat">
          <div className="message right">
            <div className="box sb1">I&apos;m speech bubble</div>
            <div className="userPic-chat right">{/* {initials} */}RG</div>
          </div>
          <div className="message left">
            <div className="userPic-chat left">{/* {initials} */}RG</div>
            <div className="box sb2">
              I&apos;m speech bubble I&apos;m speech bubble I&apos;m speech bubble I&apos;m speech bubble I&apos;m
              speech bubble I&apos;m speech bubble
            </div>
          </div>
        </div>
        <div className="type-message">
          <div className="bubble">
            <div className="ellipsis one" />
            <div className="ellipsis two" />
            <div className="ellipsis three" />
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="chat-bar">
          <input className="chat-input" type="text" placeholder="Type a message..." />
          <button className="chat-button" type="submit">
            <i className="send-icon">
              <svg
                className="post"
                xmlns="http://www.w3.org/2000/svg"
                id="Icons"
                viewBox="0 0 74 74"
                width="35"
                height="35"
              >
                <path d="M43.73,72H37.5a1,1,0,0,1,0-2h6.23a1,1,0,0,1,0,2Z" />
                <path d="M21.27,72H3a1,1,0,0,1-1-1V30.54a1,1,0,0,1,2,0V70H21.27a1,1,0,0,1,0,2Z" />
                <path d="M32.5,72H26.27a1,1,0,1,1,0-2H32.5a1,1,0,0,1,0,2Z" />
                <path d="M71,72H48.73a1,1,0,1,1,0-2H70V30.54a1,1,0,1,1,2,0V71A1,1,0,0,1,71,72Z" />
                <path d="M3,31.54a1,1,0,0,1-.631-1.777l12-9.72A1,1,0,1,1,15.63,21.6l-12,9.72A1,1,0,0,1,3,31.54Z" />
                <path d="M71,31.54a1,1,0,0,1-.629-.223l-12-9.72a1,1,0,0,1,1.26-1.554l12,9.72A1,1,0,0,1,71,31.54Z" />
                <path d="M46.879,12a.994.994,0,0,1-.628-.223L37,4.287l-9.251,7.49a1,1,0,0,1-1.258-1.554l9.88-8a1,1,0,0,1,1.258,0l9.88,8A1,1,0,0,1,46.879,12Z" />
                <path d="M37,57.9a12.978,12.978,0,0,1-8.677-3.32L2.333,31.285A1,1,0,1,1,3.667,29.8l25.99,23.29a11,11,0,0,0,14.686,0L70.333,29.8a1,1,0,0,1,1.334,1.49l-25.99,23.29A12.981,12.981,0,0,1,37,57.9Z" />
                <path d="M43.73,72H37.5a1,1,0,0,1,0-2h6.23a1,1,0,0,1,0,2Z" />
                <path d="M21.27,72H3a1,1,0,0,1-.628-1.778l23.75-19.18A1,1,0,1,1,27.378,52.6L5.83,70H21.27a1,1,0,0,1,0,2Z" />
                <path d="M32.5,72H26.27a1,1,0,1,1,0-2H32.5a1,1,0,0,1,0,2Z" />
                <path d="M71,72H48.73a1,1,0,1,1,0-2H68.17L46.622,52.6a1,1,0,1,1,1.256-1.556l23.75,19.18A1,1,0,0,1,71,72Z" />
                <path d="M59,42.29a1,1,0,0,1-1-1V12H16V41.29a1,1,0,0,1-2,0V11a1,1,0,0,1,1-1H59a1,1,0,0,1,1,1V41.29A1,1,0,0,1,59,42.29Z" />
                <path d="M51,21H23a1,1,0,0,1,0-2H51a1,1,0,0,1,0,2Z" />
                <path d="M51,29H23a1,1,0,0,1,0-2H51a1,1,0,0,1,0,2Z" />
                <path d="M51,37H23a1,1,0,0,1,0-2H51a1,1,0,0,1,0,2Z" />
              </svg>
            </i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;

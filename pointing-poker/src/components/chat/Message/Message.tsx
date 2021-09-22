import React, { FC, useState } from 'react';
import './Message.scss';
import MessageStyles from './MessageStyles';

type TMessage = {
  user: string;
  message: string;
  styles: MessageStyles;
};

const Message: FC<TMessage> = ({ user, message, styles }) => {
  const [messageUser] = useState<TMessage>({ user, message, styles });

  // TODO: need to make user verification via redax for message styles

  /*   useEffect(() => {
    setMessage(message);
  }, [message]); */

  return (
    <div className={`message${styles}`}>
      <div className={`box sb1${styles}`}>{message}</div>
      <div className={`userPic-chat${styles}`}>{messageUser.user}</div>
    </div>
  );
};

export default Message;

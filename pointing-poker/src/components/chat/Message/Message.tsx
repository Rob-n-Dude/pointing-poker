import React, { FC, useState } from 'react';
import './Message.scss';

/* enum MessageStyles {
  own = 'right',
  other = 'left',
} */

type TMessage = {
  user: string;
  message: string;
  // own: true; or styles: MessageStyles;
};

const Message: FC<TMessage> = ({ user, message }) => {
  const [messageUser] = useState<TMessage>({ user, message });

  /*   useEffect(() => {
    setMessage(message);
  }, [message]); */

  return (
    <div className="message right">
      <div className="box sb1 right">{message}</div>
      <div className="userPic-chat right">{messageUser.user}</div>
    </div>
  );
};

export default Message;

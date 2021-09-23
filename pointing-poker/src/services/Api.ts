import { io } from 'socket.io-client';
import { TUserVote, TUserDecideToKick, TUserKickUser, TUserMessage, TUserInfo } from '../shared/types';

const baseUrl = 'serverUrl';

const socket = io(baseUrl);

const userApi = {
  createUserRequest: (info: TUserInfo): void => {
    socket.emit('create-user', info);
  },

  sendMessage: (message: TUserMessage): void => {
    socket.emit('message-send', message);
  },

  startRecievingMessages: (callBack: (message: TUserMessage) => void): void => {
    socket.on('recieving-messages', callBack);
  },

  sendInviteToKickPlayer: ({ initiator, victim }: TUserKickUser): void => {
    socket.emit('user-want-to-kick-user', [initiator, victim]);
  },

  sendKickDecision: (decision: TUserDecideToKick): void => {
    socket.emit('user-kick-decision', decision);
  },

  sendVote: (vote: TUserVote) => {
    socket.emit('user-vote', vote);
  },
};

export default userApi;

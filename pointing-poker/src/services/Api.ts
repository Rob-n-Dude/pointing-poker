import { io } from 'socket.io-client';
import {
  TAllPlayersCallBack,
  TMessageCallBack,
  TMasterCallBack,
  TAllRoundsCallBack,
  TChangeRoundCallBack,
  TAllStatsCallBack,
  TRoundStatsCallBack,
  TSettingsCallBack,
  TUpdateIssueCallBack,
} from './ApiTypes';
import { TUserMessage, TUserVote, TUserDecideToKick, TUserInfo } from '../shared/types';
import { TLobbySettings } from '../redux/settings/types';
import { TRound } from '../redux/game/types';
import { IIssueInfo } from '../components/issue-card/IssueCard';

const baseUrl = 'https://pointing-poker-backend.herokuapp.com/';

const socket = io(baseUrl);

export const userApi = {
  createUserRequest: (info: TUserInfo): void => {
    socket.emit('create-user', info);
  },

  sendMessage: (message: TUserMessage): void => {
    socket.emit('message-send', message);
  },

  startRecievingMessages: (callBack: TMessageCallBack): void => {
    socket.on('recieving-messages', (message) => callBack(message));
    // когда приходят сообщения
  },

  sendInviteToKickPlayer: (victim: TUserInfo): void => {
    socket.emit('user-want-to-kick-user', victim);
  },

  sendKickDecision: (decision: TUserDecideToKick): void => {
    socket.emit('user-kick-decision', decision);
  },

  sendVote: (vote: TUserVote) => {
    socket.emit('user-vote', vote);
  },
};

export const gameAPI = {
  requestPlayers: () => socket.emit('request-players'),

  recievePlayers: (callBack: TAllPlayersCallBack) => socket.on('recieve-players', (players) => callBack(players)),

  stopRecievingPlayers: () => socket.off('recieve-players'),

  requestMaster: () => socket.emit('request-master'),

  recieveMaster: (callBack: TMasterCallBack) => socket.on('recieve-master', (master) => callBack(master)),

  setMaster: (master: TUserInfo): void => {
    socket.emit('set-master', master);
  },

  requestAllRounds: () => socket.emit('request-all-rounds'),

  recieveAllRounds: (callBack: TAllRoundsCallBack) => socket.on('recieve-all-rounds', (rounds) => callBack(rounds)),

  setRounds: (rounds: TRound[]): void => {
    socket.emit('set-all-rounds', rounds);
  },

  roundEnds: () => socket.emit('Round-end'),

  listenRoundChange: (callBack: TChangeRoundCallBack) =>
    socket.on('round-change', (currentRound) => callBack(currentRound)),

  requestAllStats: () => socket.emit('request-all-stats'),

  recieveAllStats: (callBack: TAllStatsCallBack) => socket.on('recieve-all-stats', (allStats) => callBack(allStats)),

  requestRoundStats: (issue: IIssueInfo) => socket.emit('request-round-stats', issue),

  recieveRoundStats: (callBack: TRoundStatsCallBack) => socket.on('recieve-round-stats', (stats) => callBack(stats)),
};

export const settingsApi = {
  sendLobbySettings: (settings: TLobbySettings) => socket.emit('update-lobby-settings', settings),

  requestLobbySettings: () => socket.emit('request-lobby-settings'),

  recieveLobbySettings: (callBack: TSettingsCallBack) =>
    socket.on('recieve-lobby-settings', (settings) => callBack(settings)),

  createIssue: (issue: IIssueInfo) => socket.emit('create-new-issue', issue),

  deleteIssue: (issue: IIssueInfo) => socket.emit('delete-issue', issue),

  updateOneIssue: (issue: IIssueInfo) => socket.emit('update-issue', issue),

  issuesUpdated: (callBack: TUpdateIssueCallBack) =>
    socket.on('issues-updated', (updatedIssues) => callBack(updatedIssues)),
};

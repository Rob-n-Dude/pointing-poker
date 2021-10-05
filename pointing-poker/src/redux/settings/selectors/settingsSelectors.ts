import { TStore } from '../../types';

export const getTimerSettings = ({ settings }: TStore) => settings.timer;
export const getIsMasterPlaying = ({ settings }: TStore) => settings.masterAsPlayer;
export const getAdmitPlayers = ({ settings }: TStore) => settings.admitPlayersIfGameStarted;
export const getCardValues = ({ settings }: TStore) => settings.cardValues;
export const getIssueList = ({ settings }: TStore) => settings.issueList;

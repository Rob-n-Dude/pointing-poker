import { IIssueInfo } from '../components/issue-card/IssueCard';
import { TLobbySettings } from '../redux/settings/types';
import { TRound } from '../redux/game/types';
import { TUserInfo, TUserMessage } from '../shared/types';

export type TMessageCallBack = (message: TUserMessage) => void;

export type TAllPlayersCallBack = (players: TUserInfo[]) => void;

export type TMasterCallBack = (master: TUserInfo) => void;

export type TAllRoundsCallBack = (rounds: TRound[]) => void;

export type TChangeRoundCallBack = (currentRound: TRound) => void;

export type TAllStatsCallBack = (allStats: TRound[]) => void;

export type TRoundStatsCallBack = (stats: TRound) => void;

export type TSettingsCallBack = (settings: TLobbySettings) => void;

export type TUpdateIssueCallBack = (issues: IIssueInfo[]) => void;

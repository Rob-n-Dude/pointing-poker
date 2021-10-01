import { IIssueInfo } from '../../components/issue-card/IssueCard';

export type TAddIssue = IIssueInfo | IIssueInfo[];

export type TLobbySettings = {
  timer: TTimerSettings;
  masterAsPlayer: boolean;
  admitPlayersIfGameStarted: boolean;
  cardValues: number[];
  issueList: IIssueInfo[];
};

export type TTimerSettings = {
  isNeeded: boolean;
  time?: number; // ms
};

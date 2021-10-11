import { IIssueInfo } from '../../components/issue-card/IssueCard';
import { TUserInfo, TUserVote } from '../../shared/types';

export type TGame = {
  players: TUserInfo[];
  master: TUserInfo;
  rounds: TRound[];
  currentRound: TRound;
};

export type TRound = {
  issue: IIssueInfo;
  average: number;
  votes: TUserVote[];
};

import { TUserInfo, TUserVote } from '../../shared/types';

export type TGame = {
  players: TUserInfo[];
  master: TUserInfo;
  rounds: TRound[];
  currentRound: TRound;
};

export type TRound = {
  issueName: string;
  average: number;
  votes: TUserVote[];
};

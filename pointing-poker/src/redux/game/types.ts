import { TUserInfo } from '../../shared/types';

export type TGame = {
  players: TUserInfo[];
  master: TUserInfo;
  rounds: TRound[];
};

export type TRound = {
  issueName: string;
  votes: TVote[];
};

export type TVote = {
  vote: string;
};

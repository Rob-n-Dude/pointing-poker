import { TUserInfo } from '../../shared/types';

export type TGame = {
  players: TUserInfo[];
  master: TUserInfo;
};

import { TUserInfo } from '../shared/types';
import { TGame } from './game/types';
import { TLobbySettings } from './settings/types';
import { TSideBar } from './sideBar/types';

export type TStore = {
  user: TUserInfo;
  game: TGame;
  sideBar: TSideBar;
  settings: TLobbySettings;
};

import { TPopUpRedux } from './popUp/types';
import { TUserInfo } from '../shared/types';
import { TActivePage } from './activePage/types';
import { TGame } from './game/types';
import { TLobbySettings } from './settings/types';
import { TSideBar } from './sideBar/types';
import { TChat } from './chatMessages/types';

export type TStore = {
  user: TUserInfo;
  game: TGame;
  sideBar: TSideBar;
  settings: TLobbySettings;
  activePage: TActivePage;
  popUp: TPopUpRedux;
  chat: TChat;
};

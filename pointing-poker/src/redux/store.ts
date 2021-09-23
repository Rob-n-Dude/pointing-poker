import { createStore } from 'redux';
import { pageInitial } from './activePage/reducer/activePageReducer';
import { gameInitial } from './game/reducer/gameReduser';
import { settingsInitial } from './settings/reducer/settingsReducer';
import { sideBarInitial } from './sideBar/reducer/sideBarReducer';
import { TStore } from './types';
import { userInitial } from './user/reducer/userReducer';

const initialState: TStore = {
  user: userInitial,
  game: gameInitial,
  sideBar: sideBarInitial,
  settings: settingsInitial,
  activePage: pageInitial,
};

const store = createStore(rootReducer, initialState);

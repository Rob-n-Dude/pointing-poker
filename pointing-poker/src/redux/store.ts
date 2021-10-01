import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { pageInitial } from './activePage/reducer/activePageReducer';
import { gameInitial } from './game/reducer/gameReduser';
import { settingsInitial } from './settings/reducer/settingsReducer';
import { sideBarInitial } from './sideBar/reducer/sideBarReducer';
import { TStore } from './types';
import { userInitial, userReducer } from './user/reducer/userReducer';

const initialState: TStore = {
  user: userInitial,
  game: gameInitial,
  sideBar: sideBarInitial,
  settings: settingsInitial,
  activePage: pageInitial,
};

const middleware = [thunk];

const rootReducer = combineReducers({ user: userReducer });

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;

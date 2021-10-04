import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { activePageReducer, pageInitial } from './activePage/reducer/activePageReducer';
import { gameInitial, gameReducer } from './game/reducer/gameReducer';
import { settingsInitial, settingsReducer } from './settings/reducer/settingsReducer';
import { sideBarInitial, sideBarReducer } from './sideBar/reducer/sideBarReducer';
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

const rootReducer = combineReducers({
  user: userReducer,
  game: gameReducer,
  sideBar: sideBarReducer,
  settings: settingsReducer,
  activePage: activePageReducer,
});

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;

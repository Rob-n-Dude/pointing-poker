import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { popUpInitial, popUpReducer } from './popUp/reducer/popUpReducer';
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
  popUp: popUpInitial,
};

const rootReducer = combineReducers({
  user: userReducer,
  game: gameReducer,
  sideBar: sideBarReducer,
  settings: settingsReducer,
  activePage: activePageReducer,
  popUp: popUpReducer,
});

const store = createStore(rootReducer, initialState, composeWithDevTools());

export default store;

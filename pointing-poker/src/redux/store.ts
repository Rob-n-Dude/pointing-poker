import { createStore } from 'redux';
import { TStore } from './types';

const initialState: TStore = {
	user: userInitial;
	game: gameInitial;
	sideBar: sideBarInitial;
	settings: settingsInitial;
}

const store = createStore(rootReducer, initialState);

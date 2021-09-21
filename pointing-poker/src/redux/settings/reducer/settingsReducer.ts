import { createReducer, Action } from 'typesafe-actions';
import { TLobbySettings } from '../types';

const settingsInitial = {} as TLobbySettings;

const settingsReducer = createReducer<TLobbySettings, Action>(settingsInitial);

export default settingsReducer;

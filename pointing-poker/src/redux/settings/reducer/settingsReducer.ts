import { createReducer, Action } from 'typesafe-actions';
import { TLobbySettings } from '../types';

export const settingsInitial = {} as TLobbySettings;

export const settingsReducer = createReducer<TLobbySettings, Action>(settingsInitial);

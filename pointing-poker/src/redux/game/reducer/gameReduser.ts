import { createReducer, Action } from 'typesafe-actions';
import { TGame } from '../types';

export const gameInitial = {} as TGame;

export const gameReducer = createReducer<TGame, Action>(gameInitial);

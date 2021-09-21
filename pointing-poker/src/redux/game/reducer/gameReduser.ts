import { createReducer, Action } from 'typesafe-actions';
import { TGame } from '../types';

const gameInitial = {} as TGame;

const gameReducer = createReducer<TGame, Action>(gameInitial);

export default gameReducer;

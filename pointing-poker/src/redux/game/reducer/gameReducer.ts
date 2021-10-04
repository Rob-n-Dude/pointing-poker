import { createReducer, Action } from 'typesafe-actions';
import {
  setRoundAverage,
  updateVotes,
  setCurrentRound,
  setRounds,
  setMaster,
  setAllPlayers,
} from '../actions/gameActions';
import { TGame } from '../types';

export const gameInitial = {} as TGame;

export const gameReducer = createReducer<TGame, Action>(gameInitial)
  .handleAction(setAllPlayers, (state, action) => {
    return {
      ...state,
      players: action.payload,
    };
  })
  .handleAction(setMaster, (state, action) => {
    return {
      ...state,
      master: action.payload,
    };
  })
  .handleAction(setRounds, (state, action) => {
    return {
      ...state,
      rounds: action.payload,
    };
  })
  .handleAction(setCurrentRound, (state, action) => {
    return {
      ...state,
      currentRound: action.payload,
    };
  }) // replace reducer updateVotes
  .handleAction(updateVotes, (state, action) => {
    return {
      ...state,
      currentRound: {
        ...state.currentRound,
        votes: action.payload,
      },
    };
  })
  .handleAction(setRoundAverage, (state, action) => {
    return {
      ...state,
      currentRound: {
        ...state.currentRound,
        average: action.payload,
      },
    };
  });

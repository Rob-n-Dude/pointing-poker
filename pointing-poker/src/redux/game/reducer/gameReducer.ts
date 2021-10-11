import { createReducer, Action } from 'typesafe-actions';
import { TUserInfo } from '../../../shared/types';
import { TRound, TGame } from '../types';
import {
  setRoundAverage,
  updateVotes,
  setCurrentRound,
  setRounds,
  setMaster,
  setAllPlayers,
} from '../actions/gameActions';

export const gameInitial = {
  players: [] as TUserInfo[],
  master: {} as TUserInfo,
  rounds: [],
  currentRound: {} as TRound,
};

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
  })
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

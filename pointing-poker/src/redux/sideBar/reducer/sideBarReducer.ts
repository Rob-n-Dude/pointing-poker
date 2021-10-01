import { createReducer, Action } from 'typesafe-actions';
import { setScoreVisability, setChatVisability, setIsSideBarNeeded } from '../actions/sideBarActions';
import { TSideBar } from '../types';

export const sideBarInitial = {} as TSideBar;

export const sideBarReducer = createReducer<TSideBar, Action>(sideBarInitial)
  .handleAction(setIsSideBarNeeded, (state, action) => {
    return {
      ...state,
      isNeeded: action.payload,
    };
  })
  .handleAction(setChatVisability, (state, action) => {
    return {
      ...state,
      chat: action.payload,
    };
  })
  .handleAction(setScoreVisability, (state, action) => {
    return {
      ...state,
      score: action.payload,
    };
  });

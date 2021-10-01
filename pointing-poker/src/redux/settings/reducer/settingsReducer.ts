import { createReducer, Action } from 'typesafe-actions';
import { addIssue, removeIssue, setLobbySettings } from '../actions/settingsAction';
import { TLobbySettings } from '../types';

export const settingsInitial = {} as TLobbySettings;

export const settingsReducer = createReducer<TLobbySettings, Action>(settingsInitial)
  .handleAction(setLobbySettings, (state, action) => {
    return {
      ...state,
      ...action.payload,
    };
  })
  .handleAction(removeIssue, (state, action) => {
    return {
      ...state,
      issueList: state.issueList.filter((issue) => issue !== action.payload), // нужно добавить какие то айдишники для ишью листа
    };
  })
  .handleAction(addIssue, (state, action) => {
    return {
      ...state,
      issueList: state.issueList.concat(action.payload),
    };
  });

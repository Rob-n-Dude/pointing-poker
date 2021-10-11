import { Action, createReducer } from 'typesafe-actions';
import togglePopUpAction from '../actions/popUpAction';
import { TPopUpRedux } from '../types';

export const popUpInitial = {} as TPopUpRedux;

export const popUpReducer = createReducer<TPopUpRedux, Action>(popUpInitial).handleAction(
  togglePopUpAction,
  (state, action) => {
    return {
      ...state,
      isShowing: action.payload,
    };
  },
);

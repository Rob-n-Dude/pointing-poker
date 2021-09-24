import { createReducer, Action } from 'typesafe-actions';
import { TUserInfo } from '../../../shared/types';
import { registerUser } from '../actions/userActions';

export const userInitial = {} as TUserInfo;

export const userReducer = createReducer<TUserInfo, Action>(userInitial).handleAction(registerUser, (state, action) => {
  return {
    ...state,
    ...action.payload,
  };
});

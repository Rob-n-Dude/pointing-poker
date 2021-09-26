import { Action } from 'typesafe-actions';
import { ThunkAction } from 'redux-thunk';
import { createAction } from 'typesafe-actions/dist/deprecated/create-action';
import { userApi } from '../../../services/Api';
import { TUserInfo } from '../../../shared/types';
import { TStore } from '../../types';

export const registerUser = createAction('user/registerUser', (action) => {
  return (user: TUserInfo) => action(user);
});

export const createUserThunk = (user: TUserInfo): ThunkAction<void, TStore, unknown, Action> => {
  userApi.createUserRequest(user);
  return (dispatch) => dispatch(registerUser(user));
};

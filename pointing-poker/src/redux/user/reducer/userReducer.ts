import { createReducer, Action } from 'typesafe-actions';
import { TUserInfo } from '../../../shared/types';

const userInitial = {} as TUserInfo;

const userReducer = createReducer<TUserInfo, Action>(userInitial);

export default userReducer;

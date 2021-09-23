import { createReducer, Action } from 'typesafe-actions';
import { TUserInfo } from '../../../shared/types';

export const userInitial = {} as TUserInfo;

export const userReducer = createReducer<TUserInfo, Action>(userInitial);

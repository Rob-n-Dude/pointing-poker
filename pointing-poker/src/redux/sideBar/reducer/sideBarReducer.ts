import { createReducer, Action } from 'typesafe-actions';
import { TSideBar } from '../types';

export const sideBarInitial = {} as TSideBar;

export const sideBarReducer = createReducer<TSideBar, Action>(sideBarInitial);

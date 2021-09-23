import { createReducer, Action } from 'typesafe-actions';
import { TActivePage } from '../types';

export const pageInitial = {} as TActivePage;

export const sideBarReducer = createReducer<TActivePage, Action>(pageInitial);

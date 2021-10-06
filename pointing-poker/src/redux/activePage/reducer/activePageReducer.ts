import { createReducer, Action } from 'typesafe-actions';

import changePageTo from '../actions/activePageActions';
import { TActivePage } from '../types';

export const pageInitial = {} as TActivePage;

export const activePageReducer = createReducer<TActivePage, Action>(pageInitial).handleAction(
  changePageTo,
  (page, action) => {
    return {
      ...page,
      page: action.payload,
    };
  },
);

import { createAction } from 'typesafe-actions';

export const setIsSideBarNeeded = createAction('sideBar/setIsNeeded', (value: boolean) => value)<boolean>();

export const setChatVisability = createAction('sideBar/set-chat-visability', (value: boolean) => value)<boolean>();

export const setScoreVisability = createAction(
  'sideBar/set-setScoreVisability-visability',
  (value: boolean) => value,
)<boolean>();

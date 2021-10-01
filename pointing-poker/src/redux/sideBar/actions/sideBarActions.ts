import { createAction } from 'typesafe-actions/dist/deprecated/create-action';

export const setIsSideBarNeeded = createAction('sideBar/setIsNeeded', (action) => {
  return (value: boolean) => action(value);
});

export const setChatVisability = createAction('sideBar/set-chat-visability', (action) => {
  return (value: boolean) => action(value);
});

export const setScoreVisability = createAction('sideBar/set-setScoreVisability-visability', (action) => {
  return (value: boolean) => action(value);
});

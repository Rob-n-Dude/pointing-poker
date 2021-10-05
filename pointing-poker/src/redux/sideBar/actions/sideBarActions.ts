import { action } from 'typesafe-actions';

export const setIsSideBarNeeded = (value: boolean) => action('sideBar/setIsNeeded', value);

export const setChatVisability = (value: boolean) => action('sideBar/set-chat-visability', value);

export const setScoreVisability = (value: boolean) => action('sideBar/set-setScoreVisability-visability', value);

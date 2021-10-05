import { TStore } from '../../types';

export const getSideBarStatus = ({ sideBar }: TStore) => sideBar;

export const getIsSideBarNeeded = ({ sideBar }: TStore) => sideBar.isNeeded;

export const getIsChat = ({ sideBar }: TStore) => sideBar.chat;

export const getIsScore = ({ sideBar }: TStore) => sideBar.score;

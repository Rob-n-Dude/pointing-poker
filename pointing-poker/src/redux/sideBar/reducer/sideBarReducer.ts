import { createReducer, Action } from 'typesafe-actions';
import { TSideBar } from '../types';

const sideBarInitial = {} as TSideBar;

const sideBarReducer = createReducer<TSideBar, Action>(sideBarInitial);

export default sideBarReducer;

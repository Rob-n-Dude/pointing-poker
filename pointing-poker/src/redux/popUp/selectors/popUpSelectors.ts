import { TStore } from '../../types';

const getIsPopUpShowing = ({ popUp }: TStore) => popUp.isShowing;

export default getIsPopUpShowing;

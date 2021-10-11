import { TUserInfo } from '../../../shared/types';
import { TStore } from '../../types';

const getUser = ({ user }: TStore): TUserInfo => user;

export default getUser;

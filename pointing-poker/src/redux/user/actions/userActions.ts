import { action } from 'typesafe-actions';
import { TUserInfo } from '../../../shared/types';

const registerUser = (user: TUserInfo) => action('user/registerUser', user);

export default registerUser;

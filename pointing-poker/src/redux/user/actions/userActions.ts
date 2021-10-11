import { createAction } from 'typesafe-actions';
import { TUserInfo } from '../../../shared/types';

const registerUser = createAction('user/registerUser', (user: TUserInfo) => user)<TUserInfo>();

export default registerUser;

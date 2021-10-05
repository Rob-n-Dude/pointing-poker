import { createAction } from 'typesafe-actions/dist/deprecated/create-action';
import { TUserInfo } from '../../../shared/types';

const registerUser = createAction('user/registerUser', (action) => {
  return (user: TUserInfo) => action(user);
});

export default registerUser;

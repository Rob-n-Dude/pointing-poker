import { TUserInfo } from '../../shared/types';

export type TChatMessage = {
  user: TUserInfo;
  textContent: string;
};

export type TChat = {
  messages: TChatMessage[];
};

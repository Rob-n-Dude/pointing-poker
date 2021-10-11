export type TPopUp = TPopUpContent & {
  content: React.FC<TPopUpContent>;
};

export type TPopUpContent = {
  user?: TUserInfo;
  userToKick?: TUserInfo;
  positiveAction: () => void;
  negativeAction: () => void;
};

// export type PopUpPositiveAction<T> = (user?: T) => void;
// export type PopUpPositiveActionTypes = TUserInfo;

export type TUserInfo = {
  name: string;
  lastName?: string;
  jobPosition?: string;
  avatar: TAvatar;
  role: UserRole;
  vote?: string;
};

export type TAvatar = {
  initial?: string;
  image?: string;
};

export enum UserRole {
  dealer = 'Dealer',
  player = 'Player',
  observer = 'Observer',
}

export enum ActivePages {
  greeting,
  lobby,
  stats,
}

export type TUserMessage = {
  sender: TUserInfo;
  text: string;
};

export type TUserVote = {
  user: TUserInfo;
  vote: string;
};

export type TUserKickUser = {
  initiator: TUserInfo;
  victim: TUserInfo;
};

export type TUserDecideToKick = {
  user: TUserInfo;
  decision: boolean;
};

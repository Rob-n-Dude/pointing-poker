export type TKickPlayer = TPopUpContent & {
  user: TUserInfo;
};

export type TPopUp = {
  content: React.FC<TPopUpContent>;
  positiveAction: () => void;
  negativeAction: () => void;
};

export type TPopUpContent = {
  positiveAction: () => void;
  negativeAction: () => void;
};

export type TUserInfo = {
  name: string;
  lastName?: string;
  jobPosition?: string;
  avatar: string; // | тип картинки которая вернется с серва
  role: UserRole;
};

export enum UserRole {
  dealer = 'Dealer',
  player = 'Player',
  observer = 'Observer',
}

export type TLobby = {
  user: TUserInfo;
};

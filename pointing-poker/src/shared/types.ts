export type TPopUp = TPopUpContent & {
  content: React.FC<TPopUpContent>;
};

export type TPopUpContent = {
  user?: TUserInfo;
  userToKick?: TUserInfo;
  positiveAction: () => void;
  negativeAction: () => void;
};

export type TUserInfo = {
  name: string;
  lastName?: string;
  jobPosition?: string;
  avatar: string; // | тип картинки которая вернется с серва
  role: UserRole;
  vote?: string;
};

export enum UserRole {
  dealer = 'Dealer',
  player = 'Player',
  observer = 'Observer',
}

export type TLobby = {
  user: TUserInfo;
};
